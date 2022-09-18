const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur() {
  //   console.log(input.value.trim().length);
  //   console.log(dataLength);
  if (input.value.trim().length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  //   console.log(event.currentTarget.value.length);
}

// console.log(input["data-length"]);
// console.log(input.dataset.length);
// console.log(input.classList);
