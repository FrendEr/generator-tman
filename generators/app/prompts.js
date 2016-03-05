'use strict';
let utils = require('../../utils');
let chalk = require('chalk');

const inNeedPrompts = [
    {
        type: 'input',
        name: 'appName',
        message: 'Please choose your application name',
        default: utils.yeoman.getAppName()
    },
    {
        type: 'input',
        name: 'appVersion',
        message: 'Please choose your application version',
        default: '1.0.0'
    },
    {
        type: 'list',
        name: 'assert',
        message: 'What\'s the assert lib you would prefer to use ?',
        choices: utils.config.getChoice('assert'),
        default: [0]
    },
    {
        type: 'confirm',
        name: 'es6',
        message: 'Would you like to use ES6 ?',
        default: true
    },
    {
        type: 'confirm',
        name: 'react',
        message: 'Would you like to use React ?',
        default: true
    },
    {
        type: 'confirm',
        name: 'coverage',
        message: 'Would you like to show Coverage ?',
        default: true
    },
    {
        type: 'confirm',
        name: 'install',
        message: 'Would you like to install dependencies ?',
        default: true
    }

];

const depPrompts = [
    {
        type: 'list',
        name: 'npmTool',
        message: 'What\'s the npm tool you would prefer to use ?',
        choices: utils.config.getChoice('npm-tool'),
        default: [0]
    }
];

module.exports = {
    inNeedPrompts: inNeedPrompts,
    depPrompts: depPrompts
}
