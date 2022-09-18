let counterValue = 0;
const counter = document.querySelector("#value");

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener("click", () => {
  counterValue -= 1;

  counter.textContent = counterValue;
});

increment.addEventListener("click", () => {
  counterValue += 1;

  counter.textContent = counterValue;
});
