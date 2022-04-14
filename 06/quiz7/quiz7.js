const $point = document.querySelector('#point');
const $life = document.querySelector('#life');
const $bug = document.querySelector('#bug');
const $box = document.querySelector('.box');

const bugSpeed = 1500;

let point = 0;
let life = 10;
let timerId = 0;

function showBug() {
    $bug.style.display = 'block';
}

function hideBug() {
    $bug.style.display = 'none';
}

function move() {
    showBug();
    const x = getRandom($box.offsetWidth - $bug.offsetWidth);
    const y = getRandom($box.offsetHeight - $bug.offsetHeight);

    $bug.style.left = `${x}px`;
    $bug.style.top = `${y}px`;
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function hit(event) {
    point += 1;
    $point.innerHTML = point;
    hideBug();
    start();
    event.stopPropagation();
}

function  miss(){
    const x = getRandom($box.offsetWidth - $bug.offsetWidth);
    const y = getRandom($box.offsetHeight - $bug.offsetHeight);

    $bug.style.left = `${x}px`;
    $bug.style.top = `${y}px`;
    life -= 1;
    $life.innerHTML = life;
    if (life === 0){
        alert('GAMEOVER');
    }

}

function start() {
    clearInterval(timerId);
    timerId = setInterval(move, bugSpeed);
    console.log();
}

start();
$box.addEventListener('click', miss);
$bug.addEventListener('click', hit);