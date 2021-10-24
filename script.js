
// Start quiz
let questionsContainer = document.getElementById('questionsContainer');
let answersContainer = document.getElementById('answersContainer');
let nextQuestionBtn = document.getElementById('nextQuestionBtn');
let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click', startQuiz);

// Start quiz function
let questionIndex = 0;

function startQuiz() {
startBtn.classList.add('hide');
timer.classList.remove('hide');
nextQuestionBtn.classList.remove('hide');
questionsContainer.classList.remove ('hide');
answersContainer.classList.remove('hide');
console.log("quiz started");
console.log(questions[questionIndex]);

questionsContainer.innerHTML = questions[questionIndex].question;
console.log(answersContainer);

for (let i = 0; i < questions[questionIndex].answers.length; i++) {
  let btn=document.createElement('button');
  btn.innerText=questions[questionIndex].answers[i].text;
  btn.value=questions[questionIndex].answers[i].correct;
  btn.classList.add('btn');
  btn.addEventListener('click', checkAnswer);
  answersContainer.appendChild(btn);
}
questionIndex++;
}
function checkAnswer(event) {
 // see if i can add a disable function
if (event.target.value == 'false') {
  // Create a css class for wrong and right answers
  // check time

}
console.log(event);
}
// Start timer function 
function startTimer() {

}
nextQuestionBtn.addEventListener ('click', nextQuestion);
function nextQuestion() {
  console.log ('next question');

  
}

// Questions database

const questions = [
    
    {
      question: 'Commonly used data types DO not include:',
      answers: [
        { text: 'Strings', correct: false},
        { text: 'Booleans', correct: false },
        { text: 'Alerts', correct: true },
        { text: 'Numbers', correct: false }
      ]
    },
    {
      question: 'The condition in an if/else statement is enclosed with:',
      answers: [
        { text: 'Quotes', correct: false },
        { text: 'Parenthesis', correct: true },
        { text: 'Curly brackets', correct: false },
        { text: 'Square brackets', correct: false }
      ]
    },
    {
        question: 'Arrays in JavaScript can be used to store:',
        answers: [
          { text: 'Numbers and strings', correct: false },
          { text: 'Other arrays', correct: false },
          { text: 'Booleans', correct: false },
          { text: 'All of the above', correct: true }
        ]
      },
      {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        answers: [
          { text: 'Quotes', correct: true },
          { text: 'Curly brackets', correct: false },
          { text: 'Parenthesis', correct: false },
          { text: 'Commas', correct: false }
        ]
      },
      {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answers: [
          { text: 'JavaSvript', correct: false },
          { text: 'Terminal/bash', correct: false },
          { text: 'For loops', correct: false },
          { text: 'console.log', correct: true }
        ]
      }
  ]