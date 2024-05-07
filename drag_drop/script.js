let cont = document.querySelectorAll('.container'),
    main = document.querySelector('#main'),
    div2 = document.querySelector('#div2'),
    button = document.querySelector('button'),
    errMessage = document.querySelector('#errMessage'),
    arr = [], arrCheck = [], startX, startY, drag = false;
for (let i = 1; i < 11; i++) {
    let randNum = Math.round(Math.random() * 99 + 1);
    arr.push(randNum);
}
for (let i in arr) {
    createDiv(arr[i]);
}
function createDiv(elem) {
    let div = document.createElement('div');
    div.classList.add('class1');
    div.innerHTML = elem;
    div.draggable = "true";
    main.appendChild(div);
}

let cla = document.querySelectorAll('.class1');
cla.forEach(elem => {
    elem.addEventListener('touchstart', function (e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        drag = true;
        elem.classList.add('class2');
        elem.style.opacity = 0.5;
    });
    elem.addEventListener('touchend', function () {
        elem.classList.remove('class2');
        elem.style.opacity = 1;
        div2.style.border = "2px solid black";
        button.style.backgroundColor = "rgb(69, 69, 69)";
    });
    elem.addEventListener('dragstart', function () {
        elem.classList.add('class2');
        elem.style.opacity = 0.5;
    });
    elem.addEventListener('dragend', function () {
        elem.classList.remove('class2');
        elem.style.opacity = 1;
        errMessage.style.display = "none";
        div2.style.border = "2px solid black";
        button.style.backgroundColor = "rgb(69, 69, 69)";
    });
    elem.addEventListener('touchmove', function (e) {
        if (drag) {
            let newX = e.touches[0].clientX;
            let newY = e.touches[0].clientY;
            let deltaX = newX - startX;
            let deltaY = newY - startY;
            elem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
            startX = newX;
            startY = newY;
            cont.forEach(elem => {
                    let drag = document.querySelector('.class2');
                    if (drag) {
                        elem.appendChild(drag);
                        elem.id == 'main' ? drag.classList.remove('divs') : drag.classList.add('divs');
                    }
                });
        }
    });
});
cont.forEach(elem => {
    elem.addEventListener('dragover', e => {
        e.preventDefault();
        let drag = document.querySelector('.class2');
        if (drag) {
            elem.appendChild(drag);
            elem.id == 'main' ? drag.classList.remove('divs') : drag.classList.add('divs');
        }
    });
});

function check() {
    
    document.querySelectorAll('.divs').forEach(elem => {
        arrCheck.push(parseInt(elem.textContent));
    });
    for(let i in arrCheck) {
        if (arr.sort((a, b) => a - b)[i] !== arrCheck[i]) {
            button.style.backgroundColor = "red";
            div2.style.border = "3px solid red";
            errMessage.style.display = "block";
            errMessage.style.top = `${div2.clientHeight + 2}px`;
            arrCheck = [];
            return;
        }
    }
    if(arrCheck[0] !== undefined && arr.length) {
        alert("It's Correct Answer!!!");
        button.style.backgroundColor = "rgb(69, 69, 69)";
        arrCheck = [];
        location.reload();
    } else {
        errMessage.style.display = "block";
        errMessage.style.top = `${div2.clientHeight + 2}px`;
        div2.style.border = "3px solid red";
    }
}
