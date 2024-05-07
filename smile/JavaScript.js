let count = 0;
function fn(x) {
let smileDiv;
count++;
if(count % 2 == 1) {
  	x.style = `
		border-radius: 8px;
		width: 110px; 
		height: 75px; 
		display: flex; 
		justify-content: flex-start; 
		align-items: center; 
		flex-direction: column; 
		margin-top: 10px;`;
    smileDiv = document.getElementById("div11");
    smileDiv.style = `
		border: 0px;
		border-radius: 2px;
		height: 8px;
		background-color: rgb(0, 0, 0, 0.7);
		top: 55px;
		left: 27.5px;`;
    for (let i = 15; i <= 16; i++){
    	smileDiv = document.getElementById(`div${i}`);
      	smileDiv.style = `
			width: 100%;
			height: 21px;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			margin-top: -10px;
			margin-bottom: 10px;`;
    	}
    for(let j = 1; j <= 10; j++){
       smileDiv = document.getElementById(`div${j}`);
       smileDiv.style =" display: block; border-radius: 30%";
        }
  	} else {
		x.style = "";
		smileDiv = document.getElementById("div11");
		smileDiv.style = "";
		for(let i = 2; i <= 10; i++) {
			if (i == 6) continue;
			smileDiv = document.getElementById(`div${i}`);
			smileDiv.style = `display: none;`;
		}
  	for (let k = 15; k <= 16; k++) {
		smileDiv = document.getElementById(`div${k}`);
		smileDiv.style = "";
	}
  	for (let j = 1; j <= 6; j += 5) {
  		smileDiv = document.getElementById(`div${j}`);
      	smileDiv.style = `
		border: 0px solid rgb(0, 0, 0, 0.7);
		width: 10px;
		height: 10px;
		background-color: rgb(0, 0, 0, 0.7);
		border-radius: 50%;
		margin-top: 30px;`;
		}
  	}
}