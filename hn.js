var EventEmitter = require( "events" ).EventEmitter;
var request = require('request');
var hn = new EventEmitter();

var fetchData = function(){
	request("https://node-hnapi.herokuapp.com/news", function(err,res,body){
		if(err)
			hn.emit('error',err)
		if(!err && res.statusCode==200){
			var data = JSON.parse(body)
			hn.emit('refresh', data.slice(0,20));
		}
		else{
			hn.emit('error', res.statusCode)
		}
	});
	//Run every 10 minutes
	setInterval(fetchData, 10 * 60 * 1000);
}
fetchData();
module.exports = hn;
