'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('normal', function() {
    describe('without coverage', function() {
        before(function(done) {
            helpers.run(path.join(__dirname, '../generators/app'))
                .withPrompts({
                    appName: 'tman-normal',
                    appVersion: '1.0.0',
                    assert: 'chai',
                    es6: false,
                    react: false,
                    coverage: false,
                    install: false
                })
                .on('end', done);
        });

        it('creates files', function() {
            assert.file([
                'package.json',
                'test/array.spec.js',
                'test/setup.js'
            ]);
        });
    });

    describe('with coverage', function() {
        before(function(done) {
            helpers.run(path.join(__dirname, '../generators/app'))
                .withPrompts({
                    appName: 'tman-normal',
                    appVersion: '1.0.0',
                    assert: 'chai',
                    es6: false,
                    react: false,
                    coverage: true,
                    install: false
                })
                .on('end', done);
        });

        it('creates files', function() {
            assert.file([
                'package.json',
                'test/array.spec.js',
                'test/setup.js',
                '.istanbul.yml'
            ]);
        });
    });

});
