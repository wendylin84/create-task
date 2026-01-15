const cards = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
];
let dontKnow = {};
let knowArray = {};

function insert() {
  const flashcardsContainer = document.querySelector("#flashcards");
  cards.forEach((card) => {
    cardElement.insertAdjacentHTML = `
            <div class="question">${card.question}</div>
            <div class="answer">${card.answer}</div>
        `;
  });
}

function categorizeKnowledge(card) {
  const idk = document.querySelector("#dont-know");
  if (card.answer) {
    knowArray[card.question] = card.answer;
  } else {
    dontKnow[card.question] = true;
  }
}

cards.forEach(categorizeKnowledge);
