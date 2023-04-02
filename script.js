const inputForm = document.querySelector("#input-form");
const correctUsername = "new_user";
const correctPassword = "123456789";

inputForm.addEventListener("submit", (e) => {
  const usernameBox = e.target[0];
  const passwordBox = e.target[1];
  e.preventDefault();

  if (usernameBox.value !== correctUsername) {
    if (!usernameBox.value.length && !passwordBox.value.length) {
      usernameBox.classList.add("invalid");
      inputForm.querySelector("#username-container i.x").classList.add("fa-x");
      passwordBox.classList.add("invalid");
      inputForm.querySelector("#password-container i.x").classList.add("fa-x");

      return createParagraph("*please, enter username and password");
    }

    usernameBox.classList.add("invalid");
    inputForm.querySelector("#username-container i.x").classList.add("fa-x");

    if (usernameBox.value.length) {
      createParagraph("*please, enter valid username");
    } else {
      createParagraph("*please, enter username");
    }
  } else {
    inputForm.querySelector("#username-container i.x").classList.remove("fa-x");
    usernameBox.classList.remove("invalid");

    usernameBox.classList.add("valid");
    inputForm.querySelector("#username-container i.x").classList.add("fa-check");
  }

  if (passwordBox.value !== correctPassword) {
    passwordBox.classList.add("invalid");
    inputForm.querySelector("#password-container i.x").classList.add("fa-x");

    if (passwordBox.value.length) {
      createParagraph("*please, enter valid password");
    } else {
      createParagraph("*please, enter password");
    }
  } else {
    inputForm.querySelector("#password-container i.x").classList.remove("fa-x");
    passwordBox.classList.remove("invalid");

    passwordBox.classList.add("valid");
    inputForm.querySelector("#password-container i.x").classList.add("fa-check");
  }

  if (usernameBox.value === correctUsername && passwordBox.value === correctPassword)
    return createParagraph("Success. Logging you in!");
});

const createParagraph = (text) => {
  const p = document.querySelector("#login-container p");
  p.textContent = text;
};
