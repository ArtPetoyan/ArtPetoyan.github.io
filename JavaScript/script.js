let textHistoryWin1 = `Hello, I'm Artur. I'm 23 years old. I have started to learn programming since august 2022 and every day I faced a new challenge and overcame it. On the right side you can see my first step into the world of coding.`;
let textHeader = 'Web CV in front of the history Microsoft Windows';
let logos = document.querySelectorAll('.logoBtn');
let pointer = document.querySelector('#pointer');
let k = 0;

onmousemove = el => {
  document.querySelector('#pointer').style = `
  top: ${el.y}px;
  left: ${el.x}px;
  `;
};
onmousedown = _ => {
  pointer.style.zIndex = "0";
};
onmouseup = e => {
  if (e.target.classList.contains('vista')) logosOpen();
  pointer.style.zIndex = "1";
}
logos.forEach(el => {
  el.style.display = "none";
});

setTimeout(_ => text(textHeader, document.querySelector('.h1'), 100), 200);

function win1() {
  let win1Text = document.querySelector('#Win1Window');
  if(!win1Text.innerHTML.trim()) {
    text(textHistoryWin1, win1Text, 30);
  }
}
function logosOpen() {
  let centerLogo = document.querySelector('#logoCenter');
  let cLogoTextTop = centerLogo.childNodes[1].childNodes[3];
  let cLogoTextBottom = centerLogo.childNodes[1].childNodes[5];
  let x = outerWidth / 10;
  k++;
  cLogoTextTop.innerHTML = "Let's Start";
  cLogoTextBottom.innerHTML = "";
  logos.forEach(el => {
    el.style.display = "inline";
  });
  setTimeout(() => {
    logos.forEach((el, i) => {
      el.classList.toggle('hide');
      if (k % 2) {
        cLogoTextTop.innerHTML = 'Close All';
        cLogoTextBottom.innerHTML = "Windows Vista";
        document.querySelector('.vista').style.animation = 'circle 600ms 0s cubic-bezier(0.2, 0, 0, 1)';
        if(i < 4) {
          el.style.transform = `translateX(${-(4 * x) + x * i}px)`;
          return;
        }
        el.style.transform = `translateX(${x * (i - 3)}px)`;
      } else {
        document.querySelector('.vista').style.animation = 'unCircle 600ms 0s cubic-bezier(0.2, 0, 0, 1)';
        el.style.transform = 'translateX(0)';
        setTimeout(() => {
          el.style.display = "none"
        }, 350)
      }
    });
  }, 0)
}
let text = (text1, that, time) => {
  let a = 0;
  let fnInt = setInterval(() => {
    that.innerHTML += text1[a];
    a++
    if (a == text1.length) {
      clearInterval(fnInt)
      document.querySelector('#logos').style.transform = 'scale(1)';
    };
  }, time)
}