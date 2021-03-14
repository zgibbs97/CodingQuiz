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
        question: 'What is 2 + 2?',
        choice1: '2',
        choice2: '4',
        choice3: '8',
        choice4: '21',
        answer: 2,
    },
    {
        question: 'What is 3 + 3?',
        choice1: '2',
        choice2: '4',
        choice3: '6',
        choice4: '21',
        answer: 3,
    },
    {
        question: 'What is 1 + 1?',
        choice1: '2',
        choice2: '4',
        choice3: '8',
        choice4: '21',
        answer: 1,
    },
    {
        question: 'What is 4 + 4?',
        choice1: '2',
        choice2: '4',
        choice3: '8',
        choice4: '21',
        answer: 3,
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

        return window.location.assign('/end.html')
    }

    // questionCounter++

    const questionsIndex = Math.floor(Math.random() * avialableQuestions.length)
    currentQuestion = avialableQuestions[questionsIndex]
    question.innterText = currentQuestion.question

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