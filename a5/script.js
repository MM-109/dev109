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
    caption: "More than a club. A movement."
  }
];

let currentIndex = 0;
let timer = 11;
const slideshow = document.getElementById("slideshow");
const caption = document.getElementById("caption");
const timerDisplay = document.getElementById("timer");
const chantSection = document.getElementById("chant");

function updateSlide(index) {
  const slide = slides[index];
  slideshow.src = slide.src;
  slideshow.alt = slide.alt;
  caption.textContent = slide.caption;
  caption.style.color = "#ffd700"; // Gold yellow
  updateBackground(index);
  updateChantVisibility(index);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
  resetTimer();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
  resetTimer();
}

function resetTimer() {
  timer = currentIndex === 2 ? 11 : 5;
}

function updateBackground(index) {
  const body = document.body;
  // All slides use the same 2015 kit inspired gradient from slide 2
  body.style.background = "linear-gradient(to right, #ea00ff, #ae46d0, #64c0ea)";
}

function updateChantVisibility(index) {
  if (chantSection) {
    chantSection.style.display = index === 0 ? "block" : "none";
  }
}

updateSlide(currentIndex);
setInterval(() => {
  timer--;
  timerDisplay.textContent = timer;
  if (timer <= 0) {
    nextSlide();
  }
}, 1000);
