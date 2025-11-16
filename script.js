const questions = [
    {
        question: "Which tag is used for the largest heading in HTML?",
        answers: ["<h1>", "<h6>", "<header>", "<head>"],
        correct: 0
    },
    {
        question: "CSS stands for?",
        answers: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style System",
            "Colorful Stylish System"
        ],
        correct: 1
    }
];

let index = 0;

const questionText = document.getElementById("question");
const answersBox = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
    const q = questions[index];
    questionText.textContent = q.question;
    answersBox.innerHTML = "";

    q.answers.forEach((ans, i) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = ans;

        btn.onclick = () => checkAnswer(i, btn);
        answersBox.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btn) {
    const correctIndex = questions[index].correct;

    if (selectedIndex === correctIndex) {
        btn.classList.add("correct");
    } else {
        btn.classList.add("wrong");
    }

    Array.from(answersBox.children).forEach(b => b.disabled = true);

    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    index++;
    if (index < questions.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        questionText.textContent = "Quiz Completed!";
        answersBox.innerHTML = "";
        nextBtn.style.display = "none";
    }
};

loadQuestion();