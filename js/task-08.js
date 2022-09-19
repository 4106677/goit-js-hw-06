const form = document.querySelector(".login-form");

form.addEventListener("submit", onLoginBtn);

function onLoginBtn(event) {
  event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   formData.forEach((value, name) => {
  //     if (value === "") {
  //       alert("Заповни всі поля, друже!");
  //     }

  //     console.log(name, value);

  //     form.reset();
  //   });
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповни всі поля, друже!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
