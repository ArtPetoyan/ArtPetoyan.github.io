let body = document.querySelector('body');
let menuListAll = document.querySelector('#menuListAll');
let contentContacts = document.querySelector('#contentContacts');
let menu = document.querySelector('#menu');
let text1 = `This is how you can reach me...`;
let count = 0;
document.querySelector('.mainText').innerHTML = text1;
function onOpenSidebar (count) {
	if(Math.abs(count % 2)) {
		openSidebar();
		if (innerWidth < 980) contentContacts.style.display = 'none';
	} else {
		closeSidebar();
		if (innerWidth < 980) contentContacts.style.display = 'block';
	}
}
function openSidebar () {
	menuListAll.style.marginLeft = "0px";
	menuListAll.style.transition = "500ms";
		contentContacts.style.top = "120%";
		body.style.setProperty("--somecolor", "#375366cc");
		for (let i = 1; i <= 3; i++) {
			(
				(x) => {
					let menuDiv = document.getElementById(`div${x}`);
					menuDiv.style = "top: 15px; position: absolute; border-radius: 10px; width: 34px";
					if (x == 1) {
						menuDiv.style.backgroundColor = "rgb(0 0 0 / 60%)";
						menuDiv.style.transform = "rotate(0.125turn)";
					} else if (x == 2){ 
						menuDiv.style.transform = "rotate(0.375turn)";
						menuDiv.style.backgroundColor = "rgb(0 0 0 / 60%)";
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
		contentContacts.style.top = "10%";
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

body.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    return false;
}, false);