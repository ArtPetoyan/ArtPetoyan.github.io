let btns = document.querySelectorAll('button');
let spans = document.querySelectorAll('form span');
let setInt, ms = 0, s = 0, m = 0;
btns[0].addEventListener('click', start);
btns[1].addEventListener('click', stop);
btns[2].addEventListener('click', reset);
function start() {
	setInt = setInterval(() => {
		ms++;
		if (ms >= 100) {
			ms = 0;
			s++;
			if (s >= 60) {
				s = 0;
				m++;
				m <= 9 ? m = `0${m}` : m;
				spans[0].innerHTML = m;
			}
			s <= 9 ? s = `0${s}` : s;
			spans[1].innerHTML = s;
		}
		ms <= 9 ? ms = `0${ms}` : ms;
		spans[2].innerHTML = ms;
	}, 10);
}
function stop() {
	clearInterval(setInt);
	let divStop = document.createElement('div'), arr = [];
	divStop.classList.add('divStop');
	container.appendChild(divStop);
	for(let i = 0; i < spans.length; i++) {
		arr.push(spans[i].innerHTML);
	}
	divStop.innerHTML += `<span>${arr.join(' : ')}</span>`;
	ms = arr[2]; s = arr[1]; m = arr[0];
}
function reset() {
	stop();
	let divStop = document.querySelectorAll('.divStop');
	for(let i = 0; i < divStop.length; i++) {
		divStop[i].remove();
	}
	for(let i = 0; i < spans.length; i++) {
		spans[i].innerHTML = '00';
	}
	ms = 0; s = 0; m = 0;
}










