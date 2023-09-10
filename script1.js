const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "Who is the father of HTML?",
    a: "Rasmus Lerdorf",
    b: "Tim Berners-Lee",
    c: "Brendan Eich",
    d: "Sergey Brin",
    correct: "b",
  },
  {
    question: "To create HTML page,you nedd?",
    a: "Web browser",
    b: "text editor",
    c: "Both A and B",
    d: "None of the above ",
    correct: "c",
  },
  {
    question: "What year was HTML launched?",
    a: "1996",
    b: "1993",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "Which of the following is not Html tags?",
    a: "<head>",
    b: "<hr",
    c:"<list>",
    d: "All of the mentioned",
    correct: "c",
  },
  {
    question: "Which of the following is used to read an HTML page and render it?",
    a: "Web server",
    b: "Web network",
    c: "Web browser",
    d: "Web matrix",
    correct: "c",
  },
  {
    question:"Which of the following tag is used for inserting the largest heading in HTML?",
    a: "head",
    b: "<h1>",
    c: "<h6>",
    d: "heading",
    correct: "b",
  },
  {
    question:"In which part of the HTML metadata is contained?",
    a: "head tag",
    b:"title tag",
    c:"html tag",
    d:"body tag",
    correct:"a",
  },
  {
    question:"HTML is a subset of?",
    a: "SGMT",
    b: "SGML",
    C: "SGME",
    d: "XHTML",
    correct:"b",
  },
  {
   question: "Which character is used to represent when a tag is closed i HTML?",
   a: "#",
   b: "!",
   c: "/",
   d: "@",
   correct: "c",
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
