let questions = [
  {
    category: "gk",
    question: "What is the capital of India?",
    choices: ["New Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "New Delhi"
  },
  {
    category: "science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    category: "math",
    question: "What is 5 + 7?",
    choices: ["10", "11", "12", "13"],
    answer: "12"
  },
  {
    category: "history",
    question: "Who discovered America?",
    choices: ["Columbus", "Newton", "Einstein", "Galileo"],
    answer: "Columbus"
  },
  {
    category: "tech",
    question: "What does HTML stand for?",
    choices: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: "HyperText Markup Language"
  }
];

function getRandomQuestion(questions){
  let randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}
function getRandomComputerChoice(choices){
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function getResults(question,choice){
  if(choice == question.answer){
    return "The computer's choice is correct!";
  }
  else{
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}