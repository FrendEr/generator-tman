'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('lodash');
var util = require('./util');

_.merge(yeoman.Base.prototype, util);

module.exports = yeoman.Base.extend({

    constructor: function() {
        yeoman.Base.apply(this, arguments);

        this.data = {
            coverage: true,
            install: true,
            cnpm: false
        };
        this.config.save();
    },

    prompting: function() {
        var done = this.async();

        var prompts = [{
            type: 'confirm',
            name: 'install',
            message: 'Would you like to install dependencies ?',
            default: true
        }];

        if (this.data.install) {
            prompts.push({
                type: 'confirm',
                name: 'cnpm',
                message: 'Would you like to install dependencies by using CNPM ?',
                default: true
            });
        }

        prompts.push({
            type: 'list',
            name: 'assert',
            message: 'What\'s the assert lib you would prefer to use ?',
            choices: ['chai'],
            default: 0
        });

        this.prompt(prompts, function(props) {
            _.assign(this.data, props);

            done();
        }.bind(this));
    },

    writing: {
        srcTpl: function() {
            this.templatify('src/**/*', 'src/');
        },

        specTpl: function() {
            this.templatify('test/**/*', 'test/');
        },

        packageJSON: function() {
            this.templatify('_package.json', 'package.json');
        },

        babelSetting: function() {
            this.templatify('_babelrc', '.babelrc');
        },

        instanbulSetting: function() {
            this.templatify('_istanbul.yml', '.istanbul.yml');
        }
    },

    install: function() {
        if (this.data.install) {
            this.log('npm modules installing... ');

            if (this.data.cnpm) {
                this.runInstall('cnpm', '', {});
            } else {
                this.installDependencies({
                    bower: false
                });
            }
        }
    }
});
