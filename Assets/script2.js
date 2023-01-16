let startButton = document.getElementById("start-button");
let nextButton = document.getElementById("next-button");
let titleHead = document.querySelector(".quiz-header");
let quizLanding = document.getElementById("quiz");
let timerEl = document.getElementById("time-left");
let currentScore = document.getElementById("current-score");
const buttonDiv = document.querySelector(".button-div");

const questions = [
  {
    question: "What is a useful tool for debugging your code?",
    answers: [
      { text: "console log", correct: true },
      { text: "Reading the manual", correct: false },
      { text: "Line by Line", correct: false },
      { text: "If/else statements", correct: false },
    ],
  },
  {
    question: "Placeholder 2?",
    answers: [
      { text: "Stuff", correct: false },
      { text: "More stuff", correct: true },
      { text: "wrong", correct: false },
      { text: "If/else statements", correct: false },
    ],
  },
  {
    question: "Placeholder 3?",
    answers: [
      { text: "number 3", correct: false },
      { text: "More stuff", correct: false },
      { text: "sweet", correct: true },
      { text: "If/else statements", correct: false },
    ],
  },
];

let shuffledQues;
let currentQuestionIndex = 0;

const questionElem = document.getElementById("question");
const answerButtonsElem = document.getElementById("question-buttons");

function nextQuestion() {
  clearPage();
  showQuestions(shuffledQues[currentQuestionIndex]);
}

function clearPage() {
  nextButton.classList.add("hidden");
  while (answerButtonsElem.firstChild) {
    answerButtonsElem.removeChild(answerButtonsElem.firstChild);
  }
}

function statusClass(element, correct) {
  clearStatus(element);
  if (correct === "true") {
    element.classList.add("correct");
    element.classList.remove("js-buttons");
  } else {
    element.classList.add("incorrect");
    element.classList.remove("js-buttons");
  }
}

function clearStatus(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

function chooseAnswer(selection) {
  const selectButton = selection.target;
  const correct = selectButton.dataset.correct;
  statusClass(selectButton, correct);
  Array.from(answerButtonsElem.children).forEach((button) => {
    statusClass(button, button.dataset.correct);
  });
  if (shuffledQues.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hidden");
  } else {
    shuffledQues;
    startButton.classList.remove("hidden");
    startButton.textContent = "Restart";
    currentQuestionIndex = 0;
    startButton.addEventListener("click", countdown);
  }
}

function showQuestions(question) {
  questionElem.textContent = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("js-buttons");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", chooseAnswer);
    answerButtonsElem.appendChild(button);
  });
}

function countdown() {
  let timeLeft = 10;
  startButton.classList.add("hidden");
  titleHead.classList.add("hidden");
  shuffledQues = questions.sort(() => Math.random - 0.5);
  nextQuestion();
  let timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = ` ${timeLeft} seconds remaining`;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = ` ${timeLeft} second remaining`;
      timeLeft--;
    } else {
      timerEl.textContent = "Time's up";
      shuffledQues;
      startButton.classList.remove("hidden");
      startButton.textContent = "Restart";
      currentQuestionIndex = 0;
      startButton.addEventListener("click", countdown);
      alert("Your time is up! Click restart to play again");
      clearInterval(timeInterval);
    }
  }, 1000);
}

startButton.addEventListener("click", countdown);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestion();
});
