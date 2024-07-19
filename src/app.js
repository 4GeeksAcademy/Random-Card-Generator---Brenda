import "./style.css";

function generateCard() {
  const suits = ["heart", "spade", "club", "diamond"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const suit = suits[Math.floor(Math.random() * suits.length)];
  const value = values[Math.floor(Math.random() * values.length)];

  const suitSymbols = {
    spade: "♠",
    heart: "♥",
    club: "♣",
    diamond: "♦"
  };

  const cardElement = document.getElementById("card");
  const topSuitElement = document.getElementById("top-suit");
  const bottomSuitElement = document.getElementById("bottom-suit");
  const valueElement = document.getElementById("card-value");

  cardElement.className = "card " + suit;

  topSuitElement.innerHTML = suitSymbols[suit];
  bottomSuitElement.innerHTML = suitSymbols[suit];
  valueElement.innerHTML = value;
}

function updateCardSize() {
  const cardElement = document.getElementById("card");
  const widthInput = document.getElementById("width-input").value;
  const heightInput = document.getElementById("height-input").value;

  cardElement.style.width = widthInput + "px";
  cardElement.style.height = heightInput + "px";
}

window.onload = function() {
  generateCard();
  document
    .getElementById("new-card-button")
    .addEventListener("click", function() {
      generateCard();
      updateCardSize();
    });
  setInterval(generateCard, 10000);
};
