'use strict';
let path = require('path');
let fs = require('fs');
let yeoman = require('yeoman-generator');
let _ = require('lodash');
let inNeedPrompts = require('./prompts').inNeedPrompts;
let depPrompts = require('./prompts').depPrompts;
let utils = require('../../utils');

let mergeUtil = require('./mergeUtil');
_.merge(yeoman.Base.prototype, mergeUtil);

module.exports = yeoman.Base.extend({

    constructor: function() {
        yeoman.Base.apply(this, arguments);

        this.data = {
            npmTool: 'npm'
        };
        this.config.save();
    },

    prompting: function() {
        let done = this.async();
        let prompts = inNeedPrompts;

        this.prompt(prompts, function(props) {
            _.assign(this.data, props);

            if (props.install) {
                let npmToolPrompt = _.find(depPrompts, {'name': 'npmTool'});
                prompts.push(npmToolPrompt);
            }

            done();
        }.bind(this));
    },

    depsMapFormat: function(map) {
        if (!map) return;
        return JSON.parse('{"' + map.name + '":"' + map.version + '"}');
    },

    addDeps: function(group, dependencies, devDependencies) {
        const self = this;

        // dependencies
        _.forEach(utils.config.getDepsByGroup(group), function(value, key) {
            _.assign(dependencies, self.depsMapFormat(value));
        });

        // devDependencies
        _.forEach(utils.config.getDevDepsByGroup(group), function(value, key) {
            _.assign(devDependencies, self.depsMapFormat(value));
        });
    },

    configuring: function() {
        let packageSettings = {
            name: this.data.appName,
            version: this.data.appVersion,
            descrition: 'Your descrition here',
            main: '',
            scripts: utils.config.getScripts('scripts', this.data.coverage),
            repository: '',
            keywords: '',
            author: 'Your name here',
            devDependencies: {},
            dependencies: {}
        };

        let dependencies = {};
        let devDependencies = {};

        // add normal dependencies and devDependencies
        this.addDeps('normal', dependencies, devDependencies);

        // add react dependencies and devDependencies
        if (this.data.react) {
            this.addDeps('react', dependencies, devDependencies);

            // change coverage scripts
            _.assign(packageSettings.scripts, utils.config.getScripts('react', this.data.coverage));
        }

        // add es6 dependencies and devDependencies
        if (this.data.es6) {
            this.addDeps('es6', dependencies, devDependencies);

            // change coverage scripts
            _.assign(packageSettings.scripts, utils.config.getScripts('es6', this.data.coverage));
        }

        // add (react || es6) dependencies and devDependencies
        if (this.data.react || this.data.es6) {
            this.addDeps('react-OR-es6', dependencies, devDependencies);

            // change coverage scripts
            _.assign(packageSettings.scripts, utils.config.getScripts('react-OR-es6', this.data.coverage));
        }

        // add (react && es6) dependencies and devDependencies
        if (this.data.react && this.data.es6) {
            this.addDeps('react-AND-es6', dependencies, devDependencies);
        }

        // add coverage dependencies and devDependencies
        if (this.data.coverage) {
            this.addDeps('coverage', dependencies, devDependencies);
        }

        // add (coverage && es6) dependencies and devDependencies
        if (this.data.coverage && this.data.es6) {
            this.addDeps('coverage-AND-es6', dependencies, devDependencies);
        }

        // add assert dependencies
        _.assign(devDependencies, this.depsMapFormat({
            name: this.data.assert,
            version: 'x.x.x'
        }));

        _.assign(packageSettings.devDependencies, devDependencies);
        _.assign(packageSettings.dependencies, dependencies);

        this.fs.writeJSON(this.destinationPath('package.json'), packageSettings);
    },

    writing: function() {
        // copy normal template
        if (!this.data.react && !this.data.es6) {
            this.templatify('normal/**/*', process.cwd());
        }

        // copy es6 template
        if (this.data.es6 && !this.data.react) {
            this.templatify('es6/**/*', process.cwd());
            this.templatify('babel/_babelrc-es6', '.babelrc');
        }

        // copy react template
        if (this.data.react && !this.data.es6) {
            this.templatify('react/**/*', process.cwd());
            this.templatify('babel/_babelrc-react', '.babelrc');
        }

        // copy react && es6 template
        if (this.data.react && this.data.es6) {
            this.templatify('react-and-es6/**/*', process.cwd());
            this.templatify('babel/_babelrc-es6-and-react', '.babelrc');
        }

        // copy setup file
        this.templatify('setup/_setup-' + this.data.assert, 'test/setup.js');

        // copy .instanbul.yml
        if (this.data.coverage) {
            this.templatify('_istanbul.yml', '.istanbul.yml');
        }
    },

    install: function() {
        if (this.data.install) {
            if (this.data.npmTool !== 'npm') {
                this.runInstall(this.data.npmTool, '', {});
            } else {
                this.installDependencies({
                    bower: false
                });
            }
        }
    }
});
