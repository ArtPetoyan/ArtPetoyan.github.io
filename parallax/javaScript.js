let images = document.querySelectorAll('.imgClass');
let n = 0, a = 0, b = 0, c = 0, d = 0, g = 0, 
	h = 0, x = 0, y = 0, v = 0, w = 0;

onmousemove = (e) => {
	x = innerWidth / 2;
	y = innerHeight / 2;
	m = e.x / 45;
	n = e.y / 45;
	e.x < x ? z = 1: z = -1;
	e.y < y ? b = 1 : b = -1;
	for (let i = 0; i < images.length; i++) {
		c = images[i].clientWidth / 20;
		d = images[i].clientHeight / 20;
		e = (m + c) * z;
		f = (n + d) * b;
		images[i].style.marginLeft = `${e}px`;
		images[i].style.marginTop = `${f}px`;
	}
}