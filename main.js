"use strict";

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

// navigacija
const fixedNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("fixed-nav");
  else nav.classList.remove("fixed-nav");
};
const headerObserver = new IntersectionObserver(fixedNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// slajder
rightBtn.addEventListener("click", () => {
  activeSlide++;

  checkActiveSlide();
  setBgToBody();
  setActiveSlide();
});
leftBtn.addEventListener("click", () => {
  activeSlide--;

  checkActiveSlide();
  setBgToBody();
  setActiveSlide();
});

const checkActiveSlide = () => {
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  } else if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
};
const setBgToBody = () => {
  header.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};
setBgToBody();
const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
};
const slideTimer = setInterval(function () {
  activeSlide++;
  checkActiveSlide();
  setBgToBody();
  setActiveSlide();
}, 5000);
