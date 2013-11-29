// Load native UI library
var gui = require('nw.gui');
var hn  = require("./hn.js");

// Create a tray icon
var tray = new gui.Tray({ title: 'Tray', icon: 'icon.png' });

var menu = new gui.Menu();
var quit = new gui.MenuItem({label:'Quit'});

menu.append(quit);
quit.on("click", function(e){
	gui.App.quit();
});

hn.on("refresh", function(data){

	var data=data.reverse();
	var index=0;//position at which to insert
	for(i in data){
		var item = data[i];
		var menuItem = new gui.MenuItem({type:'checkbox', label: item['title']});
		menuItem.url = item['url'];
		menu.insert(menuItem,i);
		i++;
	}
})



tray.menu = menu;