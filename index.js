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
let dontknowArray = {};
let knowArray = {};

function inject(card) {
  const flashcards = document.querySelector("#flashcards");
  flashcards.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
      <h2 class="question">${card.question}</h2>
    </div>`,
  );
}
inject(card);

function flipCard() {
  const selectCard = document.querySelector(".card");
  let display = document.querySelector("#flashcards");
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
        let display = document.querySelector("#flashcards");
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
