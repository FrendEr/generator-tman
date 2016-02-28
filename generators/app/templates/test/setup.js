import { expect, should } from 'chai';
import jsdom from 'jsdom';
import sinon from 'sinon';

// dom
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;

// chai.expect
global.expect = expect;

// chai.should
should();

// sinon
global.sinon = sinon;
