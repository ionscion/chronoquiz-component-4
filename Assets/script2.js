let startButton = document.getElementById("start-button");
let nextButton = document.getElementById("next-button");
let titleHead = document.querySelector(".quiz-header");
let timerEl = document.getElementById("time-left");
let currentScore = document.getElementById("current-score");
let form = document.getElementById("html-Form");
let questionContainer = document.getElementById("question-container");
let timeLeft = 15;
let shuffledQues = [];
let currentQuestionIndex = 0;

const buttonDiv = document.querySelector(".button-div");
const questionElem = document.getElementById("question");
const answerButtonsElem = document.getElementById("question-buttons");

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
    question:
      "Complete the function such that it returns true for passing grades and false otherwise (9 and below are failing grades): Function isPassing(grade)",
    answers: [
      { text: "Return", correct: false },
      { text: "Return grade = 10", correct: false },
      { text: "Return grade >= 10", correct: true },
      { text: "if (grade >10) return true", correct: false },
    ],
  },
  {
    question: "How do you get the first element of an array?",
    answers: [
      { text: ".first()", correct: false },
      { text: ".index(0)", correct: false },
      { text: "index(1)", correct: false },
      { text: "index[0]", correct: true },
    ],
  },
  {
    question: "Add Q4 to the list of quarters: let quarters = [Q1, Q2, Q3]",
    answers: [
      { text: "quarters.push('Q4')", correct: true },
      { text: "quarters = Q4", correct: false },
      { text: "quarters = quarters.push('Q4')", correct: false },
      { text: "quarters.length(Q4)", correct: false },
    ],
  },
];

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

  if (correct === "false") {
    timeLeft -= 5;
    timerEl.textContent = ` ${timeLeft} seconds remaining`;
  }

  if (shuffledQues.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hidden");
  } else {
    shuffledQues;
    startButton.classList.remove("hidden");
    startButton.textContent = "Restart";
    currentQuestionIndex = 0;
    nextButton.classList.add("hidden");
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
      timeLeft = 15;
      startButton.classList.remove("hidden");
      startButton.textContent = "Restart";
      currentQuestionIndex = 0;
      startButton.addEventListener("click", countdown);
      alert("Your time is up! Click restart to play again");
      form.classList.remove("hidden");
      clearInterval(timeInterval);
    }
  }, 1000);
}

startButton.addEventListener("click", countdown);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  nextQuestion();
});
