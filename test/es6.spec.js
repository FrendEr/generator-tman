'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('es6', function() {
    describe('without coverage', function() {
        before(function(done) {
            helpers.run(path.join(__dirname, '../generators/app'))
                .withPrompts({
                    appName: 'tman-es6',
                    appVersion: '1.0.0',
                    assert: 'chai',
                    es6: true,
                    react: false,
                    coverage: false,
                    install: false
                })
                .on('end', done);
        });

        it('creates files', function() {
            assert.file([
                'package.json',
                'src/es-next/es2015.js',
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
                    appName: 'tman-es6',
                    appVersion: '1.0.0',
                    assert: 'chai',
                    es6: true,
                    react: false,
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
