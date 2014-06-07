// Load native UI library
var gui = require('nw.gui');
var hn  = require("./hn.js");
var util = require("./util.js");
var ui = require('./ui.js');
// Create a tray icon
var tray = new gui.Tray({ title: 'Tray', icon: 'icon.png' });

var menu = new gui.Menu();
var quit = new gui.MenuItem({label:'Quit'});

menu.append(quit);

quit.on("click", function(e){
	gui.App.quit();
});

function insertItem(item){

}

hn.on("refresh", function(data){
	var data = data.reverse();
	//We already have news items
	if(menu.items.length>1)
	{
		for(i in data){
			newsItem = data[i];
			menu.items[i].label = util.labelfromNews(newsItem);
			menu.items[i].url = newsItem['url'];
		}
	}
	else{
		for(i in data){
			var item = data[i];
			var label = util.labelfromNews(item);
			var menuItem = new gui.MenuItem({type:'checkbox', label: label});
			menuItem.url = item['url'];
			menu.insert(menuItem, 0);
			i++;
		}
	}
})

hn.on('error', function(err){
	console.log("Error occured while calling HN: "+err);
})

tray.menu = menu;

tray.on('click', function(e){
	console.log(e);
});
