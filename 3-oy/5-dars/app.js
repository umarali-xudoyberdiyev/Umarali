const formEl = document.getElementById("user-form");
const userPasswordInputEl = document.querySelector("#password");
const eyeEl = document.querySelector(".eye");
const tableBodyEl = document.querySelector("tbody");

import { users } from "./data.js";
console.log(users);

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);

  let user = {
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  users.push(user);
  UpdateUi(users);
  formEl.reset();
});

eyeEl.addEventListener("click", () => {
  userPasswordInputEl.setAttribute("type", "text");
});

window.deleteUser = function (id) {
    let new
};
