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