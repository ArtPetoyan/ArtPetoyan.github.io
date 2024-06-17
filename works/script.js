let body = document.querySelector('body');
let menuListAll = document.querySelector('#menuListAll');
let contentWorks = document.querySelector('#contentWorks');
let menu = document.querySelector('#menu');
let count = 0;
function onOpenSidebar (count) {
	if(Math.abs(count % 2)) {
		openSidebar();
		if (innerWidth < 980) contentWorks.style.display = 'none';
	} else {
		closeSidebar();
		if (innerWidth < 980) contentWorks.style.display = 'block';
	}
}

function openSidebar () {
	menuListAll.style.marginLeft = "0px";
	menuListAll.style.transition = "500ms";
	contentWorks.style.zIndex = "-99";
	body.style.setProperty("--somecolor", "#375366cc");
	body.style.overflow = 'hidden';
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
	body.style.overflow = 'auto';
		contentWorks.style.zIndex = "0";
		menuListAll.style.marginLeft = "-100%";
		menuListAll.style.transition = "100ms";
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
function changeLocation (url) {
	location.href = url;
	return;
}
body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    return false;
}, false);