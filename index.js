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
	//node-webkit asks us to reuse UI elements
	//so we will do that exactly
	var data=data.reverse();
	//We already have news items
	if(menu.items.length>1)
	{
		for(i in data){
			newsItem = data[i];
		}
	}
	else{
		for(i in data){
			var item = data[i];
			var label = '('+util.pad(item['points'],3)+'/'+util.pad(item['comments_count'],3)+') '+item['title'];
			var menuItem = new gui.MenuItem({type:'checkbox', label: label, checked:true});
			menuItem.url = item['url'];
			menu.insert(menuItem, 0);
			i++;
		}
	}
})

tray.menu = menu;