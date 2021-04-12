"use strict";

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const items = document.querySelectorAll(".popup-item");
const closePop = document.querySelector("#close");
const popup = document.querySelector(".popup");

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

// MAPS
const map = document.querySelector(".map_container");
const map_toggle = document.querySelectorAll(".office");
const map_container = document.querySelectorAll(".map_container");
var all_articles = document.querySelectorAll(".map_container .col-4");
var maps = document.querySelectorAll("iframe");
map_toggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    var toggle_data = toggle.getAttribute("data-office");

    var map_container = document.querySelector(`.${toggle_data}`);
    var address_article = document.querySelectorAll(`.${toggle_data} .col-4`);
    var map = document.querySelector(`.${toggle_data} iframe`);

    removeMap();
    removeBack();
    hideMaps();
    removeActiveOffice();
    toggle.classList.add("active_office");
    address_article.forEach((article) => {
      article.classList.add("moveBack");
    });

    map_container.classList.add("map_open");
    map.classList.add("showMap");
  });
});

function removeMap() {
  map_container.forEach((map) => {
    map.classList.remove("map_open");
  });
}

function removeBack() {
  all_articles.forEach((articles) => {
    articles.classList.remove("moveBack");
    console.log(articles);
  });
}

function hideMaps() {
  maps.forEach((mps) => {
    mps.classList.remove("showMap");
    console.log(mps);
  });
}

function removeActiveOffice() {
  map_toggle.forEach((tgl) => {
    tgl.classList.remove("active_office");
  });
}
// team popup
items.forEach((item) => {
  item.addEventListener("click", () => {
    popup.classList.add("active");
  });
});
closePop.addEventListener("click", () => {
  popup.classList.remove("active");
});

// team owl
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
