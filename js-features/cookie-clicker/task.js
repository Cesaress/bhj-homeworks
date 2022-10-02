let clickerCounter = document.getElementById("clicker__counter");
let clickerSpeed = document.getElementById("clicker__speed");
let cookie = document.getElementById("cookie");

let start = (new Date()).getTime();

let counter = 0;

cookie.onclick = function() {

    counter++;
    clickerCounter.textContent = counter;

    if (Number(clickerCounter.textContent) % 2 === 0) {
        cookie.width = 200;
    } else {
        cookie.width = 160;
    }

    let timer = new Date();
    let end = timer.getTime();

    clickerSpeed.textContent = (1000 / (end - start)).toFixed(2);

    start = end;
}