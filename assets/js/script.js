let userNameInput = document.getElementById("username");

let submitButton = document.getElementById("submitform");

let loginSection = document.getElementById("sign-in");

let welcomeText = document.getElementById("username-displayed-section");

let quizButtonAppear = document.getElementById("quiz-start-appear");

submitButton.addEventListener('click', function() {
      if (!userNameInput.value) {
    alert("Please choose a username");
    return;
  }
  let username = userNameInput.value;
  welcomeText.classList.remove("hidden");
  document.getElementById("username-displayed").textContent = username;
  loginSection.classList.add("hidden");
  quizButtonAppear.classList.remove("hidden");
});


let quizButton = document.getElementById("start");

let questionBox = document.getElementById("questionbox");

let answerButtons = document.getElementById("answerbuttons");


let scoreBoard = document.getElementById("scoreboard");

let correctAnswers = document.getElementById("correct");

let incorrectAnswers = document.getElementById("incorrect");

let score =  { correctAnswers: 0, incorrectAnswers: 0, };


quizButton.addEventListener('click', startQuiz);

function startQuiz() {
    console.log("startQuiz function called");
    quizButton.classList.add("hidden");
    questionBox.classList.remove("hidden");
    answerButtons.classList.remove("hidden");
    scoreBoard.classList.remove("hidden");
    displayQuestion(0);
  }


function displayQuestion(index) {
    questionBox.textContent = questions[index].question;
    answerButtons.innerHTML = "";
    let button; 
    questions[index].answerButtons.forEach(answers => {
      button = document.createElement("button"); 
  
      button.classList.add("answerbuttons");
      button.textContent = answers.text;
      button.addEventListener('click', () => {
        if (answers.correct) {
          score.correct++;
          correctAnswers.textContent = score.correctAnswers;
        } else {
          score.incorrectAnswers++;
          incorrectAnswers.textContent = score.incorrectAnswers;
        }
        if (index + 1 < questions.length) {
          displayQuestion(index + 1);
        } else {
          questionBox.classList.add("hidden");
          answerButtons.classList.add("hidden");
        }
      });
      answerButtons.appendChild(button); 
    });
  }
  

let questions = [
    {
      question: 'In which city is the famous Edvard Eriksen statue, The Little Mermaid?',
      answers: [
        { text: 'Copenhagen', correct: true },
        { text: 'Oslo', correct: false },
        { text: 'Stockholm', correct: false }
      ]
    },
    {
      question: 'Which of these cities has the largest population?',
      answers: [
        { text: 'Shanghai', correct: true },
        { text: 'New Delhi', correct: false },
        { text: 'Mexico City', correct: false }
      ]
    },
    {
      question: 'The highest waterfall in Europe is in which country?',
      answers: [
        { text: 'Norway', correct: true },
        { text: 'Iceland', correct: false },
        { text: 'Finland', correct: false }
      ]
    },
    
    {
      question: 'From which Star Wars film has this quote: “Always remember, your focus determines your reality.',
      answers: [
        { text: 'The Force Awakens', correct: false },
        { text: 'The Empire Strikes Back', correct: false },
        { text: 'The Phantom Menace', correct: true }
      ]
    },
    {
      question: 'Where is bunny chow from?',
      answers: [
        { text: 'Usa', correct: false },
        { text: 'South Africa', correct: true },
        { text: 'Australia', correct: false }
      ]
    },
    {
      question: 'Where is tom yum from?',
      answers: [
        { text: 'Thailand', correct: true },
        { text: 'Japan', correct: false },
        { text: 'Sri Lanka', correct: false }
      ]
    },
    {
      question: 'What colour is Neptune?',
      answers: [
        { text: 'Blue', correct: true },
        { text: 'Red', correct: false },
        { text: 'Green', correct: false }
      ]
    },
    {
      question: 'Which company launched the perfume Eau Sauvage in 1966?',
      answers: [
        { text: 'Christian Dior', correct: true },
        { text: 'Hermès', correct: false },
        { text: 'Saint Laurent', correct: false }
      ]
    },
    {
      question: 'From which port city in England did the Titanic leave in 1912?',
      answers: [
        { text: 'Liverpool', correct: false },
        { text: 'Southampton', correct: true },
        { text: 'Dover', correct: false }
      ]
    },
    {
      question: 'Which Hollywood director made his directorial debut with Duel in 1971?',
      answers: [
        { text: 'Steven Spielberg', correct: true },
        { text: 'George Lucas', correct: false },
        { text: 'Martin Scorcese', correct: false }
      ]
    },
  
  ];
  
