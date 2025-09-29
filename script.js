// Quiz Data
const quizData = {
  technical: [
    { question: "Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<url>", "<href>"], answer: "<a>", feedback: "The <a> tag is used for hyperlinks." },
    { question: "Which keyword is used to declare a variable in JavaScript (ES6)?", options: ["var", "int", "let", "define"], answer: "let", feedback: "In ES6, 'let' and 'const' are used for variable declaration." },
    { question: "In Python, what does PEP 8 refer to?", options: ["Style Guide", "Compiler", "Library", "Interpreter"], answer: "Style Guide", feedback: "PEP 8 is the official style guide for Python code." },
    { question: "Which symbol is used for 'address of' operator in C?", options: ["&", "*", "#", "%"], answer: "&", feedback: "In C, '&' gives the memory address of a variable." },
    { question: "Which algorithm is used for shortest path in graphs?", options: ["Dijkstra", "DFS", "BFS", "Kruskal"], answer: "Dijkstra", feedback: "Dijkstra’s algorithm finds the shortest path in weighted graphs." },
    { question: "Which SQL clause is used to group rows?", options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"], answer: "GROUP BY", feedback: "GROUP BY groups rows that have the same values into summary rows." },
    { question: "Which CSS property controls text size?", options: ["font-style", "font-size", "text-size", "size"], answer: "font-size", feedback: "The font-size property controls text size." },
    { question: "Which Python library is used for machine learning?", options: ["NumPy", "Matplotlib", "Scikit-learn", "Flask"], answer: "Scikit-learn", feedback: "Scikit-learn is popular for ML in Python." },
    { question: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array", "Linked List"], answer: "Stack", feedback: "Stack follows Last In First Out." },
    { question: "Which SQL command is used to remove a table?", options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"], answer: "DROP", feedback: "DROP is used to remove a table from a database." },
    { question: "Which of these is NOT an OOP concept?", options: ["Encapsulation", "Polymorphism", "Abstraction", "Compilation"], answer: "Compilation", feedback: "Compilation is a process, not an OOP principle." },
    { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style System", "Colorful Style Sheets"], answer: "Cascading Style Sheets", feedback: "CSS stands for Cascading Style Sheets." },
    { question: "Which keyword is used in SQL to filter results?", options: ["FILTER", "WHERE", "GROUP BY", "ORDER BY"], answer: "WHERE", feedback: "WHERE clause filters rows in SQL." },
    { question: "In C, which loop is guaranteed to run at least once?", options: ["for", "while", "do-while", "foreach"], answer: "do-while", feedback: "do-while executes at least once before checking condition." },
    { question: "Which JavaScript method converts JSON to an object?", options: ["JSON.parse()", "JSON.stringify()", "toObject()", "parseJSON()"], answer: "JSON.parse()", feedback: "JSON.parse() converts JSON string to object." },
    { question: "Which operator is used for exponentiation in Python?", options: ["^", "**", "exp()", "//"], answer: "**", feedback: "Python uses ** for exponentiation." }
  ],

  aptitude: [
    { question: "If 3 pencils cost 15, what is the cost of 7 pencils?", options: ["30", "35", "25", "40"], answer: "35", feedback: "1 pencil = 5, so 7 pencils = 35." },
    { question: "Which number comes next in the series: 2, 4, 8, 16, ?", options: ["20", "24", "32", "64"], answer: "32", feedback: "It's a power of 2 sequence: 2, 4, 8, 16, 32." },
    { question: "What is the probability of getting a head when tossing a coin?", options: ["1", "1/2", "1/4", "0"], answer: "1/2", feedback: "A coin has 2 outcomes, so P(Head)=1/2." },
    { question: "If 12 men can build a wall in 6 days, how many men can build it in 3 days?", options: ["12", "24", "18", "36"], answer: "24", feedback: "Work is inversely proportional to time." },
    { question: "Find the odd one out: 2, 6, 12, 20, 30, 42", options: ["20", "30", "42", "12"], answer: "20", feedback: "Pattern is n*(n+1): 2, 6, 12, 20 (wrong), 30, 42." },
    { question: "The average of 10 numbers is 20. If one number is removed, average becomes 19. What is the removed number?", options: ["20", "25", "29", "30"], answer: "29", feedback: "Total sum=200. New sum=171. Removed=29." },
    { question: "Solve: √(144) + (3²)", options: ["15", "21", "12", "18"], answer: "21", feedback: "√144=12. 3²=9. 12+9=21." },
    { question: "If A:B=2:3 and B:C=4:5, then A:C=?", options: ["8:15", "2:5", "4:7", "6:11"], answer: "8:15", feedback: "A:B=2:3, B:C=4:5 ⇒ A:C=8:15." },
    { question: "If x+1/x=2, then x²+1/x²=?", options: ["2", "4", "0", "3"], answer: "2", feedback: "(x+1/x)²= x²+1/x²+2 ⇒ 4= x²+1/x²+2 ⇒ 2." },
    { question: "How many diagonals does a hexagon have?", options: ["6", "9", "12", "15"], answer: "9", feedback: "Formula = n(n-3)/2 = 6*3/2=9." }
  ],

  professional: [
    { question: "Which is the most important skill in team communication?", options: ["Speaking", "Listening", "Arguing", "Ignoring"], answer: "Listening", feedback: "Active listening is key in effective communication." },
    { question: "In interviews, STAR method is used for?", options: ["Coding tests", "Behavioral questions", "IQ test", "Leadership"], answer: "Behavioral questions", feedback: "STAR = Situation, Task, Action, Result." },
    { question: "Which leadership style involves delegating tasks?", options: ["Autocratic", "Democratic", "Laissez-faire", "Directive"], answer: "Laissez-faire", feedback: "Laissez-faire leaders delegate decisions to team." },
    { question: "Which skill helps in resolving workplace conflicts?", options: ["Aggression", "Negotiation", "Avoidance", "Commanding"], answer: "Negotiation", feedback: "Negotiation resolves conflicts effectively." },
    { question: "What is emotional intelligence primarily about?", options: ["IQ", "Managing Emotions", "Memory", "Math Skills"], answer: "Managing Emotions", feedback: "EQ means recognizing and managing emotions." },
    { question: "Which factor improves professional ethics?", options: ["Integrity", "Dishonesty", "Favoritism", "Greed"], answer: "Integrity", feedback: "Integrity is the foundation of ethics." },
    { question: "Which skill is important in presentations?", options: ["Monotone speech", "Clarity", "Confusion", "Irrelevance"], answer: "Clarity", feedback: "Clear communication ensures understanding." },
    { question: "Teamwork is best described as?", options: ["Solo effort", "Group collaboration", "Competition", "Hierarchy"], answer: "Group collaboration", feedback: "Teamwork means working together effectively." },
    { question: "Time management involves?", options: ["Wasting time", "Planning tasks", "Avoiding deadlines", "Random work"], answer: "Planning tasks", feedback: "Time management is about prioritizing tasks." },
    { question: "Which quality inspires trust in leaders?", options: ["Dishonesty", "Transparency", "Hiding facts", "Manipulation"], answer: "Transparency", feedback: "Transparent leaders inspire trust." }
  ],

  domain: [
    { question: "Which logic gate is known as 'universal gate'?", options: ["AND", "OR", "NAND", "XOR"], answer: "NAND", feedback: "NAND and NOR gates are universal gates." },
    { question: "Which antenna is used for satellite communication?", options: ["Horn", "Yagi-Uda", "Parabolic Dish", "Monopole"], answer: "Parabolic Dish", feedback: "Satellite comm uses high-gain parabolic dish antennas." },
    { question: "Which device converts digital to analog signals?", options: ["ADC", "DAC", "Modem", "Amplifier"], answer: "DAC", feedback: "DAC converts digital signals to analog." },
    { question: "What is the full form of VLSI?", options: ["Very Large Scale Integration", "Variable Logic Signal Input", "Vector Logic System Interface", "Virtual Logic Storage Interface"], answer: "Very Large Scale Integration", feedback: "VLSI = Very Large Scale Integration." },
    { question: "Which modulation is used in TV broadcasting?", options: ["AM", "FM", "QAM", "PWM"], answer: "FM", feedback: "Frequency Modulation is used for audio in TV broadcasting." },
    { question: "What is Nyquist theorem related to?", options: ["Bandwidth", "Noise", "Sampling rate", "Amplification"], answer: "Sampling rate", feedback: "Nyquist theorem defines minimum sampling rate." },
    { question: "Which semiconductor is commonly used in electronics?", options: ["Silicon", "Gold", "Copper", "Platinum"], answer: "Silicon", feedback: "Silicon is the most widely used semiconductor." },
    { question: "Which OSI layer deals with routing?", options: ["Transport", "Network", "Session", "Data Link"], answer: "Network", feedback: "Routing happens in Network layer." },
    { question: "Which microcontroller family is popular in embedded systems?", options: ["8051", "Core i7", "Pentium", "Xeon"], answer: "8051", feedback: "8051 is widely used in embedded applications." },
    { question: "Which electronic component stores charge?", options: ["Resistor", "Capacitor", "Inductor", "Diode"], answer: "Capacitor", feedback: "Capacitors store electrical charge." }
  ],

  current: [
    { question: "Which country hosted the 2024 Summer Olympics?", options: ["Paris", "Tokyo", "Los Angeles", "London"], answer: "Paris", feedback: "The 2024 Summer Olympics were hosted in Paris." },
    { question: "Which country recently landed on the Moon’s south pole (Chandrayaan-3)?", options: ["India", "USA", "China", "Russia"], answer: "India", feedback: "India made history with Chandrayaan-3 in 2023." },
    { question: "Who is the current UN Secretary-General?", options: ["Ban Ki-moon", "Antonio Guterres", "Kofi Annan", "Bill Gates"], answer: "Antonio Guterres", feedback: "Antonio Guterres is the current UN Secretary-General." },
    { question: "Which country won the ICC Men’s T20 World Cup 2024?", options: ["India", "Australia", "England", "Pakistan"], answer: "India", feedback: "India won the ICC T20 World Cup 2024." },
    { question: "Which country is the largest producer of crude oil?", options: ["USA", "Saudi Arabia", "Russia", "China"], answer: "USA", feedback: "The USA is currently the largest oil producer." },
    { question: "Who is the current CEO of OpenAI (2025)?", options: ["Sam Altman", "Elon Musk", "Satya Nadella", "Sundar Pichai"], answer: "Sam Altman", feedback: "Sam Altman is the CEO of OpenAI." },
    { question: "Which country hosted G20 Summit 2023?", options: ["India", "Japan", "USA", "UK"], answer: "India", feedback: "India hosted the G20 Summit in 2023." },
    { question: "Which country launched the 'Artemis' Moon program?", options: ["USA", "India", "China", "Russia"], answer: "USA", feedback: "NASA's Artemis program aims to land humans on the Moon again." },
    { question: "Who is the current President of France (2025)?", options: ["Emmanuel Macron", "Marine Le Pen", "Francois Hollande", "Jacques Chirac"], answer: "Emmanuel Macron", feedback: "Emmanuel Macron is the President of France." },
    { question: "Which tech company developed ChatGPT?", options: ["Google", "Microsoft", "OpenAI", "Meta"], answer: "OpenAI", feedback: "ChatGPT was developed by OpenAI." }
  ]
};
let currentCategory = "";
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

// Shuffle helper
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Start Quiz
function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;

  const selectedCount = document.getElementById("question-count").value;
  let questions = shuffleArray([...quizData[currentCategory]]);
  currentQuiz = selectedCount === "all" ? questions : questions.slice(0, parseInt(selectedCount));

  const mode = document.getElementById("timer-mode").value;
  if (mode === "easy") timeLeft = 45;
  else if (mode === "hard") timeLeft = 15;
  else timeLeft = 30;

  document.getElementById("quiz-section").classList.remove("hidden");
  document.getElementById("category-title").innerText = category.toUpperCase() + " QUIZ";
  document.getElementById("result").classList.add("hidden");
  document.getElementById("restart-btn").classList.add("hidden");

  loadQuestion();
}

// Load Question
function loadQuestion() {
  clearInterval(timer);
  startTimer();

  const q = currentQuiz[currentQuestionIndex];
  document.getElementById("quiz-box").innerHTML = `
    <h3>${q.question}</h3>
    ${q.options.map(opt => `<div class="option" onclick="checkAnswer(this, '${q.answer}', '${q.feedback}')">${opt}</div>`).join("")}
  `;
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("feedback").innerText = "";
}

// Timer
function startTimer() {
  const mode = document.getElementById("timer-mode").value;
  if (mode === "easy") timeLeft = 45;
  else if (mode === "hard") timeLeft = 15;
  else timeLeft = 30;

  document.getElementById("timer").innerText = `⏱ Time left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `⏱ Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

// Check Answer
function checkAnswer(selected, correct, feedback) {
  clearInterval(timer);
  if (selected.innerText === correct) {
    score++;
    selected.style.background = "lightgreen";
    document.getElementById("feedback").innerText = "✅ Correct! " + feedback;
  } else {
    selected.style.background = "salmon";
    document.getElementById("feedback").innerText = "❌ Wrong! " + feedback;
  }
  document.querySelectorAll(".option").forEach(opt => opt.style.pointerEvents = "none");
  document.getElementById("next-btn").style.display = "block";
}

// Next Question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuiz.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show Result with Review
function showResult() {
  document.getElementById("quiz-box").innerHTML = "";
  document.getElementById("next-btn").style.display = "none";
  const total = currentQuiz.length;
  let resultHTML = `<h2>🎉 You scored ${score} out of ${total}</h2><h3>Review:</h3>`;
  currentQuiz.forEach((q, i) => {
    resultHTML += `<p><b>Q${i+1}: ${q.question}</b><br> ✅ Correct Answer: ${q.answer}<br> 💡 ${q.feedback}</p>`;
  });
  document.getElementById("result").innerHTML = resultHTML;
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("restart-btn").classList.remove("hidden");
}

// Restart
function restartQuiz() {
  document.getElementById("quiz-section").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

// Dark/Light Mode
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("theme-toggle");
  btn.innerText = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
