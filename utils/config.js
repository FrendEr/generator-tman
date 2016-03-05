'use strict';
let _ = require('lodash');
let configOpts = require('./configopts.json');
let depsOpts = require('./depsopts');
let scriptOpts = require('./scriptopts');

/**
 * get choice
 * @param  {String} name choice name
 * @return {Array}       choice list
 */
function getChoice(name) {
    return _.isArray(configOpts[name]) && configOpts[name];
}

/**
 * get dependencies by group
 * @param  {String} group dependencies group
 * @return {Array}        dependencies item
 */
function getDepsByGroup(group) {
    return _.filter(depsOpts['dependencies'], {'group': group});
}

/**
 * get dev dependencies by group
 * @param  {String} group dev dependencies group
 * @return {Array}        dev dependencies item
 */
function getDevDepsByGroup(group) {
    return _.filter(depsOpts['devDependencies'], {'group': group});
}

/**
 * get dependencies by name
 * @param  {String} name dependencies name
 * @return {Object}      dependencies item
 */
function getDepsByName(name) {
    return _.find(depsOpts['dependencies'], {'name': name});
}

/**
 * get dev dependencies by name
 * @param  {String} name dev dependencies name
 * @return {Object}      dev dependencies item
 */
function getDevDepsByName(name) {
    return _.find(depsOpts['devDependencies'], {'name': name});
}

/**
 * get npm scripts
 * @param  {String}  name scripts name
 * @param  {Boolean} flag is show coverage infomations
 * @return {Array}        npm scripts
 */
function getScripts(name, flag) {
    let scripts = scriptOpts[name];
    if (!flag) {
        _.unset(scripts, 'coverage');
    }
    return scripts;
}

module.exports = {
    getChoice: getChoice,
    getDepsByGroup: getDepsByGroup,
    getDevDepsByGroup: getDevDepsByGroup,
    getDepsByName: getDepsByName,
    getDevDepsByName: getDevDepsByName,
    getScripts: getScripts
}
