// Barca 2015 Carousel Slideshow Script
// Controls slide images, captions, timer, and background styling

const slides = [
  {
    src: "slide_1.jpg",
    alt: "Barcelona women celebrating Champions League win",
    caption: "The queens of Europe. Again."
  },
  {
    src: "slide_2.jpg",
    alt: "Xavi and Iniesta at Spotify Camp Nou",
    caption: "Legends never leave. They evolve."
  },
  {
    src: "slide_3.jpg",
    alt: "MSN trio with their backs: Messi, Suárez, Neymar celebrating with teammates",
    caption: "The most feared trio in football. Ever."
  },
  {
    src: "slide_4.jpg",
    alt: "Barça lifting the Club World Cup",
    caption: "Champions of every continent."
  },
  {
    src: "slide_5.jpg",
    alt: "Barcelona fans waving flags in the stands",
    caption: "125 years. More than a club."
  }
];

let currentIndex = 0;
let timer = 11;
const slideshow = document.getElementById("slideshow");
const caption = document.getElementById("caption");
const timerDisplay = document.getElementById("timer");
const chantSection = document.getElementById("chant");
const slideNumber = document.getElementById("slideNumber");

function updateSlide(index) {
  const slide = slides[index];
  slideshow.src = slide.src;
  slideshow.alt = slide.alt;
  caption.textContent = slide.caption;
  caption.style.color = "#ffd700"; // Gold yellow
  updateBackground();
  updateChantVisibility();
  resetTimer();

  if (slideNumber) slideNumber.textContent = index + 1;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
}

function resetTimer() {
  timer = 11;
  timerDisplay.textContent = timer;
}

function updateBackground() {
  const body = document.body;
  body.style.background = "linear-gradient(to right, #ea00ff, #ae46d0, #64c0ea)";
}

function updateChantVisibility() {
  if (chantSection) {
    chantSection.style.display = currentIndex === 0 ? "block" : "none";
  }
}

updateSlide(currentIndex);
setInterval(() => {
  if (timer > 0) {
    timer--;
    timerDisplay.textContent = timer;
  }
  if (timer === 0) {
    nextSlide();
  }
}, 1000);
