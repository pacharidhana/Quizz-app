console.log("JS file loaded!");

// Quiz Data
const questionBank = {
  math: [
    { question: "What is 5 * 3?", answers: ["15", "10", "20", "25"], correct: "15" },
    { question: "Square root of 81?", answers: ["7", "8", "9", "10"], correct: "9" },
    { question: "What is 12 + 8?", answers: ["18", "20", "22", "24"], correct: "20" },
    { question: "What is 50 ÷ 5?", answers: ["5", "10", "15", "20"], correct: "10" },
    { question: "Cube of 4?", answers: ["16", "64", "32", "24"], correct: "64" },
    { question: "What is 9 × 9?", answers: ["72", "81", "90", "99"], correct: "81" },
    { question: "Square root of 144?", answers: ["10", "11", "12", "13"], correct: "12" },
    { question: "What is 25 + 30?", answers: ["50", "55", "60", "65"], correct: "55" }
  ],
  gk: [
    { question: "Capital of France?", answers: ["Paris", "London", "Berlin", "Rome"], correct: "Paris" },
    { question: "Largest ocean?", answers: ["Indian", "Atlantic", "Arctic", "Pacific"], correct: "Pacific" },
    { question: "Longest river in the world?", answers: ["Nile", "Amazon", "Yangtze", "Ganga"], correct: "Nile" },
    { question: "Who is Father of the Nation in India?", answers: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "B. R. Ambedkar"], correct: "Mahatma Gandhi" },
    { question: "National animal of India?", answers: ["Tiger", "Lion", "Elephant", "Leopard"], correct: "Tiger" }
  ],
  tech: [
    { question: "HTML stands for?", answers: ["Hyper Text Markup Language", "High Tool Machine Language", "Home Text Mark Language", "Hyper Tool Modern Language"], correct: "Hyper Text Markup Language" },
    { question: "JS is short for?", answers: ["JavaSystem", "JavaScript", "JustScript", "JQuerySource"], correct: "JavaScript" },
    { question: "CSS stands for?", answers: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Coded Style Syntax"], correct: "Cascading Style Sheets" },
    { question: "CPU is?", answers: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Program Unit"], correct: "Central Processing Unit" }
  ],
  currentAffairs: [
    { question: "Which country hosted the G20 summit in 2023?", answers: ["India", "Japan", "Indonesia", "Argentina"], correct: "India" },
    { question: "Who won the Men’s FIFA World Cup in 2022?", answers: ["Argentina", "France", "Brazil", "Germany"], correct: "Argentina" },
    { question: "Which country recently launched the Chandrayaan-3 mission?", answers: ["India", "USA", "Russia", "China"], correct: "India" },
    { question: "Which city will host the 2028 Summer Olympics?", answers: ["Paris", "Los Angeles", "Tokyo", "Sydney"], correct: "Los Angeles" },
    { question: "Which company became the first to reach $3 trillion market value?", answers: ["Apple", "Microsoft", "Amazon", "Google"], correct: "Apple" }
  ]
};

// Variables
let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerId;

// Elements
const startScreen = document.getElementById("start-screen");
const quizEl = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next");
const timeEl = document.getElementById("time");
const progressBar = document.getElementById("progress-bar");
const resultEl = document.getElementById("result");

// Start Quiz
document.getElementById("start-btn").addEventListener("click", () => {
  const category = document.getElementById("category").value;
  questions = shuffleArray([...questionBank[category]]);
  currentQuestion = 0;
  score = 0;
  startScreen.style.display = "none";
  quizEl.style.display = "block";
  loadQuestion();
});

// Timer
function startTimer() {
  timeLeft = 15;
  timeEl.textContent = timeLeft;
  timerId = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerId);
      nextQuestion();
    }
  }, 1000);
}

// Load Question
function loadQuestion() {
  clearInterval(timerId);
  startTimer();

  let q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  shuffleArray(q.answers).forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-btn");
    btn.onclick = () => checkAnswer(btn, q.correct);
    const li = document.createElement("li");
    li.appendChild(btn);
    answersEl.appendChild(li);
  });

  updateProgress();
}

// Check Answer
function checkAnswer(btn, correct) {
  clearInterval(timerId);
  const allBtns = document.querySelectorAll(".answer-btn");
  allBtns.forEach(b => b.disabled = true);

  if (btn.textContent === correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    allBtns.forEach(b => {
      if (b.textContent === correct) b.classList.add("correct");
    });
  }
}

// Next Question
nextBtn.addEventListener("click", nextQuestion);
function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Progress
function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.width = progress + "%";
}

// Show Result
function showResult() {
  quizEl.style.display = "none";
  resultEl.style.display = "block";

  let highScore = localStorage.getItem("quizHighScore") || 0;
  if (score > highScore) {
    localStorage.setItem("quizHighScore", score);
    highScore = score;
  }

  resultEl.innerHTML = `
    <h2>Your Score: ${score}/${questions.length}</h2>
    <h3>High Score: ${highScore}</h3>
    <button onclick="location.reload()">Play Again</button>
  `;
}

// Utility: Shuffle Array
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Dark Mode Toggle
document.getElementById("dark-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
