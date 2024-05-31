const BODY = document.querySelector("body");
const OVERLAY_CONTENT = document.querySelector(".menu__overlay");
const header__menu = document.querySelector('.header__menu');
const button__logIn = document.querySelector('.button--logIn');
const button__signUp = document.querySelector('.button--signUp');
const menu__cross = document.querySelector('.menu__cross');
const container__burger = document.querySelector(".wrapper__burger");
const blog__items  = document.querySelectorAll(".blog__item ");


const container_range = document.querySelector(".blog__list-wrapper");
let range = document.querySelector(".range");
let rangeNum = document.querySelector(".blog__list");

//variables
let time = 500;
let count = 0;
let offsetBottom = -486;
let stepOffset = 162;
//variables


function addActive (item) {
  blog__items.forEach((i)=>{
    i.classList.remove("active");
  })
  setTimeout(()=>{
    blog__items[item].classList.add("active");
  },500)
}

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
  const windowInnerWidth = window.innerWidth;
  windowInnerWidth < 600 ? stepOffset = 112: stepOffset = 162
  windowInnerWidth < 600 ? offsetBottom = -336: offsetBottom = -486
  moveRange(offsetBottom, stepOffset);
});

function moveSide(value) {
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
      addActive(range.value);
      break;
    case 1:
      moveSide(range.value);
      rangeNum.style.top = distance + step * 2 + "px";
      addActive(range.value);
      break;
    case 2:
      moveSide(range.value);
      rangeNum.style.top = distance + step * 1 + "px";
      addActive(range.value);
      break;
    case 3:
      moveSide(range.value);
      rangeNum.style.top = distance + step * 0 + "px";
      addActive(range.value);
      break;
    case 4:
      moveSide(range.value);
      rangeNum.style.top = distance + step * -1 + "px";
      addActive(range.value);
      break;
    case 5:
      moveSide(range.value);
      rangeNum.style.top = distance + step * -2 + "px";
      addActive(range.value);
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
}
