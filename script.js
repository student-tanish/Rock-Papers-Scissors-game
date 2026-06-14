let lBtns = document.querySelectorAll(".leftBtn");
let rBtns = document.querySelectorAll(".rightBtn");

let rock = lBtns[0];
let paper = lBtns[1];
let scissors = lBtns[2];
let cRock = rBtns[0];
let cPaper = rBtns[1];
let cScissors = rBtns[2];

let colorA = "#3b3b3b";
let colorB = "#87bfff";
let colorC = "#d6deff";

// win = 1, lose = -1, draw = 0
// function checkWinner()

function computerResponse(win, n) {
    if (n === 0) {
        if (win === 1) cRock.style.background = "red";
        else if (win === -1) cRock.style.background = "green";
        else cRock.style.background = "gray";
    }
    else if (n === 1) {
        if (win === 1) cPaper.style.background = "red";
        else if (win === -1) cPaper.style.background = "green";
        else cPaper.style.background = "gray";
    }
    else {
        if (win === 1) cScissors.style.background = "red";
        else if (win === -1) cScissors.style.background = "green";
        else cScissors.style.background = "gray";
    }
}

function checkComp(n) {
    if (n === 0) return "rock";
    else if (n === 1) return "paper";
    else return "scissors";
}

const checkWinner = ((you, comp) => {
    if (you === "rock") {
        if (comp === "paper") return -1;
        else if (comp === "scissors") return 1;
        else return 0;
    }
    else if (you === "paper") {
        if (comp === "rock") return 1
        else if (comp === "scissors") return -1;
        else return 0;
    }
    else if (you === "scissors") {
        if (comp === "paper") return 1
        else if (comp === "rock") return -1;
        else return 0;
    }
})
let arr = [rock, paper, scissors, cRock, cPaper, cScissors];
function clear() {
    for (const el of arr) {
        el.style.backgroundColor = colorC;
    }
}

const disable = () => {
    for (const el of arr) {
        el.disabled = true;
    }
}
const enable = () => {
    for (const el of arr) {
        el.disabled = false;
    }
}

let Iscored = document.querySelector(".myScore");
let compScored = document.querySelector(".compScore");
let winOrLose = document.querySelector(".winOrLose");
let myScore = 0;
let compScore = 0;
let time = 2000;
let winSound = new Audio("assets/yay.mp3");
// let loseSound = new Audio("assets/fahh.mp3");
rock.addEventListener("click", () => {
    let n = Math.floor(0 + Math.random() * (3 - 0));
    let win;
    let comp = checkComp(n);
    win = checkWinner("rock", comp);
    if (win === 1) {
        winSound.play();
        rock.style.background = "green";
        myScore++;
        Iscored.innerText = "You : ";
        Iscored.innerText += myScore;
        winOrLose.innerText = "Congrats, you won!!!"
    }
    else if (win === -1) {
        // loseSound.play();
        rock.style.background = "red";
        compScore++;
        compScored.innerText = "Computer : ";
        compScored.innerText += compScore;
        winOrLose.innerText = "You lose!!!"
    }
    else {
        rock.style.background = "gray";
        winOrLose.innerText = "Match draw!!!";
    }
    computerResponse(win, n);
    disable();
    setTimeout(() => {
        clear();
        enable();
        winOrLose.innerText = "";
    }, time)
})
paper.addEventListener("click", () => {
    let n = Math.floor(0 + Math.random() * (3 - 0));
    let win;
    let comp = checkComp(n);
    win = checkWinner("paper", comp);
    if (win === 1) { 
        winSound.play();
        paper.style.background = "green"; 
        myScore++;
        Iscored.innerText = "You : ";
        Iscored.innerText += myScore;
        winOrLose.innerText = "Congrats, you won!!!"
    }
    else if (win === -1) {
        // loseSound.play();
        paper.style.background = "red";
        compScore++;
        compScored.innerText = "Computer : ";
        compScored.innerText += compScore;
        winOrLose.innerText = "You lose!!!"
    }
    else {
        paper.style.background = "gray";
        winOrLose.innerText = "Match draw!!!";
    }
    computerResponse(win, n);
    disable();
    setTimeout(() => {
        clear();
        enable();
        winOrLose.innerText = "";
    }, time)
})
scissors.addEventListener("click", () => {
    let n = Math.floor(0 + Math.random() * (3 - 0));
    let win;
    let comp = checkComp(n);
    win = checkWinner("scissors", comp);
    if (win === 1) {
        winSound.play();
        scissors.style.background = "green";
        myScore++;
        Iscored.innerText = "You : ";
        Iscored.innerText += myScore;
        winOrLose.innerText = "Congrats, you won!!!"
    }
    else if (win === -1) {
        // loseSound.play();
        scissors.style.background = "red";
        compScore++;
        compScored.innerText = "Computer : ";
        compScored.innerText += compScore;
        winOrLose.innerText = "You lose!!!"
    }
    else {
        scissors.style.background = "gray";
        winOrLose.innerText = "Match draw!!!";
    }
    computerResponse(win, n);
    disable();
    setTimeout(() => {
        clear();
        enable();
        winOrLose.innerText = "";
    }, time)
})
let restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
    myScore = 0;
    compScore = 0;
    Iscored.innerText = "You : 0";
    compScored.innerText = "Computer : 0";
    winOrLose.innerText = "Let's play!"
})