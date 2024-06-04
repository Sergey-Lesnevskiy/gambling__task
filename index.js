const BODY = document.querySelector("body");
const OVERLAY_CONTENT = document.querySelector(".menu__overlay");
const header__menu = document.querySelector('.header__menu');
const button__logIn = document.querySelector('.button--logIn');
const button__signUp = document.querySelector('.button--signUp');
const menu__cross = document.querySelector('.menu__cross');
const container__burger = document.querySelector(".wrapper__burger");
const blog__items = document.querySelectorAll(".blog__item ");


const container_range = document.querySelector(".blog__list-wrapper");
const SCROLL = document.querySelector('.range');
const reviewsList = document.querySelector('.blog__list');

//variables
let time = 500;
let count = 0;
let offsetBottom = -486;
let stepOffset = 162;
//variables


const scrollReviews = function (value) {
  reviewsList.style.transform = "translateY(0px)";

  let step = window.innerWidth < 600 ? stepOffset = 112 : stepOffset = 162;
  let trans = value * step;

  reviewsList.style.transform = `translateY(-${trans}px)`;
};
SCROLL.addEventListener("click", () => {
  scrollReviews(SCROLL.value);
});

// menu
container__burger.addEventListener('click', addBurgerMenu)
function addBurgerMenu() {
  header__menu.classList.toggle("active__menu");
  button__logIn.classList.toggle("active__menu");
  button__signUp.classList.toggle("active__menu");
  menu__cross.classList.toggle("active__menu");
  BODY.classList.toggle("lock");
  OVERLAY_CONTENT.classList.toggle("active__menu");
}
