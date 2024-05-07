let slideshow = document.querySelector('#slideshow'),
	slide = document.querySelectorAll('#slideshow .slide'),
	bullet = document.querySelectorAll('.bullet'),
	background = document.querySelector('.background'),
	slideIndex = 1,
	fn,
	k = 0;

//////////// Երբ էջը բացվի, սլայդը սկսի ցուցադրվել ավտոմատ։
window.onload = () => { 
	playSlide();
};
////////////

slideshow.addEventListener('click', playPauseSlide); // playPause ֆունկցիան կանգնեցնում կամ սկսում է աուտոփլեյը
play.addEventListener('click', playSlide);// playSlide ֆունկցիան սկսում է սլայդի աուտոփլեյը
pause.addEventListener('click', pauseSlide);// pauseSlide ֆունկցիան սկսում է սլայդի աուտոփլեյը
nextButton.addEventListener('click', plusOne);// plusOne ֆունկցիան ցուցադրում է հաջորդ սլայդը՝ դեպի աջ
prevButton.addEventListener('click', minusOne);// minusOne ֆունկցիան ցուցադրում է նախորդ սլայդը՝ դեպի ձախ

show(slideIndex); // Կանչում ենք մեկ անգամ, որպեսզի մեզ ցույց տա առաջին նկարը;

function show(a) {
	for (let i = 0; i < slide.length; i++) {
		slide[i].style.display = 'none';
	}
	if (a > slide.length) {
		slideIndex = 1;
	} else if (a < 1) {
		slideIndex = slide.length;
	} 
	slide[slideIndex - 1].style.display = "block";
	bullet[slideIndex - 1].style.backgroundColor = 'rgba(144, 148, 148)';
}

function nextSlide(x) {
	show(slideIndex += x);
}

function nextSlideEventPlay() {
	nextSlide(1);
	bullColor();
}


function playSlide() {
	fn = setInterval(nextSlideEventPlay, 1500);
	play.style.display = 'none';
	pause.style.display = 'block';
}

function pauseSlide() {
	clearInterval(fn);
	pause.style.display = 'none';
	play.style.display = 'block';
}
function playPauseSlide() {
	k++;
	k % 2 ? pauseSlide() : playSlide()
}
function backgroundChange() {
	background.style.background = `url(Images/${slideIndex}.jpg)`;
}

function plusOne() {
	plus(1);
	pauseSlide(); // ենթադրվում է, որ երբ կոնկրետ թերթում ենք սլայդը, այն պետք է կանգնի, անգամ եթե play-ն աշխատում է
	bullColor();
}

function minusOne() {
	plus(-1);
	pauseSlide(); // ենթադրվում է, որ երբ կոնկրետ թերթում ենք սլայդը, այն պետք է կանգնի, անգամ եթե play-ն աշխատում է
	bullColor();
}

function plus(x) {
	show(slideIndex += x);
}


for (let i = 0; i < bullet.length; i++) {
	function SSWB() {
		showSlideWithBull(i);
	}
	bullet[i].addEventListener('click', SSWB);
}

function showSlideWithBull(x) {
	for (let i = 0; i < slide.length; i++) {
		slide[i].style.display = 'none';
		bullet[i].style.backgroundColor = 'rgba(144, 148, 148, 0.3)';
	}
	bullet[x].style.backgroundColor = 'rgba(144, 148, 148)';
	slide[x].style.display = 'block';
	pauseSlide(); // ենթադրվում է, որ երբ կոնկրետ էջ ենք սեղմում պետք է կանգնի սլայդը, անգամ եթե play-ն աշխատում է
	slideIndex = x + 1;
	backgroundChange();
}
function bullColor() {
	for (let i = 0; i < bullet.length; i++) {
		bullet[i].style.backgroundColor = 'rgba(144, 148, 148, 0.3)';
	}
	bullet[slideIndex - 1].style.backgroundColor = 'rgba(144, 148, 148)';
	backgroundChange();
}






