var assert = require('assert');
var hn=require('../hn.js');

hn.on('refresh', function(data){
	assert(data.length>0);
	process.exit(0);
})