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
      question: "Which of the following JavaScript statements is used to exist a loop early?",
      options: ["A) break", "B) exit", "C) stop", "D) return"],
      correctAnswer: 3
    },
    {
      question: "Which of the following best describes the difference between RAM (Random Access Memory) and a hard drive?",
      options: ["A) RAM is non-volatile, while a hard drive is volatile", "B) RAM is used for permanent storage, while a hard drive is used for temporary storage", "C) RAM is faster and used for temporary data storage, while a hard drive is slower and used for permanent storage", "D) RAM is used for networking, while a hard drive stores data."],
      correctAnswer: 4
    }
  ];

  let score = 0; //Track yhe user's score
  let current Question = 0; //Keep track of the current question
  const total Questions = questions.length;

  //Function to display a question
  function displayQuestion(questionObj) {
    const container = document.getElementById("quiz-container");
    container.innerHTML = " ; // Clear previous question

    
