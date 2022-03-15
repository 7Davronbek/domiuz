import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  lazy: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper2 = new Swiper(".mySwiper-products", {
  slidesPerView: 4,
  loop: true,
  lazy: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: "#swp-btn-next",
    prevEl: "#swp-btn-prev",
  },
});


var swiper3 = new Swiper(".mySwiper-new-products", {
  slidesPerView: 4,
  loop: true,
  lazy: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: "#swp-new-next",
    prevEl: "#swp-new-prev",
  },
});


var swiper4 = new Swiper(".mySwiper-smart-products", {
  slidesPerView: 4,
  loop: true,
  lazy: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: "#swp-smart-next",
    prevEl: "#swp-smart-prev",
  },
});


var swiper5 = new Swiper(".mySwiper-tel-products", {
  slidesPerView: 4,
  loop: true,
  lazy: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: "#swp-tel-next",
    prevEl: "#swp-tel-prev",
  },
});


var swiper6 = new Swiper(".mySwiper-muz-products", {
  slidesPerView: 4,
  loop: true,
  lazy: true,
  slidesPerView: "auto",
  spaceBetween: 30,
  navigation: {
    nextEl: "#swp-muz-next",
    prevEl: "#swp-muz-prev",
  },
});

var swiper7 = new Swiper(".brands-slider", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
});


