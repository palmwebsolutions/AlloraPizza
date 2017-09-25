var menuHeader = document.querySelectorAll(".collapse-menu-header");
var menuItem = document.querySelectorAll(".collapse-menu-item");
var menuQuant = menuHeader.length;
var currentOpen = menuQuant;//vse scryto
var menuHeaderPosition = [];
var li = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
var anchor;
for(var i = 0; i < menuQuant; i++){
	menuHeaderPosition[i] = menuHeader[i].offsetTop - 20;
}


function dropDown(x){
	if(menuItem.length > 0){
		if(x == currentOpen){
			menuItem[currentOpen].style.display = "none";// zakryvaem current pri najatii na current
			currentOpen = menuQuant; //vse scryto
			window.scrollTo(0, menuHeaderPosition[0])
		}else{
			if(currentOpen != menuQuant){
				menuItem[currentOpen].style.display = "none";
			}
			menuItem[x].style.display = "block";
			currentOpen = x;
			window.scrollTo(0, menuHeaderPosition[x])
		}
	}
}
if(menuQuant > 0){
	for(var i = 0; i < menuQuant; i++){
		menuHeader[i].setAttribute("onclick", "dropDown("+i+")")
	}
}

function setActive(item){
	li[item].className += " active-li";
}

var imageNumber = 1;
var image = document.getElementById("image");

function gallery(ch){
	if(ch == 1){
		if(imageNumber < 5){
			imageNumber++;
		}else{
			imageNumber = 1;
		}
	}else{
		if(imageNumber > 1){
			imageNumber--;
		}else{
			imageNumber = 5;
		}
	}
	image.src = "gallery/image"+imageNumber+".jpg";
}

function toPrint(){
	window.print();
}






