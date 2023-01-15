let timerEl = document.getElementById("time-left");
let button = document.querySelector(".start-button");
let titleHead = document.querySelector(".quiz-header");
let quizDiv = document.getElementById("quiz");
let newDiv = document.createElement("div");
let quizBlock = document.querySelector(".quiz-block");
let questionOne = document.createElement("div");
let questionButtons = document.createElement("div");
let questionOneli1 = document.createElement("button");
let questionOneli2 = document.createElement("button");
let questionOneli3 = document.createElement("button");
let questionOneli4 = document.createElement("button");

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

}

button.addEventListener("click", countdown);
