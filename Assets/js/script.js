var questionContainerElement = document.getElementById('question-container');
var questionEl = document.getElementById('questions');
var answerButtonsElement = document.getElementById('answer-buttons');
var startBtn = document.querySelector("#startQuiz");
var btn = document.getElementsByClassName('btn');
var timeLeft;
var gameTimer = document.getElementById('gameTimer');
var timer;
var index;



var questions = [
    {
        title: "This is question one",
        choices: [1, 2, 3, 4],
        answer: "2"

    },
    {
        title: "This is question one",
        choices: [1, 2, 3, 4],
        answer: "2"

    },
    {
        title: "This is question one",
        choices: [1, 2, 3, 4],
        answer: "2"

    },
    {
        title: "This is question one",
        choices: [1, 2, 3, 4],
        answer: "2"

    },
];


let shuffledQuestions, currentQuestionIndex, questionNum


startBtn.addEventListener("click", timerBegin);

function quizStart() {
    onClick = startBtn.style.visibility = 'hidden';
    startBtn.value = "OFF";
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    timeLeft = 100;
    showQuestion();
    console.log(showQuestion);
}

function timerBegin() {
    timer = setInterval(function () {
        timeLeft--;
        gameTimer.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            //insert function for result screen
        }
    }, 1000);
    quizStart();
}

function showQuestion() {
    onClick = questionNum = questionNum + 1
    setQuestion(questionNum)
    var currentQuestion = questions[index];
    questions.textContent = currentQuestion.questions;
    // questionElement = document.getElementById('questions');
    currentQuestionIndex.innerHTML = "";
    currentQuestion.choices.forEach(function (choice, i) {
        var choiceBtn = document.getElementsByClassName('btn')
        choiceBtn.setAttribute("class", "choices")
        choiceBtn.setAttribute("value", choices)
        choiceBtn.textContent = i + 1 + " " + choice
        choiceBtn.onclick = alert("You got it right!")
        btn.appendChild("answer-buttons");
    }
    )
}

function setQuestion() {
    question = questions[questionNum]
    questions.textContent = currentQuestion.questions;
    // questionElement = document.getElementById('questions');
    currentQuestionIndex.innerHTML = "";
    currentQuestion.choices.forEach(function (choice, i) {
        var choiceBtn = document.getElementsByClassName('btn')
        choiceBtn.setAttribute("class", "choices")
        choiceBtn.setAttribute("value", choices)
        choiceBtn.textContent = i + 1 + " " + choice
        choiceBtn.onclick = alert("You got it right!")
        btn.appendChild("answer-buttons");
    }
    )
}
