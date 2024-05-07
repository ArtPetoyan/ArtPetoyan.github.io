let slideshow = document.querySelector('#slideshow'),
	slide = document.querySelectorAll('#slideshow .slide'),
	timeBars = document.querySelector('#timeBar'),
	z = 0, n = 0, v = 0, k = 0, l = 0, h = 1, stInt, stInt2;

window.onkeydown = (e) => {
	let x = 0;
	if (e.key == ' ') {
		playPauseSlide();
	}
}; // Space ստեղնի շնորհիվ կարող ենք play/pause անել սլայդը;

slideshow.addEventListener('click', playPauseSlide);
play.addEventListener('click', playSlide);
pause.addEventListener('click', pauseSlide);

function mainFn() {
	z++;
	if (z > 8) {
		z = 0;
		pauseSlide();
		setTimeout(playSlide, 0);
	} 
	img1.style.marginLeft = `-${z * 100}%`;
}
function pauseSlide () {
	clearInterval(stInt2);
	pause.style.display = 'none';
	play.style.display = 'block';
}
function nextSlide() {
	v++;
	v > 8 ? v = 0 : v;
	for (let i = 0; i < slide.length; i++) {
		slide[i].style.filter = 'brightness(0%)';
	}
	slide[v].style.filter = 'brightness(100%)';
	mainFn();
}
function playSlide () {
	slide[0].style.filter = 'brightness(100%)';
	play.style.display = 'none';
	pause.style.display = 'block';
	stInt2 = setInterval(timeBar, 30);
}
function playPauseSlide() {
	k++;
	k % 2 ? playSlide() : pauseSlide();
}
function timeBar() {
	l++;
	l > timeBars.clientWidth ? l = 0 : l;
	time.style.width = `${l}px`;
	if (h > 9) h = 1;
	if (l > (timeBars.clientWidth / 9) * h || l == timeBars.clientWidth) {
		h++;
		nextSlide();
	}

}
