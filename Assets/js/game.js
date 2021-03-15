const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let avialableQuestions = []

let questions = [
    {
        question: 'What is the sytax to create a button?',
        choice1: 'promt',
        choice2: 'var',
        choice3: 'btn',
        choice4: 'getElementbyId',
        answer: 3,
    },
    {
        question: 'What do you do when your code wont work?',
        choice1: 'Scream',
        choice2: 'Check the console log',
        choice3: 'Run around in circles',
        choice4: 'Wait for it to fix itself',
        answer: 2,
    },
    {
        question: 'How do you append something to a webpage?',
        choice1: '#ID',
        choice2: '#Class',
        choice3: '.Append',
        choice4: '.Array',
        answer: 3,
    },
    {
        question: 'Do you love coding?',
        choice1: 'YES!!',
        choice2: 'Only Sometimes',
        choice3: 'No',
        choice4: 'I dont even code',
        answer: 1,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    avialableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (avialableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('\end.html')
    }

    // questionCounter++

    const questionsIndex = Math.floor(Math.random() * avialableQuestions.length)
    currentQuestion = avialableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    avialableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()