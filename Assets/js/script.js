var startBtn = document.querySelector("#startQuiz");
var btn = document.getElementsByClassName('btn');
var timeLeft;
var gameTimer = document.getElementById('gameTimer');
var timer;-+


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



startBtn.addEventListener("click", timerBegin);

function quizStart() {
    onClick = startBtn.style.visibility = 'hidden';
    startBtn.value = "OFF";
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    timeLeft = 100;
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

