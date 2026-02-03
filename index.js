const cards = [
  {
    question: "What is the cooldown of Hermit's charge?",
    answer: "12 seconds",
  },
  {
    question:
      "What is the cooldown of Geisha's dash? (both normally and while using Soul Departure)",
    answer: "9 seconds, 4 seconds after using Soul Departure",
  },
  {
    question: "What is the cooldown of Mary's mirror?",
    answer: "15 seconds",
  },
  {
    question: "What is the cooldown of Luchino's jump?",
    answer: "10 seconds",
  },
  {
    question: "What is the cooldown of Gamekeeper's hook?",
    answer: "13 seconds",
  },
  {
    question:
      "How long does it take for Hell Ember's flame to start moving while rescuing?",
    answer: "5 seconds (you can look at the circle at the bottom of the flame)",
  },
  {
    question: "What is the cooldown of Axe Boy's soul?",
    answer: "13 seconds",
  },
  {
    question: "How long does it take for Bonbon's bombs to denotate?",
    answer:
      "2 seconds (if after 2 seconds it doesn't go off, can walk through)",
  },
  {
    question: "What is the cooldown of Violinist's note?",
    answer: "13 seconds",
  },
];
let dontknowArray = [];
let knowArray = [];
let currentIndex = 0;

function showCards(index) {
  const flashcards = document.querySelector(".flashcards");
  flashcards.innerHTML = "";

  if (!cards || cards.length === 0) {
    flashcards.innerHTML = `
    <div class="card">
    <p>No cards available</p>
    </div>`;
    return;
  }
  if (index >= cards.length) {
    flashcards.innerHTML = `
      <div class="card">
        <p>All cards have been studied</p>
      </div>`;
    return;
  }
  const card = cards[index];
  flashcards.insertAdjacentHTML(
    "beforeend",
    `<div class="card" data-index="${index}">
      <h2 class="question">${card.question}</h2>
    </div>`,
  );
}
showCards(currentIndex);

function flipCard() {
  document.querySelector(".flashcards").addEventListener("click", (e) => {
    const targetCard = e.target.closest(".card");
    let index = currentIndex;
    if (targetCard && targetCard.dataset.index) {
      index = Number(targetCard.dataset.index);
    }

    if (targetCard) {
      const questionSwitch = targetCard.querySelector(".question");
      const answerSwitch = targetCard.querySelector(".answer");
      if (questionSwitch) {
        questionSwitch.textContent = cards[index].answer;

        questionSwitch.classList.remove("question");
        questionSwitch.classList.add("answer");
      } else if (answerSwitch) {
        answerSwitch.textContent = cards[index].question;

        answerSwitch.classList.remove("answer");
        answerSwitch.classList.add("question");
      }
      return;
    }
  });
}
flipCard();

function sendToArray() {
  document.querySelector(".sortButtons").addEventListener("click", (e) => {
    if (e.target.classList.contains("sendToDontKnow")) {
      dontknowArray.push(cards[currentIndex]);
      currentIndex = Math.min(currentIndex + 1, cards.length);
      showCards(currentIndex);
    } else if (e.target.classList.contains("sendToKnow")) {
      knowArray.push(cards[currentIndex]);
      currentIndex = Math.min(currentIndex + 1, cards.length);
      showCards(currentIndex);
    }
  });
}
sendToArray();

function filterCards() {
  document.querySelector(".filterButtons").addEventListener("click", (e) => {
    const flashcards = document.querySelector(".flashcards");
    if (e.target.classList.contains("dontKnow")) {
      flashcards.innerHTML = "";
      dontknowArray.forEach((card) => {
        flashcards.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <h2 class="question">${card.question}</h2>
        </div>`,
        );
      });
    } else if (e.target.classList.contains("know")) {
      flashcards.innerHTML = "";
      knowArray.forEach((card) => {
        flashcards.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
          <h2 class="question">${card.question}</h2>
        </div>`,
        );
      });
    } else if (e.target.classList.contains("restart")) {
      currentIndex = 0;
      dontknowArray = [];
      knowArray = [];
      showCards(currentIndex);
    }
  });
}
filterCards();
