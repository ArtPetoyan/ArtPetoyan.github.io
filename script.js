let body = document.querySelector('body');
let menuListAll = document.querySelector('#menuListAll');
let contentHome = document.querySelector('#contentHome');
let menu = document.querySelector('#menu');
let count = 0;
function onOpenSidebar (count) {
	if(Math.abs(count % 2)) {
		openSidebar()
	} else {
		closeSidebar()
	}
}
function openSidebar () {
	menuListAll.style.marginLeft = "0px";
		contentHome.style.zIndex = "-99";
		body.style.setProperty("--somecolor", "#375366cc");
		for (let i = 1; i <= 3; i++) {
			(
				(x) => {
					let menuDiv = document.getElementById(`div${x}`);
					menuDiv.style = "top: 15px; position: absolute; border-radius: 10px; width: 34px";
					if (x == 1) {
						menuDiv.style.backgroundColor = "#a1ccdc";
						menuDiv.style.transform = "rotate(0.125turn)";
					} else if (x == 2){ 
						menuDiv.style.transform = "rotate(0.375turn)";
						menuDiv.style.backgroundColor = "#a1ccdc";
					} else {
						menuDiv.style.transform = "rotate(0.375turn)";
						menuDiv.style.backgroundColor = "rgb(256, 256, 256, 0)";
					}
				}
			)(i);
		}
}
function closeSidebar() {
	body.style.setProperty("--somecolor", "");
	
		contentHome.style.zIndex = "0";
		menuListAll.style.marginLeft = "-100%";
		for (let i = 1; i <= 3; i++) {
			(
				(x) => {
					let menuDiv = document.getElementById(`div${x}`);
					menuDiv.style = "position: absolute; width: 30px; height: 3px; transition; 200ms;border-radius: 10px;";
					if (x == 1) {
						menuDiv.style.transform = "rotate(0turn)";
						menuDiv.style.top = "4px";
					} else if (x == 2) { 
							menuDiv.style.transform = "rotate(0.5turn)";
						menuDiv.style.top = "15px";
					} else {
						menuDiv.style.transform = "rotate(0.5turn)";
						menuDiv.style.top = "26px";
					}
				}
			)(i);
		}
}
function fn() {
	count++;
	onOpenSidebar(count);
}
onclick = (e) => {
	if (e.target.id == "menu") {
		closeSidebar();
		count % 2 ? count++ : count;
	}
};

body.onmousemove = (e) => {
	contentHome.style.boxShadow = `${e.x / 10 - innerWidth / 20}px ${e.y / 10 - innerHeight / 20}px 50px 10px #096b90e6`;
	// contentHome.style.boxShadow = `${e.x / 10 - 10}px ${e.y / 10 - 10}px 50px 30px #096b90e6`;
}
body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    return false;
}, false);