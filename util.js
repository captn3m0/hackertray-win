var util = require('util');
module.exports = {
	pad: function(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	},
	labelfromNews: function(item){
		return '('+util.pad(item['points'],3)+'/'+util.pad(item['comments_count'],3)+') '+item['title'];
	}
}
