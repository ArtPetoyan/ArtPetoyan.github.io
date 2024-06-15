let textHistoryWin1 = `Hello, I'm Artur. I'm ${new Date().getFullYear() - 2000} years old. I have started to learn programming since august 2022 and every day I faced a new challenge and overcame it. On the right side you can see my first step into the world of coding.`;
let textHeader = 'Web CV in front of the history Microsoft Windows';
let logos = document.querySelectorAll('.logoBtn');
let pointer = document.querySelector('#pointer');
let k = 0;
document.querySelector('.vista').addEventListener('click', () => logosOpen());

logos.forEach(el => {
  el.style.display = "none";
});
onresize = () => {
  logosPosition();
}

setTimeout(_ => text(textHeader, document.querySelector('.h1'), 100), 200);

function win1() {
  let win1Text = document.querySelector('#Win1Window');
  if(!win1Text.innerHTML.trim()) {
    text(textHistoryWin1, win1Text, 30);
  }
}
function logosOpen() {
  let centerLogo = document.querySelector('#centerLogo'),
   logoCenter = document.querySelector('#logoCenter'),
   cLogoTextTop = logoCenter.childNodes[1].childNodes[3],
   cLogoTextBottom = logoCenter.childNodes[1].childNodes[5],
   vista = document.querySelector('.vista'),
   x = outerWidth / 10;
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
        vista.style.animation = 'circle 600ms 0s cubic-bezier(0.2, 0, 0, 1)';
        centerLogo.style.transform = `translateX(${-(4 * x) + x * 4}px) scale(${x > 75 ? 1 : x / 90})`;
        if(i < 4) {
          el.style.transform = `translateX(${-(4 * x) + x * i}px) scale(${x > 75 ? 1 : x / 100})`;
          return;
        }
        el.style.transform = `translateX(${x * (i-3)}px) scale(${x > 75 ? 1 : x / 100})`;
      } else {
        vista.style.animation = 'unCircle 600ms 0s cubic-bezier(0.2, 0, 0, 1)';
        centerLogo.style.transform = `translate(0px, 0px) scale(1)`;
        el.style.transform = 'translateX(0)';
        setTimeout(() => {
          el.style.display = "none";
        }, 350);
      }
    });
  }, 0);
  logosPosition();
}
function logosPosition() {
  document.querySelectorAll('.contactLogo').forEach((el, i) => {
    el.style.left = `${25 + (45 / 3) * i}%`;
  })
}
function text(text1, that, time) {
  let a = 0;
  let fnInt = setInterval(() => {
    that.innerHTML += text1[a];
    a++;
    if (a == text1.length) {
      clearInterval(fnInt)
      document.querySelector('#logos').style.transform = 'scale(1)';
    }
  }, time);
}

