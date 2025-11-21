// Timer
let totalSeconds = 60;
const timerSeconds = document.getElementById("timer-seconds");
totalSeconds.innerHTML = totalSeconds;
let intervalID = setInterval(() => {
  totalSeconds--;
  timerSeconds.innerHTML = totalSeconds;

  if (totalSeconds === 0) {
    clearTimeout(intervalID);
    endGame();
  }
}, 1000);

function shuffleArray(array) {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
}

const writersArray = shuffleArray([
  "https://media.gettyimages.com/id/1327163640/fr/photo/vieilles-voitures-classiques-am%C3%A9ricaines-multicolores-dans-la-rue-de-la-havane-contre-des.jpg?s=612x612&w=0&k=20&c=mLUVVxKkNPpwfenBMuITs1K13unFBqtF5ENcZBEQ2Cg=",
  "https://media.gettyimages.com/id/647622920/fr/photo/voitures-de-taxi-oldtimer-parking-devant-le-capitole-%C3%A0-la-havane.jpg?s=612x612&w=0&k=20&c=hHQsVn-ecmddIckpszqliF5-Zy-BCFjUUABZ2G8Tjsw=",
  "https://media.gettyimages.com/id/989434672/fr/photo/vintage-classique-oldtimer-am%C3%A9ricaine-rose-convertible-dans-la-vieille-ville-de-la-havane-cuba.jpg?s=612x612&w=0&k=20&c=bsEwuQSS5la628_zO4DtgCgetkOL2nFqdN8Vaj3Yqj8=",
  "https://media.gettyimages.com/id/647622920/fr/photo/voitures-de-taxi-oldtimer-parking-devant-le-capitole-%C3%A0-la-havane.jpg?s=612x612&w=0&k=20&c=hHQsVn-ecmddIckpszqliF5-Zy-BCFjUUABZ2G8Tjsw=",
  "https://media.gettyimages.com/id/168617405/fr/photo/rue-%C3%A0-la-havane-cuba-avec-vitage-american-voiture.jpg?s=612x612&w=0&k=20&c=3P8lyR1JJy5W0a51va-mxYvw2yGpfabHj7wanJTonh4=",
  "https://media.gettyimages.com/id/647456074/fr/photo/vieille-voiture-am%C3%A9ricaine-rouge-sur-la-plage-de-varadero-%C3%A0-cuba.jpg?s=612x612&w=0&k=20&c=0Ov_Dwn7YM85XX5kBdKVNnVs9LUZIemINjUp5bHxQYM=",
  "https://media.gettyimages.com/id/534062225/fr/photo/cuban-flag.jpg?s=612x612&w=0&k=20&c=gFaI3rJFm7pphr_10f91-eNazVsgM-pQlIjeIEjQYeM=",
  "https://media.gettyimages.com/id/989434672/fr/photo/vintage-classique-oldtimer-am%C3%A9ricaine-rose-convertible-dans-la-vieille-ville-de-la-havane-cuba.jpg?s=612x612&w=0&k=20&c=bsEwuQSS5la628_zO4DtgCgetkOL2nFqdN8Vaj3Yqj8=",
  "https://media.gettyimages.com/id/811935914/fr/photo/portrait-de-femmes-en-robes-traditionnelles-cubaines.jpg?s=612x612&w=0&k=20&c=wv4KdaQH5OJ_NTqK_4aEk7hK-UU1CJC87IKwws86rwQ=",
  "https://media.gettyimages.com/id/129229409/fr/photo/street-musicians-cuba.jpg?s=612x612&w=0&k=20&c=_duqVNE0FlKD2LxLQKC1WQhTZZdE-4h3IXT8y9ftaLA=",
  "https://media.gettyimages.com/id/1327163640/fr/photo/vieilles-voitures-classiques-am%C3%A9ricaines-multicolores-dans-la-rue-de-la-havane-contre-des.jpg?s=612x612&w=0&k=20&c=mLUVVxKkNPpwfenBMuITs1K13unFBqtF5ENcZBEQ2Cg=",
  "https://media.gettyimages.com/id/168617405/fr/photo/rue-%C3%A0-la-havane-cuba-avec-vitage-american-voiture.jpg?s=612x612&w=0&k=20&c=3P8lyR1JJy5W0a51va-mxYvw2yGpfabHj7wanJTonh4=",
  "https://media.gettyimages.com/id/647456074/fr/photo/vieille-voiture-am%C3%A9ricaine-rouge-sur-la-plage-de-varadero-%C3%A0-cuba.jpg?s=612x612&w=0&k=20&c=0Ov_Dwn7YM85XX5kBdKVNnVs9LUZIemINjUp5bHxQYM=",
  "https://media.gettyimages.com/id/534062225/fr/photo/cuban-flag.jpg?s=612x612&w=0&k=20&c=gFaI3rJFm7pphr_10f91-eNazVsgM-pQlIjeIEjQYeM=",
  "https://media.gettyimages.com/id/129229409/fr/photo/street-musicians-cuba.jpg?s=612x612&w=0&k=20&c=_duqVNE0FlKD2LxLQKC1WQhTZZdE-4h3IXT8y9ftaLA=",
  "https://media.gettyimages.com/id/811935914/fr/photo/portrait-de-femmes-en-robes-traditionnelles-cubaines.jpg?s=612x612&w=0&k=20&c=wv4KdaQH5OJ_NTqK_4aEk7hK-UU1CJC87IKwws86rwQ=",
]);

let countRevealed = 0;
let previousCard = undefined;

const grid = document.getElementById("grid");

// Inject data into cards
const cards = Array.from(document.querySelectorAll(".grid-card"));
cards.forEach((card, idx) => {
  card.querySelector(".data-to-guess").src = writersArray[idx];
});

grid.addEventListener("click", function (event) {
  let element = getElement(event);
  if (!element) return;
  const image = element.children[0];
  image.classList.add("show");

  const currentCard = {
    imageURL: image.src,
    element: element,
    image: image,
  };

  // Reveal the card
  if (!previousCard) {
    previousCard = currentCard;
    return;
  }

  if (previousCard.imageURL !== image.src) {
    // Hide both cards
    previousCard.image.classList.remove("show");
    let timeoutID = setTimeout(() => {
      image.classList.remove("show");
      clearTimeout(timeoutID);
    }, 500);
  } else {
    // Show both cards
    previousCard.element.classList.add("show");
    element.classList.add("show");

    // Add to the revealed cards array
    countRevealed++;
  }

  previousCard = undefined;
  if (countRevealed >= cards.length / 2) {
    wonGame();
  }
});

function getElement(event) {
  if (
    event.target.nodeName === "DIV" &&
    event.target.className.includes("grid-card")
  ) {
    return event.target;
  } else if (
    (event.target.nodeName =
      "SPAN" && event.target.className.includes("data-to-gues"))
  ) {
    return event.target.closest(".grid-card");
  } else {
    return;
  }
}

function endGame() {
  timerSeconds.style.color = "red";
  timerSeconds.innerHTML = "GAME OVER";
  cards.forEach((card) => {
    card.querySelector("img").classList.add("show");
  });
}

function wonGame() {
  clearInterval(intervalID);
  timerSeconds.style.color = "lightgreen";
  timerSeconds.innerHTML = "YOU WON";
}
