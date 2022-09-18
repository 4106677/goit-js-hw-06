const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const listEl = [];

ingredients.forEach((element) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;
  listEl.push(li);
});

list.append(...listEl);
