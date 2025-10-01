// ============================================
// CSC 111 – Introduction to Computing
// Assignment: Project using Sequences, Selections, Loops
// Student Name: [Danna Cabrejo, Esther Uap, Remaly Dalmeida]
// Z Number: Z00196449 (DannaCabrejo)
// Date: [2025-09-30]
// Instructor: Prof. Felicity M. Weed Jackson
// File Name: quiz.js
// ============================================
/* Description:
This program creates a simple interactive quiz game on a web page. When the user clicks the 
"Start Quiz" button, a series of multiple-choice questions is displayed one at a time. 
The user selects an answer, and the program checks if it is correct, updates the score,
and then moves to the next question. At the end, it shows the final score.
Key JavaScript concepts used:
Variables – to store the score, current question index, and question data
Functions – to organize the logic (e.g., starting the quiz, displaying questions, checking answers)
Loops – to iterate through the answer options for each question
Selection (if statements) – to check if the user’s answer is correct
DOM manipulation – to dynamically update the content on the web page.
*/

/* How it works:
The program starts when the user clicks the "Start Quiz" button. It then:
Displays a question with multiple-choice answers.
Waits for the user to click one of the answer buttons.
Checks if the selected answer is correct and updates the score.
Moves to the next question and repeats the process.
After all questions are answered, it displays the final score on the webpage.
*/

/* Reflection:
I learned how to create an interactive quiz using JavaScript, including how to use functions,
loops, and conditionals to control program flow. One of the challenging parts was keeping track of 
the current question and updating the webpage content dynamically using the DOM (Document Object Model)
I found it interesting how JavaScript can respond to user input in real time to create a smooth
and engaging experience.
*/
// ============================================

function runQQuiz() {
  const questions = [
    {
      question: "What does the "var" keyword do in JavaScript?",
      options: [
        "A) Declares a variable that is globally scoped or function scoped",
        "B) Declares a variable that is block-scoped",
        "C) Declares a constant variable",
        "D) Declares a class"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is NOT a valid data type in JavaScript?",
      options: [
        "A) Number",
        "B) String",
        "C) Boolean",
        "D) Character"
      ],
      correctAnswer: 3
    },
    {
      question: "What is the result of the following JavaScript expression: 0 == false",
      options: [
        "A) true",
        "B) false",
        "C) undefined",
        "D) NaN"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following JavaScript statements is used to exit a loop early?",
      options: [
        "A) break",
        "B) exit",
        "C) stop",
        "D) return"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following best describes the difference between RAM (Random Access Memory) and a hard drive?",
      options: [
        "A) RAM is non-volatile, while a hard drive is volatile",
        "B) RAM is used for permanent storage, while a hard drive is used for temporary storage",
        "C) RAM is faster and used for temporary data storage, while a hard drive is slower and used for permanent storage",
        "D) RAM is used for networking, while a hard drive stores data."],
      correctAnswer: 2
    }
  ];

  let score = 0; //Track the user's score
  let current Question = 0; //Keep track of the current question
  
  const quizcontainer = docuument.getElemntById("quiz-container");
  const resultContainer = document.getElementById("result");

  resultContainer.innerHTML = "";//Clear previous result

  //Display the current question
  function displayQuestion() {
   quizContainer.innerHTML = "";//Clear previous question

    if (currentQuestion < questions.length) {
      const q = questions[currentQuestion];

      const questionElem = document.createElement("h1");
      questionElem.textContent = q.question;
      quizContainer.appendChild(questionElem);

      //Create buttons for each option
      q.options.forEach((option, index) -> {
        cont btn = document.createElement("button");
        btn.textConent = option;
        btn.atyle.display = "block";
        btn.style.margin = "8px 0";
        btn.onclick = () => chckAnswer(index);
        quizContainer.appendChild(btn);
      });
    } else {
      showResult();
    }
  }

  //Chack the selected answer
  function checkAnswer(selectedIndex0 {
    const correct = questions[currentQuestion].correctAnswer;
    if (selectedIndex === orrect) {
      score++;
    }

    currentQuestion++;
    displayQuestion();
  }

  //Show the final score
  function showResult() {
    quizContainer.innerHTML = "";
    resultContainer.innerHTML = '<h2>You scored ${score} out of ${questins.length}!</h2>;
  }

  //Start the quiz
  displayQuestion();
}
    
