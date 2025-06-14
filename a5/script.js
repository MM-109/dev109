const images = [
  {
    src: "slide_1.jpg",
    alt: "Barça Femení lifting the Champions League trophy",
    caption: "History made. Standards set."
  },
  {
    src: "slide_2.jpg",
    alt: "Xavi and Iniesta with the Champions League trophy",
    caption: "Brains behind the dynasty. One last dance."
  },
  {
    src: "slide_3.jpg",
    alt: "MSN trio: Suárez, Neymar, and Messi",
    caption: "The most feared trio in football. Ever."
  },
  {
    src: "slide_4.jpg",
    alt: "Barcelona squad celebrating Club World Cup victory",
    caption: "Even this one has our name on it."
  },
  {
    src: "slide_5.jpg",
    alt: "125-year anniversary FC Barcelona collage",
    caption: "125 years. More than a club."
  }
];

let currentIndex = 0;
let timer = 11;
let intervalId;

const slideshow = document.getElementById("slideshow");
const caption = document.getElementById("caption");
const timerDisplay = document.getElementById("timer");

function updateSlide(index) {
  const image = images[index];
  slideshow.src = image.src;
  slideshow.alt = image.alt;
  caption.textContent = image.caption;
  if (index === 2) {
    document.body.style.background = "linear-gradient(135deg, #fc00ff, #00dbde)";
  } else {
    document.body.style.background = "#f0ece2";
  }
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide(currentIndex);
  resetTimer();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide(currentIndex);
  resetTimer();
}

function countdown() {
  timer--;
  if (timer === 0) {
    nextSlide();
    timer = 11;
  }
  timerDisplay.textContent = timer;
}

function resetTimer() {
  timer = 11;
  timerDisplay.textContent = timer;
}

function startSlideshow() {
  updateSlide(currentIndex);
  intervalId = setInterval(countdown, 1000);
}

startSlideshow();
