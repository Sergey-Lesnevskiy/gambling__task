const BODY = document.querySelector("body");
const OVERLAY_CONTENT = document.querySelector(".menu__overlay");
const header__menu = document.querySelector('.header__menu');
const button__logIn = document.querySelector('.button--logIn');
const button__signUp = document.querySelector('.button--signUp');
const menu__cross = document.querySelector('.menu__cross');
const container__burger = document.querySelector(".wrapper__burger");


const container_range = document.querySelector(".blog__list-wrapper");
let range = document.querySelector(".range");
let rangeNum = document.querySelector(".blog__list");

//variables
let time = 500;
let count = 0;
let offsetBottom = -486;
let stepOffset = 162;
//variables

function transDown() {
  var animation = rangeNum.animate(
    [{ transform: `translateY(-${stepOffset}px)` }, { transform: "translateY(0)" }],
    time
  );
  animation.addEventListener("finish", function () {
    rangeNum.style.transform = "translateY(0)";
  });
}
function transTop() {
  var animation = rangeNum.animate(
    [{ transform: `translateY(${stepOffset}px)` }, { transform: "translateY(0)" }],
    time
  );
  animation.addEventListener("finish", function () {
    rangeNum.style.transform = "translateY(0)";
  });
}

range.addEventListener("input", () => {
  moveRange(offsetBottom, stepOffset);
});

function moveSide (value) {
  if (count < value) {
    count++;
    transTop();
  } else {
    count--;
    transDown();
  }
  return;
}

function moveRange(distance, step) {
  switch (Number(range.value)) {
    case 0:
      moveSide(range.value);
      rangeNum.style.top = distance + step * 3 + "px";
      break;
    case 1:
      moveSide(range.value);
      rangeNum.style.top = distance + step * 2 + "px";
      break;
    case 2:
      moveSide(range.value);
      rangeNum.style.top = distance + step * 1 + "px";
      break;
    case 3:
      moveSide(range.value);
      rangeNum.style.top = distance + step * 0 + "px";
      break;
  }
}

// menu
container__burger.addEventListener('click', addBurgerMenu) 
function addBurgerMenu() {
  header__menu.classList.toggle("active__menu");
    button__logIn.classList.toggle("active__menu");
    button__signUp.classList.toggle("active__menu");
  menu__cross.classList.toggle("active__menu");
  BODY.classList.toggle("lock");
  OVERLAY_CONTENT.classList.toggle("active__menu");
  console.log('hi');
}
