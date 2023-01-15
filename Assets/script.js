let timerEl = document.getElementById("time-left");
let currentScore = document.getElementById("current-score");
let button = document.querySelector(".start-button");
let titleHead = document.querySelector(".quiz-header");
let quizDiv = document.getElementById("quiz");
let quizDiv2 = document.getElementById("quiz");
let newDiv = document.createElement("div");
let newDiv2 = document.createElement("div");
let quizBlock = document.querySelector(".quiz-block");
let questionOne = document.createElement("div");
let questionButtons = document.createElement("div");
let questionOneli1 = document.createElement("button");
let questionOneli2 = document.createElement("button");
let questionOneli3 = document.createElement("button");
let questionOneli4 = document.createElement("button");

let score = [];

function countdown() {
  let timeLeft = 5;
  button.style.visibility = "hidden";
  titleHead.style.visibility = "hidden";
  question();

  let timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = ` ${timeLeft} seconds remaining`;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = ` ${timeLeft} second remaining`;
      timeLeft--;
    } else {
      // timesUp.classList.add("timer-text");
      timerEl.textContent = "Time's up";

      clearInterval(timeInterval);
    }
  }, 1000);
}

function question() {
  quizBlock.replaceChild(newDiv, quizDiv);
  newDiv.classList.add("timer-text");
  newDiv.textContent = "Question 1";
  questionOne.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: space-between; padding:10px; margin: 10px; color:#f01ad9"
  );
  newDiv.appendChild(questionOne);
  newDiv.appendChild(questionButtons);
  questionOne.textContent = "What is a useful tool for debugging your code?";
  questionButtons.classList.add("timer-text");
  questionButtons.setAttribute("style", "justify-content: space-around;");
  questionButtons.appendChild(questionOneli1);
  questionButtons.appendChild(questionOneli2);
  questionButtons.appendChild(questionOneli3);
  questionButtons.appendChild(questionOneli4);
  questionOneli1.textContent = "Console log";
  questionOneli2.textContent = "Reading the manual";
  questionOneli3.textContent = "Line by Line";
  questionOneli4.textContent = "If/else statements";
  questionOneli1.classList.add("js-buttons");
  questionOneli2.classList.add("js-buttons");
  questionOneli3.classList.add("js-buttons");
  questionOneli4.classList.add("js-buttons");

  questionOneli1.addEventListener("click", correct)
  questionOneli2.addEventListener("click", wrong);
  questionOneli3.addEventListener("click", wrong);
  questionOneli4.addEventListener("click", wrong);
}

function question2() {
    quizBlock.replaceChild(newDiv2, newDiv);
    newDiv2.classList.add("timer-text");
    newDiv2.textContent = "Question 2";
    questionOne.setAttribute(
      "style",
      "display: flex; flex-direction: column; justify-content: space-between; padding:10px; margin: 10px; color:#f01ad9"
    );
    newDiv2.appendChild(questionOne);
    newDiv2.appendChild(questionButtons);
    questionOne.textContent = "What is a good thing?";
    questionButtons.classList.add("timer-text");
    questionButtons.setAttribute("style", "justify-content: space-around;");
    questionButtons.appendChild(questionOneli1);
    questionButtons.appendChild(questionOneli2);
    questionButtons.appendChild(questionOneli3);
    questionButtons.appendChild(questionOneli4);
    questionOneli1.textContent = "option 1";
    questionOneli2.textContent = "option 2";
    questionOneli3.textContent = "option 3";
    questionOneli4.textContent = "option 4";
    questionOneli1.classList.add("js-buttons");
    questionOneli2.classList.add("js-buttons");
    questionOneli3.classList.add("js-buttons");
    questionOneli4.classList.add("js-buttons");

}

function correct() {
    questionOneli1.textContent = "correct!";
    score ++;
    console.log(score);
    currentScore.textContent = `${score}`;
    question2();

}


function wrong () {
    this.textContent = "incorrect!";
}

button.addEventListener("click", countdown);
