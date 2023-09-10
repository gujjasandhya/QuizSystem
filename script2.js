const quizData = [
    {
      question: "What is CSS?",
      a:"CSS is a style sheet language",
      b:"CSS is designed to separate the presentation and content, including layout, colors, and fonts",
      c:"CSS is the language used to style the HTML documents",
      d:"All of the mentioned",
      correct: "d",
    },
    {
      question: "Which of the following tag is used to embed css in html page?",
      a:"<css>",
      b:"<!DOCTYPE html>",
      c:"<script>",
      d:"<style></style>",
      correct: "d",
    },
    {
      question: "Which of the following CSS selectors are used to specify a group of elements?",
      a:"tag",
      b:"id",
      c:"class",
      d:"both class and tag",
      correct: "c",
    },
    {
      question: "Which of the following has introduced text, list, box, margin, border, color, and background properties?",
      a:"HTML",
      b:"PHP",
      c:"CSS",
      d:"Ajax",
      correct: "c",
    },
    {
      question: "Which of the following CSS framework is used to create a responsive design?",
      a:"django",
      b:"rails",
      c:"larawell",
      d:"bootstrap",
      correct: "d",
    },
    {
      question: "Which of the following type of HTML tag is used to define an internal style sheet?",
      a:"<script>",
      b:"<link>",
      c:"<class>",
      d:"<style>",
      correct: "d",
    },
    {
      question: "Which of the following CSS property is used to make the text bold?",
      a:"text-decoration: bold",
      b:"font-weight: bold",
      c:"font-style: bold",
      d:"text-align: bold",
      correct: "b",
    },
    {
      question: "Which of the following CSS style property is used to specify an italic text?",
      a:"style",
      b:"font",
      c:"font-style",
      d:"@font-face",
      correct: "c",
    },
    {
      question: "Which of the following is the correct syntax to link an external style sheet in the HTML file?",
      a:"<link rel=”stylesheet” href=”style.css” />",
      b:"<link rel=”stylesheet” src=”style.css” />",
      c:"<style rel=”stylesheet” src=”style.css” />",
      d:"<style rel=”stylesheet” link=”style.css” /></style>",
      correct: "a",
    },
    {
      question: "Which of the following function defines a linear gradient as a CSS image?",
      a:"gradient()",
      b:"linear-gradient()",
      c:"grayscale()",
      d:"image()",
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
  