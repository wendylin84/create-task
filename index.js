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
    answer: "i lowk forgot",
  },
  {
    question: "What is the cooldown of Luchino's jump?",
    answer: "i lowk forgot",
  },
  {
    question: "What is the cooldown of Fool Gold's pickaxe?",
    answer: "i lowk forgot",
  },
  {
    question:
      "How long does it take for Hell Ember's flame to start moving while rescuing?",
    answer: "5 seconds (you can look at the circle at the bottom of the flame)",
  },
  {
    question: "What is the cooldown of Axe Boy's soul?",
    answer: "i lowk forgot",
  },
  {
    question: "How long does it take for Bonbon's bombs to denotate?",
    answer:
      "2 seconds (if after 2 seconds it doesn't go off, can walk through)",
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
        <button id="restart">Restart</button>
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

function flipCard() {
  const selectCard = document.querySelector(".card");
  let display = document.querySelector(".flashcards");
  selectCard.addEventListener("click", function (event) {
    document.innerHTML = "";
    display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
      <h2 class="answer">${card.answer}</h2>
      <button id="dontKnow">Still Need to Study</button>
      <button id="know">Studied</button>
    </div>`,
    );
  });
}

function sendtoArray() {
  const buttons = document.querySelectorAll("button");
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      if (event.target.id === "dontKnow") {
        dontknowArray.push(card);
      } else if (event.target.id === "know") {
        knowArray.push(card);
      }
    });
  });
}

function filterByButton() {
  let display = document.querySelector("#flashcards");
  display.innerHTML = "";
  const buttons = document.querySelectorAll("button");
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      if (btn.id === "dontKnow") {
        dontknowArray.forEach((card) => {
          display.insertAdjacentHTML(
            "afterbegin",
            `<div class="card">
      <h2 class="question">${card.question}</h2>
    </div>`,
          );
        });
      }
      if (btn.id === "know") {
        knowArray.forEach((card) => {
          display.insertAdjacentHTML(
            "afterbegin",
            `<div class="card">
      <h2 class="question">${card.question}</h2>
    </div>`,
          );
        });
      }
      if (btn.id === "restart") {
        let display = document.querySelector(".flashcards");
        display.innerHTML = "";
        inject(card);
      }
    }),
  );
}
filterByButton();

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); // stops page from refreshing
  let album = {};
  album.name = document.getElementById("name").value;
  album.img = document.getElementById("img").value;
  album.category = document.getElementById("category").value;
  album.year = document.getElementById("year").value;
  console.log(album);
  songs.push(album);
  inject(album); // add to the page
  clearFields(); // reset form inputs
});
