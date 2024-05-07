let count = 0;
function fn() {
count++;
if(count % 2 == 1) {
	document.querySelector('#menuListAll').style.marginLeft = "0px";
	document.querySelector('body').style.backgroundColor = "#510d0de0";
	for (let i = 1; i <= 3; i++) {
		(
			(x) => {
				let menuDiv = document.getElementById(`div${x}`);
				menuDiv.style = "top: 15px; position: absolute; border-radius: 10px; width: 34px";
				if (x == 1) {
					menuDiv.style.backgroundColor = "rgb(256, 256, 256)";
					menuDiv.style.transform = "rotate(0.125turn)";
				} else if (x == 2){ 
					menuDiv.style.transform = "rotate(0.375turn)";
					menuDiv.style.backgroundColor = "rgb(256, 256, 256)";
				} else {
					menuDiv.style.transform = "rotate(0.375turn)";
					menuDiv.style.backgroundColor = "rgb(256, 256, 256, 0)";
				}
			}
		)(i);
	}
} else {
	document.querySelector('body').style.backgroundColor = "white";
	document.querySelector('#menuListAll').style.marginLeft = "-500px";
	for (let i = 1; i <= 3; i++) {
		(
			(x) => {
				let menuDiv = document.getElementById(`div${x}`);
				menuDiv.style = "position: absolute; width: 30px; height: 3px; background-color: rgb(24, 24, 24, 0.8); transition; 200ms;border-radius: 10px;";
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
}
