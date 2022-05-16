const cards = [
  {
    name: "CSS",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/css3-logo.png?raw=true",
  },
  {
    name: "HTML",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/html5-logo.png?raw=true",
  },
  {
    name: "JS",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/js-logo.png?raw=true",
  },
  {
    name: "NODE",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/nodejs-logo.png?raw=true",
  },
  {
    name: "PHOTOSHOP",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/photoshop-logo.png?raw=true",
  },
  {
    name: "RUBY",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/rails-logo.png?raw=true",
  },
  {
    name: "SASS",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/sass-logo.png?raw=true",
  },
  {
    name: "SUBLIME",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/sublime-logo.png?raw=true",
  },
  {
    name: "WORDPRESS",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/wordpress-logo.png?raw=true",
  },
  {
    name: "JQUERY",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/jquery-logo.png?raw=true",
  },
  {
    name: "PYTHON",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/python-logo.png?raw=true",
  },
  {
    name: "PHP",
    image:
      "https://github.com/robgmerrill/img/blob/bba1a66ce02baef773e02097786377c5223e69e9/php-logo_1.png?raw=true",
  },
];
let gameGrid = [...cards, ...cards];
gameGrid.sort(() => 0.5 - Math.random());
let count = 0;
let pairs = [];
let previousTarget = null;
const delay = 1000;
const game = document.getElementById("game_board");
const grid = document.createElement("section");

grid.classList.add("grid");

gameGrid.forEach((card) => {
  let div = document.createElement("div");
  div.classList.add("card");
  div.dataset.name = card.name;

  let front = document.createElement("div");
  front.classList.add("front");

  let back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${card.image})`;

  grid.appendChild(div);
  div.appendChild(front);
  div.appendChild(back);
});

game.appendChild(grid);

grid.addEventListener("click", function (event) {
  const lickedCard = event.target;
  if (lickedCard.nodeName === "SECTION" || lickedCard === previousTarget || lickedCard.parentNode.classList.contains("selected") || lickedCard.parentNode.classList.contains("match"))
    return; // advoid click section and itself
  if (count < 2) {
    ++count;
    previousTarget = lickedCard;
    lickedCard.parentNode.classList.add("selected");
    pairs.push(lickedCard.parentNode.dataset.name);
  }
  if (count === 2) {
    if (pairs[0] === pairs[1]) {
      setTimeout(match, delay);
      setTimeout(resetGuess, delay);
    } else {
      setTimeout(resetGuess, delay);
    }
  }
});

const match = () => {
  Array.from(document.querySelectorAll(".selected")).map((card) =>
    card.classList.add("match")
  );
};

const resetGuess = () => {
  count = 0;
  pairs = [];
  previousTarget = null;
  Array.from(document.querySelectorAll(".selected")).map((card) => card.classList.remove("selected"))
}
