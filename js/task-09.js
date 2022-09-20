function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.querySelector("body");

button.addEventListener("click", onButtonClick);

function onButtonClick() {
  const currentColor = getRandomHexColor();

  body.style.backgroundColor = currentColor;
  // console.log(text.textContent);
  text.textContent = currentColor;
}
