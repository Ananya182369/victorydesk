let time = 25 * 60;

let timerInterval = null;

let isRunning = false;


function updateTimer(){

let minutes = Math.floor(time / 60);

let seconds = time % 60;

document.getElementById("timer").innerHTML =
minutes + ":" + String(seconds).padStart(2,"0");

}


function startTimer(){

if(isRunning) return;

isRunning = true;

timerInterval = setInterval(()=>{

if(time > 0){

time--;

function setFocusMode(minutes){

clearInterval(timerInterval);

isRunning = false;

time = minutes * 60;

updateTimer();

}

updateTimer();

}

else{

clearInterval(timerInterval);

isRunning = false;

completeSession();

}

},1000);

}


function pauseTimer(){

clearInterval(timerInterval);

isRunning = false;

}


function resetTimer(){

clearInterval(timerInterval);

isRunning = false;

time = 25 * 60;

updateTimer();

}


function completeSession(){

let sessions =
Number(localStorage.getItem("focusSessions")) || 0;

sessions++;

if(sessions >= 4){

alert("🏆 Daily Focus Goal Completed!");

}

localStorage.setItem(
"focusSessions",
sessions
);

document.getElementById("sessionCount").innerHTML =
sessions + " Sessions Completed";

alert("🎉 Focus session completed!");

}


let savedSessions =
Number(localStorage.getItem("focusSessions")) || 0;

document.getElementById("sessionCount").innerHTML =
savedSessions + " Sessions Completed";


updateTimer();