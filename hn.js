var EventEmitter = require( "events" ).EventEmitter;
var request = require('request');

var hn = new EventEmitter();

var fetchData = function(){
	request("https://node-hnapi.herokuapp.com/news", function(err,res,body){
		if(err) throw err;
		if(!err && res.statusCode==200){
			var data = JSON.parse(body)
			hn.emit('refresh', data);
		}
	});
	setInterval(fetchData, 15*1000);
}

fetchData();
module.exports = hn;