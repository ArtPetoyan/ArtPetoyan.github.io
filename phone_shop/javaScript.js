let goods = {
    "1234S": {
        name: 'Samsung Galaxy A53',
        RAM: 8,
        ROM: 256,
        cost: 195000,
        img: 'images/1.jpg',
        stock: true
    },
    "1234A": {
        name: 'Apple Iphone 14',
        RAM: 16,
        ROM: 256,
        cost: 845000,
        img: 'images/2.jpg',
        stock: true
    },
    "1344X": {
        name: 'Xiaomi Redmi 10C',
        RAM: 4,
        ROM: 64,
        cost: 79000,
        img: 'images/3.jpg',
        stock: false
    },
    "1845N": {
        name: 'Nokia Blue XE',
        RAM: 4,
        ROM: 128,
        cost: 157000,
        img: 'images/4.jpg',
        stock: false
    },
    "1978A": {
        name: 'Asus RogPhone 6',
        RAM: 16,
        ROM: 512,
        cost: 489000,
        img: 'images/5.jpg',
        stock: true
    },
    "1677H": {
        name: 'Honor View 10',
        RAM: 12,
        ROM: 128,
        cost: 218000,
        img: 'images/6.jpg',
        stock: false
    },
    "1777C": {
        name: 'Infinix Hot 10',
        RAM: 12,
        ROM: 64,
        cost: 254000,
        img: 'images/7.jpg',
        stock: false
    },
    "1237S": {
        name: 'Samsung Galaxy S22',
        RAM: 12,
        ROM: 512,
        cost: 750000,
        img: 'images/8.jpg',
        stock: true
    },
    "1287A": {
        name: 'Apple Iphone 13',
        RAM: 8,
        ROM: 256,
        cost: 540000,
        img: 'images/9.jpg',
        stock: true
    },
    "1784A": {
        name: 'Apple Iphone 12 pro',
        RAM: 8,
        ROM: 512,
        cost: 594000,
        img: 'images/10.jpg',
        stock: true
    },
    "1944H": {
        name: 'Huawei P50 Pro',
        RAM: 12,
        ROM: 512,
        cost: 490000,
        img: 'images/11.jpg',
        stock: false
    },
    "1354H": {
        name: 'Honor P40',
        RAM: 4,
        ROM: 128,
        cost: 280000,
        img: 'images/12.jpg',
        stock: true
    },
};
let mainDiv = document.querySelector('#goods'),
    selects = document.querySelectorAll('select'),
    h1 = document.querySelector('#h1'),
    selP2 = document.querySelector('#selectsP2');
for (let i in goods) {
    createGoodsDiv(goods[i]);
}
selects.forEach(sel => sel.addEventListener('change', select));
document.querySelector('#btnOK').addEventListener('click', clear);

function select(e) {
    let that = e.target;
    e.target.onblur = a => a.target.value = 'All';
    let goodsElem = document.querySelectorAll(`#${e.target.id.substring(6)}`);
    goodsElem.forEach(el => {
        el.parentElement.parentElement.style.display = 'none';
        if (that.value == 'All') {
            el.parentElement.parentElement.style.display = 'block'; 
            return;
        }
        if (el.innerText == that.value) {
            el.parentElement.parentElement.style.display = 'block';
            return;
        }
    });
}
document.querySelectorAll('.good button').forEach(e => e.addEventListener('click', (e) => {
    if(!e.target.classList[0])
        alert ('This phone was added to your cart');
}));

function createGoodsDiv(obj) {
    let div = document.createElement('div');
    div.classList.add('good');
    let divImg = document.createElement('div');
    divImg.id = 'divImg';
    let img = document.createElement('img');
    img.src = obj.img;
    divImg.appendChild(img);
    div.appendChild(divImg);
    div.innerHTML += `
    <h2>${obj.name}</h2>
    <p>RAM: <span id='RAM'><b>${obj.RAM}</b></span> Gb<br></p>
    <p>Memory: <span  id='ROM'><b>${obj.ROM}</b></span> Gb<br></p>
    <p>Price: <span id='cost'><b>${obj.cost}</b></span> AMD<br></p>
    <p>${obj.stock ? "<span id='stock' style='color: blue'><b>Available</b></span><br>" : "<span id='stock' style='color: gray'><b>Not Available</b></span><br>"}</p>
    `;
    let btn = document.createElement('button');
    btn.id = 'btnOK';
    btn.innerHTML = 'Add to Cart';
    if (!obj.stock) {
        btn.style.backgroundColor = 'gray';
        btn.style.cursor = 'no-drop';
        btn.classList.add('havnt');
    }
    div.appendChild(btn);
    mainDiv.appendChild(div);
}
function clear() {
    selects.forEach(sel => sel.value = 'All');
    document.querySelectorAll('.good').forEach(e => e.style.display = 'block');
}

// Function to be executed when the screen width is less than or equal to 700px
function onScreenWidthChange() {

    if (innerWidth <= 870) {
        selP2.style.display = 'none';
        h1.addEventListener('click', () => {
            if (selP2.style.display == 'none' || selP2.style.display == "") selP2.style.display = 'flex';
            else {selP2.style.display = 'none'}
        });
        h1.style.cursor = 'pointer';
    } else {
        selP2.style.display = 'flex';
        h1.style.cursor = 'default';
    }
}

// Add event listener to the window object for the resize event
window.addEventListener('resize', function() {
    onScreenWidthChange();
});

// Call the function initially to check the screen width on page load
onScreenWidthChange();