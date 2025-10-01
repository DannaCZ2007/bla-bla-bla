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

function runQuiz() {
  //Quiz questions(array of objects)
  const questions = [
    {
      question: "1. Which symbol is used for single-line comments in JavaScript?",
      options: ["A) <!-- -->", "B) //", "C) /* */", "D) #"],
      answer: "B"
    },
    {
      question: "2. Which keyword declares a constant variable?",
      options: ["A) let", "B) var", "C) const", "D) static"],
      answer: "C"
    },
    {
      question: "3. Which operator is used to assign a value to a variable?",
      options: ["A) =", "B) ==", "C) ===", "D) :="],
      answer: "A"
    },
    {
      question: "4. Which loop is guaranteed to run at least once in JavaScript?",
      options: ["A) for loop", "B) while loop", "C) do...while loop", "D) foreach loop"],
      answer: "C"
    },
    {
      question: "Which of the following best describes the difference between RAM (Random Access Memory) and a hard drive?",
      options: ["A) RAM is non-volatile, while a hard drive is volatile", "B) RAM is used for permanent storage, while a hard drive is used for temporary storage", "C) RAM is faster and used for temporary data storage, while a hard drive is slower and used for permanent storage", "D) RAM is used for networking, while a hard drive stores data."],
      answer: "C"
    }
  ];

  //Variables to keep track of progress
  let currentQuestion = 0;
  let score = 0; 

  //HTML references
  const quizDiv = document.getElementById("quiz");
  const nextBtn = document.getElementById("nextBtn");
  const resultP = document.getElementById("result");

  //Function to show a question
  function showQuestion(index) {
    quizDiv.innerHTML = "";//Clear previous content

    let q = questions[index];//current question

    //Show question text
    let questionElem = document.createElement("p");
    questionElem.textContent = q.question;
    quizDiv.appendChild(questionElem);

    //Loop through options
    for (let i = 0; i < q.options.length; i++) {
      let btn = document.createElement("button");
      btn.textContent = q.options[i];

      btn.onclick = function () {
        let choice = q.options[i].charAt(0); //A, B, C, or D

        //Selection (if/else)
        if (choice === q.answer) {
          score++;
          alert("Correct!");
        } else {
          alert("Wrong! The correct answer was " + q.answer);
        }

        //Show "Next" button
        nextBtn.style.display = "block";
      };
      quizDiv.appendChild(btn);
      quizDiv.appendChild(document.createElement("br"));
    }
  }

  //Handle "Next" button
  nextBtn.onclick = function () {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
      nextBtn.style.display = "none";
    } else {
      quizDiv.innerHTML = "";
      nextBtn.style.display = "none";
      resultP.textContent = "Quiz finished! You scored " + score + " out of " + questions.length;
    }
  };

  //start the quiz
  showQuestion(currentQuestion);
}

//call the function when the script loads
runQuiz();
