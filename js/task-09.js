function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", onButtonClick);

function onButtonClick() {
  body.style.backgroundColor = getRandomHexColor();
  // console.log(text.textContent);
  text.textContent = getRandomHexColor();
}
