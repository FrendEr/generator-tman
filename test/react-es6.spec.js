'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('react-es6', function() {
    describe('without coverage', function() {
        before(function(done) {
            helpers.run(path.join(__dirname, '../generators/app'))
                .withPrompts({
                    appName: 'tman-react-es6',
                    appVersion: '1.0.0',
                    assert: 'chai',
                    es6: true,
                    react: true,
                    coverage: false,
                    install: false
                })
                .on('end', done);
        });

        it('creates files', function() {
            assert.file([
                'package.json',
                'src/app.js',
                'src/rc-components/button.js',
                'src/rc-components/nav.js',
                'src/es-next/es2015.js',
                'test/rc-components/button.spec.js',
                'test/rc-components/nav.spec.js',
                'test/es-next/es2015.spec.js',
                'test/setup.js',
                '.babelrc'
            ]);
        });
    });

    describe('with coverage', function() {
        before(function(done) {
            helpers.run(path.join(__dirname, '../generators/app'))
                .withPrompts({
                    appName: 'tman-react-es6',
                    appVersion: '1.0.0',
                    assert: 'chai',
                    es6: true,
                    react: true,
                    coverage: true,
                    install: false
                })
                .on('end', done);
        });

        it('creates files', function() {
            assert.file([
                '.istanbul.yml'
            ]);
        });
    });

});
