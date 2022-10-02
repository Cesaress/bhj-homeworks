let deadMole = document.getElementById('dead');
let blunder = document.getElementById('lost');

let win = 0;
let fail = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function newGame() {
    deadMole.textContent = 0;
    blunder.textContent = 0;
    win = 0;
    fail = 0;
}

for (let i = 1; i < 10; i++){
    hole = getHole(i);

    hole.onclick = () => {
        if (hole.classList.contains('hole hole_has-mole')) {
            ++win;
            deadMole.textContent = win;
        } else {
            ++fail;
            blunder.textContent = fail;
        }

        if (win == 10) {
            alert('Вы победили!');
            newGame();
        } else if (fail == 5) {
            alert('Вы проиграли!');
            newGame();
        }
    }
}