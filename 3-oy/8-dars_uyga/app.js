const formCreate = document.getElementById("form-create");
const formEdit = document.getElementById("form-edit");
const listGroupTodo = document.getElementById("list-group-todo");
const messageCreate = document.getElementById("message-create");

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeEl = document.getElementById("close");

let editItemId;

let todos = JSON.parse(localStorage.getItem("list"))
  ? JSON.parse(localStorage.getItem("list"))
  : [];

if (todos.length) showTodos();

function setTodos() {
  localStorage.setItem("list", JSON.stringify(todos));
}

function getTime() {
  const now = new Date();

  const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  const minute =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

  return `${hour}:${minute}, ${date}-${month} ${year}-yil`;
}

function showMessage(where, message) {
  where.textContent = message;
  setTimeout(() => {
    where.textContent = "";
  }, 2500);
}

function showTodos() {
  const todos = JSON.parse(localStorage.getItem("list"));
  listGroupTodo.innerHTML = "";

  todos.forEach((item, index) => {
    listGroupTodo.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center ${item.completed ? "completed" : ""}">
                <div class="todo-text" onclick="setCompleted(${index})">
                    <p class="mb-0 text-todo">${item.text}</p>
                    <small class="text-muted opacity-50">${item.time}</small>
                </div>
                <div class="todo-icons">
                    <img onclick="editTodo(${index})" src="img/edit.svg" alt="edit icon" width="25" height="25" class="mr-2 cursor-pointer">
                    <img onclick="deleteTodo(${index})" src="img/delete.png" alt="delete icon" width="25" height="25" class="cursor-pointer">
                </div>
            </li>
        `;
  });
}

formCreate.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = formCreate["input-create"].value.trim();
  formCreate.reset();

  if (todoText.length) {
    todos.push({
      text: todoText,
      time: getTime(),
      completed: false,
    });
    setTodos();
    showTodos();
  } else {
    showMessage(messageCreate, "Iltimos, biror bir matn kiriting...");
  }
});

function deleteTodo(id) {
  const filteredTodos = todos.filter((item, index) => {
    return index !== id;
  });
  todos = filteredTodos;
  setTodos();
  showTodos();
}

function setCompleted(id) {
  const completedTodos = todos.map((item, index) => {
    if (id === index) {
      return { ...item, completed: !item.completed };
    } else {
      return item;
    }
  });
  todos = completedTodos;
  setTodos();
  showTodos();
}

function editTodo(id) {
  openModal();
  editItemId = id;
  formEdit["input-edit"].value = todos[id].text;
}

formEdit.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = formEdit["input-edit"].value.trim();
  formEdit.reset();

  if (todoText.length) {
    todos.splice(editItemId, 1, {
      text: todoText,
      time: getTime(),
      completed: false,
    });
    setTodos();
    showTodos();
    closeModal();
  } else {
    alert("Matn maydoni bo'sh bo'lishi mumkin emas!");
  }
});

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

document.addEventListener("keydown", (e) => {
  if (e.which === 27 || e.key === "Escape") {
    closeModal();
  }
});

closeEl.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
