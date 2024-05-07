let str = 'Արեգակի խավարում, տիեզերական երևույթ է, երբ Լուսինն անցնում է Երկրի և Արեգակի միջով՝ մասամբ կամ ամբողջությամբ ծածկելով Արեգակի սկավառակը երկրային դիտորդի համար։ Կախված Երկրի նկատմամբ իր դիրքից և Երկրից ունեցած հեռավորությունից՝ Լուսինը կարող է ծածկել Արեգակն ամբողջությամբ (լրիվ խավարում) կամ դրա մի մասը միայն (մասնակի խավարում)։ Լինում են նաև օղակաձև և հիբրիդ խավարումներ։ Հիբրիդ խավարում շատ հազվադեպ է դիտվում, երբ երկրագնդի որոշ մասում լրիվ, որոշ մասում օղակաձև խավարում է դիտվում։Հյուսիսային Ամերիկայում 2017 թվականի օգոստոսի 21-ին, երկուշաբթի օրը բացառիկ աստղագիտական իրադարձություն էր Արեգակի լրիվ խավարումը, որը եղել է ամբողջ Միացյալ Նահանգներում, Արևմտյան ափից մինչև Արևելյան ափ։';
let starsDiv = document.querySelector('#starsDiv');
let text = document.querySelector('#text'), z, o;
text.style.right = '50px';
let arr = [], k = 0, q = 0, textSInt, brightSInt;
for(let ind of str) {
	arr.push(ind)
}
for (let i = 0; i < 400; i++) {
	let stars = document.createElement('img');
	stars.src = 'star.png';
	stars.classList.add('star1');
	let tops = Math.round(Math.random() * 800);
	let lefts = Math.round(Math.random() * 3500);
	let widths = (Math.random() * 10).toFixed(3);
	stars.style.top = `${tops}px`;
	stars.style.left = `${lefts}px`;
	stars.style.width = `${widths}px`;
	stars.style.zIndex = -1;
	starsDiv.appendChild(stars);
}
let starsAll = document.querySelectorAll('.star1');
sub.onclick = () => {
	cont.classList.add('anim1');
	text.classList.add('right');
	for (let i = 0; i < starsAll.length; i++) {
		starsAll[i].classList.add('starMove')
	}
	sub.style = 'transform: scale(0)';
	fn1();
	fn2();
}
function fn1() {
	setTimeout(() => {
		sub.style = 'transform: scale(1.5)';
		text.classList.add('right');
		text.classList.remove('left');
		for (let i = 0; i < starsAll.length; i++) {
			starsAll[i].classList.remove('starMove')
		}
		text.innerHTML = '';
	}, 58000);
}
function fn2() {
	k = 0;
	setTimeout(() => {
		text.classList.add('left');
		text.classList.remove('right');
		
	}, 30000);
	textSInt = setInterval(() => {
		if (k < arr.length) {
			text.innerHTML += arr[k];
			k++;
		} else {
			clearInterval(textSInt);
		}
	}, 75);
	
}

