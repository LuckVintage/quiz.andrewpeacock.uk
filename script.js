const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-button");
const scoreContainer = document.getElementById("score-container");

const myQuestions = [
    {
        question: "What is the sum of all the interior angles of a regular pentagon?",
        answers: {
            a: "540 degrees",
            b: "720 degrees",
            c: "900 degrees",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the name of the tallest mountain in the solar system?",
        answers: {
            a: "Mount Everest",
            b: "Olympus Mons",
            c: "Mauna Kea",
        },
        correctAnswer: "b",
    },
    {
        question: "What is the name of the first successful artificial satellite?",
        answers: {
            a: "Sputnik 1",
            b: "Explorer 1",
            c: "Vanguard 1",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the smallest country in the world by land area?",
        answers: {
            a: "Monaco",
            b: "Nauru",
            c: "Vatican City",
        },
        correctAnswer: "c",
    },
    {
        question: "What is the largest country in the world by land area?",
        answers: {
            a: "Russia",
            b: "Canada",
            c: "China",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the capital of Australia?",
        answers: {
            a: "Melbourne",
            b: "Sydney",
            c: "Canberra",
        },
        correctAnswer: "c",
    },
    {
        question: "What is the national animal of India?",
        answers: {
            a: "Elephant",
            b: "Tiger",
            c: "Lion",
        },
        correctAnswer: "b",
    },
    {
        question: "What is the tallest mountain in North America?",
        answers: {
            a: "Mount Logan",
            b: "Mount Saint Elias",
            c: "Denali (Mount McKinley)",
        },
        correctAnswer: "c",
    },
    {
        question: "What is the name of the largest lake in Africa?",
        answers: {
            a: "Lake Malawi",
            b: "Lake Victoria",
            c: "Lake Tanganyika",
        },
        correctAnswer: "b",
    },
    {
        question: "What is the world's longest river?",
        answers: {
            a: "Amazon River",
            b: "Nile River",
            c: "Yangtze River",
        },
        correctAnswer: "b",
    },
    {
        question: "What is the name of the world's largest coral reef system?",
        answers: {
            a: "Great Barrier Reef",
            b: "Andros Barrier Reef",
            c: "Mesoamerican Barrier Reef System",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the capital of Iran?",
        answers: {
            a: "Tehran",
            b: "Baghdad",
            c: "Kabul",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the highest peak in South America?",
        answers: {
            a: "Aconcagua",
            b: "Huascarán",
            c: "Chimborazo",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the largest desert in the world?",
        answers: {
            a: "Sahara",
            b: "Gobi",
            c: "Antarctica",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the name of the highest mountain in the world?",
        answers: {
            a: "Mount Everest",
            b: "K2",
            c: "Kangchenjunga",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the capital of South Korea?",
        answers: {
            a: "Seoul",
            b: "Busan",
            c: "Incheon",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the name of the largest moon in our solar system?",
        answers: {
            a: "Titan",
            b: "Ganymede",
            c: "Callisto",
        },
        correctAnswer: "b",
    },
    {
        question: "What is the capital city of Eritrea?",
        answers: {
            a: "Asmara",
            b: "Addis Ababa",
            c: "Mogadishu",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the chemical symbol for the element silver?",
        answers: {
            a: "Ag",
            b: "Au",
            c: "Pt",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the name of the mountain range that spans seven countries in Europe?",
        answers: {
            a: "The Alps",
            b: "The Andes",
            c: "The Himalayas",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the name of the particle that is responsible for the electromagnetic force?",
        answers: {
            a: "Proton",
            b: "Neutron",
            c: "Photon",
        },
        correctAnswer: "c",
    },
    {
        question: "What is the name of the German philosopher who wrote 'Beyond Good and Evil'?",
        answers: {
            a: "Immanuel Kant",
            b: "Friedrich Nietzsche",
            c: "Martin Heidegger",
        },
        correctAnswer: "b",
    },
    {
        question: "What is the name of the spacecraft that carried the first humans to land on the Moon?",
        answers: {
            a: "Apollo 11",
            b: "Mercury 7",
            c: "Gemini 4",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the name of the world's largest coral reef system?",
        answers: {
            a: "Great Barrier Reef",
            b: "Belize Barrier Reef",
            c: "Andros Barrier Reef",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the name of the city that was the capital of Japan before Tokyo?",
        answers: {
            a: "Kyoto",
            b: "Osaka",
            c: "Hiroshima",
        },
        correctAnswer: "a",
    },
    {
        question: "What is the name of the river that runs through Baghdad?",
        answers: {
            a: "Nile River",
            b: "Euphrates River",
            c: "Indus River",
        },
        correctAnswer: "b",
    },
    {
        question: "What is the name of the composer who wrote 'The Nutcracker'?",
        answers: {
            a: "Ludwig van Beethoven",
            b: "Johann Sebastian Bach",
            c: "Pyotr Ilyich Tchaikovsky",
        },
        correctAnswer: "c",
    },
    {
        question: "What is the name of the process that converts sugar into alcohol?",
        answers: {
            a: "Fermentation",
            b: "Oxidation",
            c: "Hydrolysis",
        },
        correctAnswer: "a",
    },
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}" >
          ${letter} : ${currentQuestion.answers[letter]}
        </label>`
            );
        }

        output.push(
            `<div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join("")}</div>`
        );
    });

    quizContainer.innerHTML = output.join("");
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");

    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
        } else {
            answerContainer.style.color = "#d9534f";
            answerContainer.insertAdjacentHTML("beforeend", `<div style="color: #28a745; margin-top: 10px;">Correct answer: ${currentQuestion.answers[currentQuestion.correctAnswer]}</div>`);
        }
    });

    scoreContainer.innerHTML = `You got ${numCorrect} out of ${myQuestions.length} questions correct.`;
}

buildQuiz();

submitButton.addEventListener("click", showResults);
