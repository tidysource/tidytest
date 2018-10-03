'use strict';

/*
Setup testing environment
=========================
*/

//Configure
var test = require('tape');
var colorize = require('tap-colorize');
var colorizeOptions = {
	pass : '#B2D9B5',
	fail : '#FE5A4E',
	info : '#EEEEEE'
};

//Pass on
test.createStream()
	.pipe(colorize(colorizeOptions))
	.pipe(process.stdout);

module.exports = test;
