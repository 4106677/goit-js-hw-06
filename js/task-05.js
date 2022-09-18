const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
// console.log(outputName.textContent);

inputName.addEventListener("input", (event) => {
  //   console.log(event.currentTarget.value);
  outputName.textContent = event.currentTarget.value.trim();

  if (event.currentTarget.value.trim().split("").length === 0) {
    outputName.textContent = "Anonymous";
  }
  //   console.log(event.currentTarget.value.split("").length === 0);
});
