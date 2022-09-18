const categories = document.querySelectorAll(".item");

console.log();

// const elements = categories.querySelectorAll("li");

// const category = document.querySelector(".item").firstElementChild;

console.log(`Number of categories: ${categories.length}`);

categories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});

// console.log(category.nextElementSibling.children.length);

// console.log(`Category: ${category.textContent}`);

// console.log(`Elements: ${category.nextElementSibling.children.length}`);
