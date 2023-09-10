const quizData = [
  {
    question: "What is JavaScript?",
    a:"JavaScript is a scripting language used to make the website interactive",
    b:"JavaScript is an assembly language used to make the website interactive",
    c:"JavaScript is a compiled language used to make the website interactive",
    d:"None of the mentioned",
    correct: "a",
  },
  {
    question: "Which of the following is correct about JavaScript?",
    a:"JavaScript is an Object-Based language",
    b:"JavaScript is Assembly-language",
    c:"JavaScript is an Object-Oriented language",
    d:"JavaScript is a High-level language",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Arrays in JavaScript are defined by which of the following statements?",
    a:"It is an ordered list of values",
    b:"It is an ordered list of objects",
    c:"It is an ordered list of string",
    d:"It is an ordered list of functions",
    correct: "a",
  },
  {
    question: "Which of the following is not javascript data types?",
    a: "Null type",
    b: "Undefined type",
    c:"Number type",
    d: "All of the mentioned",
    correct: "d",
  },
  {
    question: "Where is Client-side JavaScript code is embedded within HTML documents?",
    a: "A URL that uses the special javascript:code",
    b: "A URL that uses the special javascript:protocol",
    c: "A URL that uses the special javascript:encoding",
    d: "A URL that uses the special javascript:stack",
    correct: "b",
  },
  {
    question: "Which of the following explains correctly what happens when a JavaScript program is developed on a Unix Machine?",
    a:"will work perfectly well on a Windows Machine",
    b: "will be displayed as JavaScript text on the browser",
    c: "will throw errors and exceptions",
    d:"must be restricted to a Unix Machine only",
    correct: "a",
  },
  {
    question: "What is the basic difference between JavaScript and Java?",
    a:"Functions are considered as fields",
    b:"Functions are values, and there is no hard distinction between methods and fields",
    c:"Variables are specific",
    d:"There is no difference",
    correct: "b",
  },
  {
    question: "Which of the following methods/operation does javascript use instead of == and !=?",
    a:"JavaScript uses equalto()",
    b:"JavaScript uses equals() and notequals() instead",
    c:"JavaScript uses bitwise checking",
    d:"JavaScript uses === and !== instead",
    correct: "d",
  },
  {
    question: "Which of the following is not a framework?",
    a:"JavaScript .NET",
    b:"JavaScript",
    c:"Cocoa JS",
    d:"jQuery",
    correct: "b",
  },
  
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
