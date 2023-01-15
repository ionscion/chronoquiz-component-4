let timerEl = document.getElementById('time-left');
let button = document.querySelector(".start-button");
let timesUp = document.getElementById("quiz");

function countdown() {
    let timeLeft = 5;

let timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
    timesUp.classList.add("timer-text");
    timesUp.textContent = "Time's up";
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
    //   displayMessage();
    }
  }, 1000);
}

function displayMessage() {
    var wordCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
      // If there are no more words left in the message
      if (words[wordCount] === undefined) {
        // Use `clearInterval()` to stop the timer
        clearInterval(msgInterval);
      } else {
        // Display one word of the message
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 1000);
  }
  
button.addEventListener("click", countdown);