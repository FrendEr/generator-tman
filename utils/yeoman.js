'use strict';

let path = require('path');

/**
 * base dir
 */
const baseDir = path.basename(process.cwd());

/**
 * get base dir
 * @return {String} base dir
 */
function getBaseDir() {
    return baseDir;
}

/**
 * get app name
 * @param  {String} appName app name
 * @return {String} app name
 */
function getAppName(appName) {
    if (!appName) {
        appName = getBaseDir();
    }

    return appName;
}

module.exports = {
    getBaseDir: getBaseDir,
    getAppName: getAppName
}
