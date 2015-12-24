function chg(opt){
	var tab1 = document.getElementById("tab1");
	var tab2 = document.getElementById("tab2");
	var tab3 = document.getElementById("tab3");
	var hot = document.getElementById("hot");
	var news = document.getElementById("news");
	var soon = document.getElementById("soon");
	
	switch(opt){
		case 1:
			tab1.className = "display1";
			tab2.className = "hide1";
			tab3.className = "hide1";
			hot.className = "display2";
			news.className = "hide2";
			soon.className = "hide2";
			break;
		case 2:
			tab1.className = "hide1";
			tab2.className = "display1";
			tab3.className = "hide1";
			hot.className = "hide2";
			news.className = "display2";
			soon.className = "hide2";
			break;
		case 3:
			tab1.className = "hide1";
			tab2.className = "hide1";
			tab3.className = "display1";
			hot.className = "hide2";
			news.className = "hide2";
			soon.className = "display2";
			break;
		default:
			tab1.className = "display1";
			tab2.className = "hide1";
			tab3.className = "hide1";
			hot.className = "display2";
			news.className = "hide2";
			soon.className = "hide2";
			break;
	}
}