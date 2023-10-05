const minutesBtn = document.querySelector('.minutes');
const secondsBtn = document.querySelector('.seconds');
const hundredthsSecondBtn = document.querySelector('.hundredths-seconds');
const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const btnReset = document.querySelector('.btn-reset');
const stopwatchContainer = document.querySelector('.container-stopwatch');

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

const startTimer = () => {
    miliseconds ++;

    if(miliseconds <=99){
        hundredthsSecondBtn.innerHTML = miliseconds;
    }

    if(miliseconds === 100){
        hundredthsSecondBtn.innerHTML = '00';
    }

    if(miliseconds > 99) {
        seconds++;
        secondsBtn.innerHTML = '0' + seconds;

        miliseconds = 0;
    }

    if(seconds > 9){
        secondsBtn.innerHTML = seconds;
    }

    if(seconds > 59){
        minutes++;
        minutesBtn.innerHTML = '0' + minutes;
        seconds = 0;
        secondsBtn.innerHTML = '0' + seconds;
    }
    if(minutes > 9){
        minutesBtn.innerHTML = minutes;
    }
}


btnStart.addEventListener('click', () => {
    stopwatchContainer.style.backgroundColor = 'green';
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    stopwatchContainer.style.backgroundColor = 'red';
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    stopwatchContainer.style.backgroundColor = 'gray';
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    minutesBtn.innerHTML = '00';
    secondsBtn.innerHTML = '00';
    hundredthsSecondBtn.innerHTML = '00';
});