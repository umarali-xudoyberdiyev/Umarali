const formEl = document.getElementById("user-form");
const userPasswordInputEl = document.querySelector("#password");
const eyeEl = document.querySelector(".eye");
const eye2El = document.querySelector(".eye2");
const tableBodyEl = document.querySelector("tbody");

import { users } from "./data.js";

let editId = null;

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);

  if (editId) {
    let user = users.find((item) => item.id === editId);

    user.name = formData.get("name");
    user.lastname = formData.get("lastname");
    user.email = formData.get("email");
    user.password = formData.get("password");

    editId = null;
  } else {
    users.push({
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name: formData.get("name"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
  }

  UpdateUi(users);
  formEl.reset();
});

eyeEl.addEventListener("click", () => {
  userPasswordInputEl.type = "text";
  eyeEl.classList.add("hidden");
  eye2El.classList.remove("hidden");
});

eye2El.addEventListener("click", () => {
  userPasswordInputEl.type = "password";
  eye2El.classList.add("hidden");
  eyeEl.classList.remove("hidden");
});

window.deleteUser = function (id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users.splice(index, 1);
    UpdateUi(users);
  }
};

window.editUser = function (id) {
  let user = users.find((item) => item.id === id);

  editId = id;

  document.getElementById("name").value = user.name;
  document.getElementById("lastname").value = user.lastname;
  document.getElementById("email").value = user.email;
  document.getElementById("password").value = user.password;
};

function UpdateUi(arr) {
  tableBodyEl.innerHTML = "";

  arr.forEach((item) => {
    tableBodyEl.innerHTML += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.lastname}</td>
        <td>${item.email}</td>
        <td>${item.password}</td>
        <td><button onclick="editUser(${item.id})">Edit</button></td>
        <td><button onclick="deleteUser(${item.id})">Delete</button></td>
      </tr>
    `;
  });
}

UpdateUi(users);
