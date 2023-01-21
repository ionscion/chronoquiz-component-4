# 04 Web APIs: Code Quiz

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this module, this Challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Notes
Site has been styled so when the user clicks on the start quiz button a new question will appear for them on the screen. Answering a question wrong will deduct 10 seconds from the timer (top right of the screen).

When the user selects an answer, the correct answer is highlighted in green and the wrong answers in red. They can then click the next button to get a new question.

At the end of the timer, a form pops up prompting the user to enter their initials which saves their score to local storage and returns them to the start of the quiz. 

If the user clicks the Show Scores button they can see initials and corresponding scores. Each correct answer is worth 10 points. 

## Screenshots
Here is a screenshot of the final page:
![](./Assets/Code%20quiz.png)