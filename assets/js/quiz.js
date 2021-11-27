// Quiz questions comes from this array
let questionBank = [ {
    id: 1,
    question: "Commonly used data types DO NOT Include: ",
    a: "string", 
    b: "booleans", 
    c: "alerts", 
    d: "numbers",
    answerYes: "alerts"
},
{
    id: 2,
    question: "Arrays in JavaScript can be used to store ________. ",     
    a: "numbers and strings", 
    b: "other arrays", 
    c: "booleans", 
    d: "all of the above",
    answerYes: "all of the above" 
},
{
    id: 3,
    question: "The condition in an if / else statement is enclosed with ______. ",
    a: "quotes", 
    b: "curly brackets", 
    c: "Parenthesis", 
    d: "square brackets",
    answerYes: "Parenthesis"     
},
{
    id: 4,
    question: "String Values must be enclosed within ______ when being assigned to variables. ",
    a: "commas", 
    b: "curly brackets", 
    c: "quotes", 
    d: "parenthesis",
    answerYes: "quotes"    
},
{
    id: 5,
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    a: "Javascript", 
    b: "terminal/bash", 
    c: "for loops", 
    d: "console.log",
    answerYes: "console.log" 
},

]

// variables
let questionCount = 0;
let score = 0;

// Initializing variable..
var question = document.querySelector('.question');
var choice1 = document.querySelector('#choice1');
var choice2 = document.querySelector('#choice2');
var choice3 = document.querySelector('#choice3');
var choice4 = document.querySelector('#choice4');
var questions = questionBank[questionCount];
var answerYes = document.querySelector('answerYes');
var userAnswer = document.querySelector('#userAnswer');
var answerSection = document.querySelector('.answerSection');
var alldone = document.querySelector('#alldone');
var yay = document.querySelector('#yay');
var finalScore = document.querySelector('#finalScore');
//var inputName = document.querySelector('#inputName');
var btn = document.querySelector('#btn');
//var submit = document.querySelector("#submit");
var nameInput = document.querySelector("#nameInput");
//var userInput = document.querySelector("#userInput");
var btnHighScore = document.querySelector('#btnHighScore');
var timer = document.querySelector('#timer');
var goBack = document.querySelector('#goBack');
var clearHighScores = document.querySelector('#clearHighScores');

var seconds = 75;
var minutes = 0;

// Questions and Answer of choices comes from here
var loadQuestion = () => {
    //alldone.style.display = "none";
    nameInput.style.display = "none";
    btn.style.display = "none";
    yay.style.display = "none";
    goBack.style.display = "none";
    clearHighScores.style.display = "none";
    var questions = questionBank[questionCount];
    question.innerHTML = questions.question;
    //console.log(questionBank[0].question);
    choice1.innerHTML = questions.a;
    choice2.innerHTML = questions.b;
    choice3.innerHTML = questions.c;
    choice4.innerHTML = questions.d;   
}

loadQuestion();

// functions or eventlisteners when user clicks for choices
choice1.addEventListener ("click", function (event) {   
    validate(event);
    console.log(event.target.value); 
    console.log(choice1);
  });

choice2.addEventListener ("click", function (event) {   
    validate(event);
    console.log(event.target.value);
    console.log(choice2); 
  });

choice3.addEventListener ("click", function (event) {  
       event.preventDefault();  
    validate(event);
    console.log(event.target.value); 
    console.log(choice3);
  });

choice4.addEventListener ("click", function (event) {   
    validate(event);
    console.log(event.target.value);
    console.log(choice4); 
  });

  
  // Answer validation to check the answers are correct
    function validate(event) {
        //console.log('validate--');

        //var answer
        //alldone.style.display = "none";
    var answer = event.target.innerText;
    console.log('event answer: ');
    var correctAnswer = null;

    if (answer == questionBank[questionCount].answerYes) {
        //if (questionBank[questions].answerYes === answer) {
        correctAnswer = answer;
        console.log('answer: '+answer);
        answer.innerHTML = "Correct";    

    }

// if , else statement to check if answer is correct or wrong
    if (answer == correctAnswer) {
        userAnswer.innerHTML = "Correct";
        score++;
    } else {
        userAnswer.innerHTML = "Wrong";
    seconds -= 15
        if (seconds < 0){
            seconds = 0;
        }
    }

    questionCount++
    if(questionCount < questionBank.length){
        loadQuestion(questionCount);
    }

// keeping the track of questions 
    if(questionBank.length === questionCount){
    timeUp();
    return;
    }

    }

// Function for timmer 
var timeUp = function (seconds) {
//  display= none will hide from the page
    question.style.display = "none";
    answerSection.style.display = "none";
    userAnswer.style.display = "none";
     alldone.textContent = "All done! ";
// Display final score
     finalScore.textContent = "Your Final Score is: " + `${score}/${questionBank.length}`;
//  display= block will display on the page   
     nameInput.style.display = "block";
     btn.style.display = "block";
}

// Add event listener to generate button and caputre user inputs
 btn.addEventListener("click", function(event) {
    event.preventDefault();

    var user = {
        name: nameInput.value.trim(),
    };
      localStorage.setItem("user", JSON.stringify(user));
      var highScore = {
        name: user,
        score: seconds
   }
// Local storage will store user input information
     localStorage.setItem("user", JSON.stringify(highScore));
     console.log(user, highScore);
  
     showHighScore()
 });

 // Function for displaying high scores
 function showHighScore() {
    //score: seconds;
    var user = localStorage.getItem("user")
    userScores = JSON.parse(user);
    //var user = document.querySelector("#user");
    //var userScores = { score: seconds, user: userScores};
    console.log(userScores);
    //localStorage.setItem("score", JSON.stringify(highsore))
     alldone.style.display = "none";
     //finalScore.textContent = "none";
     nameInput.style.display = "none";
     btn.style.display = "none";
     btnHighScore.textContent = `${userScores.name.name} ${score}`;
     goBack.style.display = "block";
     clearHighScores.style.display = "block";
     yay.style.display = "block";
}

function viewHighScores(){
    alert("Take the Quiz for High Scores");
}

goBack.addEventListener("click", function() {
    generateQuestions();
});

// This function for onclick takes to Start Quiz page
function startQuiz() {
    location.href = "index.html";
    setInterval();
    console.log("Start Quiz!!")    
}

clearHighScores.addEventListener("click", function() {
    localStorage.clear();
});

