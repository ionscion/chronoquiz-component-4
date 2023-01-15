let startButton = document.querySelector(".start-button");
let titleHead = document.querySelector(".quiz-header");
let quizLanding = document.getElementById("#quiz");

const question = [
  {
    questionText: "What is a useful tool for debugging your code?",
    answers: [
      { text: "console log", correct: true },
      { text: "Reading the manual", correct: false },
      { text: "Line by Line", correct: false },
      { text: "If/else statements", correct: false },
    ],
  },
];

let questionDiv = document.getElementById("question-title");
let quizAnswers = document.getElementById("question-buttons");

function showQuestions(question) {
  questionDiv.textContent = question.questionText;
}

function countdown() {
  let timeLeft = 5;
  quizLanding.style.visibility = "hidden";
  startButton.style.visibility = "hidden";
  titleHead.style.visibility = "hidden";
  let timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = ` ${timeLeft} seconds remaining`;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = ` ${timeLeft} second remaining`;
      timeLeft--;
    } else {
      timerEl.textContent = "Time's up";

      clearInterval(timeInterval);
    }
  }, 1000);
}

startButton.addEventListener("click", showQuestions);
