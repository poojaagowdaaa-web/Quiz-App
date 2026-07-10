const quizData = [
    {
        question: "Which language is used to style web pages?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },
    {
        question: "Which language is used for web page structure?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "HTML"
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["int", "let", "var", "Both let and var"],
        answer: "Both let and var"
    },
    {
        question: "Which company developed Java?",
        options: ["Google", "Microsoft", "Sun Microsystems", "Apple"],
        answer: "Sun Microsystems"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: ["//", "<!-- -->", "#", "**"],
        answer: "//"
    }
];

let currentQuestion = 0;
let score = 0;

const question = document.getElementById("question");
const buttons = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {

    let q = quizData[currentQuestion];

    question.innerText = q.question;

    buttons.forEach((btn, index) => {
        btn.innerText = q.options[index];
        btn.disabled = false;
        btn.style.background = "#eee";
        btn.style.color = "black";

        btn.onclick = () => {
            if (btn.innerText === q.answer) {
                btn.style.background = "green";
                btn.style.color = "white";
                score++;
            } else {
                btn.style.background = "red";
                btn.style.color = "white";

                buttons.forEach(b => {
                    if (b.innerText === q.answer) {
                        b.style.background = "green";
                        b.style.color = "white";
                    }
                });
            }

            buttons.forEach(b => b.disabled = true);
        };

    });

}

nextBtn.onclick = () => {

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML =
            `
    <h2>Your Score: ${score}/${quizData.length}</h2>
    <button onclick="location.reload()">Play Again</button>
    `;
    }

};

loadQuestion();