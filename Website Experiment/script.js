const quotes = [
  "Sei du selbst die Veränderung, die du dir wünschst für diese Welt.",
  "Das Glück deines Lebens hängt von der Beschaffenheit deiner Gedanken ab.",
  "Es ist nicht genug zu wissen, man muss auch anwenden. Es ist nicht genug zu wollen, man muss auch tun.",
  "Der Weg zum Ziel beginnt an dem Tag, an dem du die hundertprozentige Verantwortung für dein Tun übernimmst.",
  "Erfolg ist kein Zufall. Erfolg ist das Ergebnis von Blut, Schweiß, Tränen und harter Arbeit.",
  "Die einzige Grenze, die wir haben, ist die, die wir uns selbst setzen.",
  "Wenn du etwas liebst, lass es frei. Wenn es zurückkommt, gehört es dir. Wenn nicht, dann hat es dir nie gehört.",
  "Die wichtigste Entscheidung, die du in deinem Leben treffen kannst, ist, glücklich zu sein.",
  "Es gibt nur zwei Arten zu leben. Entweder so als wäre nichts ein Wunder oder so als wäre alles ein Wunder.",
  "Das Leben ist 10% was dir passiert und 90% wie du darauf reagierst."
];

const images = [
  "https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/03/28/10/05/kitten-1285341_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/04/20/09/animal-welfare-2372093_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/11/22/57/kitten-2633040_1280.jpg",
  "https://media.istockphoto.com/id/909106260/de/foto/gl%C3%BCckliches-k%C3%A4tzchen-mag-gestreichelt-von-frauenhand.jpg?s=2048x2048&w=is&k=20&c=AB_LcLyPwa-BV2RjhvdWjUO9bPrqv6BwanidBUBZnSQ=",
  "https://cdn.pixabay.com/photo/2018/03/27/17/25/cat-3266673_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/09/19/32/dog-838281_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/08/01/09/04/dog-2563759_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/02/08/13/25/golden-retriever-3139491_1280.png",
  "https://cdn.pixabay.com/photo/2015/11/10/20/10/dog-1037702_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/05/09/17/29/puppy-2298832_1280.jpg"
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function showContent(type) {
  const buttons = document.querySelector(".buttons");
  const content = document.querySelector(".content");

  content.innerHTML = "";

  let newElement;
  if (type === "quote") {
    newElement = document.createElement("p");
    newElement.className = "quote";
    newElement.textContent = getRandomElement(quotes);
  } else if (type === "image") {
    newElement = document.createElement("img");
    newElement.className = "image";
    newElement.src = getRandomElement(images);
  }

  content.appendChild(newElement);
}

function showSlideshow() {
  const buttons = document.querySelector(".buttons");
  const content = document.querySelector(".content");

  content.innerHTML = "";

  const randomQuote = getRandomElement(quotes);
  const randomImage = getRandomElement(images);

  const slideshow = document.createElement("div");
  slideshow.className = "slideshow";

  const quote = document.createElement("p");
  quote.className = "quote";
  quote.textContent = randomQuote;

  const image = document.createElement("img");
  image.className = "image";
  image.src = randomImage;

  slideshow.appendChild(quote);
  slideshow.appendChild(image);

  content.appendChild(slideshow);
}

function addQuoteAndImage() {
  const userQuote = prompt("Bitte gib ein Zitat ein");
  const userImage = prompt("Bitte gib einen Link zu einem Bild ein");

  if (userQuote && userImage) {
    quotes.push(userQuote);
    images.push(userImage);
    alert("Das Zitat und das Bild wurden erfolgreich hinzugefügt!");
  } else {
    alert("Das Eingabefeld für das Zitat oder das Bild ist leer. Bitte versuche es erneut.");
  }
}

const addButton = document.querySelector(".add-button");
const quoteButton = document.querySelector(".quote-button");
const imageButton = document.querySelector(".image-button");
const slideshowButton = document.querySelector(".slideshow-button");

addButton.addEventListener("click", function(){
  addQuoteAndImage();
});

quoteButton.addEventListener("click", function () {
  showContent("quote");
});

imageButton.addEventListener("click", function () {
  showContent("image");
});

const interval = 5000; // 5 Sekunden
let slideshowRunning = false;
let timer;

slideshowButton.addEventListener("click", function () {
  showSlideshow();
  if (slideshowRunning) {
    // Wenn Diashow läuft, stop
    clearInterval(timer);
    slideshowRunning = false;
  } else {
    // Wenn Diashow gestoppt ist, starte
    timer = setInterval(showSlideshow, interval);
    slideshowRunning = true;
  }
});