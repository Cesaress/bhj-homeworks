function timeFormat(time) {
    
    hours = Math.floor(time / 3600);
    if (hours < 10) {
        hours = '0' + hours;
    };

    minutes = Math.floor((time - (hours * 3600))/60);
    if (minutes < 10) {
        minutes = '0' + minutes;
    };

    seconds = time - - (hours * 3600) - (minutes * 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return `${hours}:${minutes}:${seconds}`;
};

let timerVic = document.getElementById('timer');
let timerStart = timerVic.textContent;
let timerEnd = timerStart;

timerVic.textContent = timeFormat(timerStart);

let id = setInterval(() => {
    --timerEnd;
    timerVic.textContent = timeFormat(timerEnd);

    if (timerEnd == 0) {
        timerVic.textContent = timeFormat(timerEnd);
        alert('Поздравляем! Вы победили в конкурсе!!!');
        clearInterval(id);
    }
}, 1000);