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
    </div>`
  );
}

function addtoArray() {
  const selectCard = document.querySelector(".card");
  selectCard.addEventListener("click", function (event) {
    document.innerHTML = "";
  });
}

function filterByCategory(category) {
  let display = document.querySelector("#flashcards");
  display.innerHTML = "";
  const filteredCategory = cards.filter((card) => card.category === category);
  filteredCategory.forEach((card) =>
    display.insertAdjacentHTML(
      "afterbegin",
      `<div class="card">
      <h2 class="question">${card.question}</h2>
    </div>`
    )
  );
}

function filterByButton() {
  const buttons = document.querySelectorAll("button");
  const btnArr = Array.from(buttons);
  btnArr.forEach((btn) =>
    btn.addEventListener("click", function (event) {
      if (btn.id === "dontKnow") {
        filterByCategory("Still Need to Study");
      }
      if (btn.id === "know") {
        filterByCategory("Studied");
      }
      if (btn.id === "restart") {
        let display = document.querySelector("#flashcards");
        display.innerHTML = "";
        inject(card);
      }
    })
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
