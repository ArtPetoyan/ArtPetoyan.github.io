let imgs = document.querySelectorAll('.imgClass'),
 rightBtn = document.querySelector('#right'),
 leftBtn = document.querySelector('#left'); 
rightBtn.addEventListener('click', right);
leftBtn.addEventListener('click', left);
function right() {
    imgs.forEach(el => {
        if (el.classList.contains('first')) {
            el.classList.replace('first', 'second');
        } else if (el.classList.contains('second')) {
            el.classList.replace('second', 'third');
        } else {
            el.classList.replace('third', 'first');
        }
	});
}
function left() {
    imgs.forEach(el => {
        if (el.classList.contains('first')) {
            el.classList.replace('first', 'third');
        } else if (el.classList.contains('second')) {
            el.classList.replace('second', 'first');
        } else {
            el.classList.replace('third', 'second');
        }
	});
}
