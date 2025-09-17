const questionElement = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.getElementById('next-button');

const questions = [
    {
        question: "witch animal can sleep when standing?",
        options: ["giraffe", "dolphin", "horse"],
        answer: "horse"
    },
    {
        question: "what is the largest planet in the solar system?",
        options: ["Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra"],
        answer: "Canberra"
    }
];

let currentQuestionIndex = 0;
let score = 0;

startQuiz();

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "next"
    showQuestion()
}

function showQuestion() {
    answersContainer.innerHTML = "";
    nextButton.style.display = "none";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;

    questionElement.innerHTML = `${questionNumber}. ${currentQuestion.question}`;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("btn");
        answersContainer.appendChild(button);

        button.addEventListener("click", () => {
            if (option === currentQuestion.answer) {
                score++;
                button.classList.add("correct");
            } else {
                button.classList.add("Incorrect");
            }

            Array.from(answersContainer.children).forEach(btn => {
                btn.disabled = true;
                if (btn.innerHTML === currentQuestion.answer) {
                    btn.classList.add("correct");
                }
            });
            nextButton.style.display = "block";
        });
    });
}

function showScore() {
    answersContainer.innerHTML = '';

    if (currentQuestionIndex === questions.length) {
        questionElement.innerHTML = `the quiz ended, your score is ${score} from ${questions.length} questions`;

        nextButton.innerHTML = 'replay the quiz';
        nextButton.style.display = 'block';
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex === questions.length) {
        startQuiz();
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }
});