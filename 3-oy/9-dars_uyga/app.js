const formEl = document.querySelector('[data-form="create"]');
const todoList = document.querySelector('[data-list="todos"]');
const emptyState = document.querySelector('[data-state="empty"]');

const totalEl = document.querySelector("[data-stat='count']");
const doneEl = document.querySelector("[data-stat='done']");
const activeEl = document.querySelector("[data-stat='active']");

const searchInput = document.querySelector('[data-field="search"]');
const sortSelect = document.querySelector('[data-field="sort"]');
const filterBtns = document.querySelectorAll("[data-filter]");

const prevBtn = document.querySelector('[data-action="prev"]');
const nextBtn = document.querySelector('[data-action="next"]');
const pageCurrentEl = document.querySelector('[data-page="current"]');
const pageTotalEl = document.querySelector('[data-page="total"]');

const refreshBtn = document.querySelector('[data-action="refresh"]');
const openCreateBtn = document.querySelector('[data-action="open-create"]');
const titleInput = document.querySelector("#todoTitle");
const descInput = document.querySelector("#todoDesc");

const baseUrl = "https://biyovo1194.pythonanywhere.com/api/v1/tasks/";

let allTodos = []; // joriy sahifadagi (server'dan kelgan) todolar
let currentFilter = "all"; // all | active | completed
let currentSort = "newest"; // newest | oldest | az | za
let searchQuery = "";

let currentPage = 1;
let pageSize = 10; // API'dan kelgan birinchi javobga qarab yangilanadi
let totalCount = 0;
let hasNext = false;
let hasPrev = false;

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

function formatDate(iso) {
  if (!iso) return "-";
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("uz-UZ", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

async function getTodos(page = 1) {
  try {
    const res = await fetch(`${baseUrl}?page=${page}`);
    const json = await res.json();

    if (!json.success) {
      console.log(json.error);
      return;
    }

    const { count, next, previous, results } = json.data;

    allTodos = results;
    totalCount = count;
    hasNext = Boolean(next);
    hasPrev = Boolean(previous);
    currentPage = page;

    if (results.length > 0 && results.length > pageSize - 1 && hasNext) {
      pageSize = results.length;
    }

    renderTodos();
    renderPagination();
  } catch (err) {
    console.log(err);
    todoList.innerHTML = `<li style="color:var(--muted);text-align:center;padding:20px;">Xatolik yuz berdi. Internetni tekshiring.</li>`;
  }
}

function getVisibleTodos() {
  let items = [...allTodos];

  // qidiruv
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    items = items.filter((item) => item.title.toLowerCase().includes(q));
  }

  // filter
  if (currentFilter === "active") {
    items = items.filter((item) => !item.completed);
  } else if (currentFilter === "completed") {
    items = items.filter((item) => item.completed);
  }

  // sort
  items.sort((a, b) => {
    switch (currentSort) {
      case "oldest":
        return new Date(a.created_at) - new Date(b.created_at);
      case "az":
        return a.title.localeCompare(b.title);
      case "za":
        return b.title.localeCompare(a.title);
      case "newest":
      default:
        return new Date(b.created_at) - new Date(a.created_at);
    }
  });

  return items;
}

function renderTodos() {
  const visible = getVisibleTodos();

  totalEl.textContent = allTodos.length;
  doneEl.textContent = allTodos.filter((item) => item.completed).length;
  activeEl.textContent = allTodos.filter((item) => !item.completed).length;

  todoList.innerHTML = "";

  if (visible.length === 0) {
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  visible.forEach((item) => {
    const li = document.createElement("li");
    li.className = `todo-item${item.completed ? " is-done" : ""}`;
    li.dataset.id = item.id;
    li.dataset.completed = item.completed;

    li.innerHTML = `
      <button
        class="check${item.completed ? " is-checked" : ""}"
        type="button"
        aria-label="${item.completed ? "Mark as active" : "Mark as completed"}"
        data-action="toggle"
      >
        <span class="check-icon" aria-hidden="true">${item.completed ? "✓" : ""}</span>
      </button>

      <div class="todo-content">
        <div class="todo-top">
          <h3 class="todo-title">${escapeHtml(item.title)}</h3>
          <span class="badge ${item.completed ? "badge-done" : "badge-active"}">
            ${item.completed ? "Completed" : "Active"}
          </span>
        </div>
        <p class="todo-desc">${escapeHtml(item.description)}</p>

        <div class="meta">
          <span class="meta-item">
            <span class="meta-label">ID:</span>
            <span class="meta-value">${item.id}</span>
          </span>
          <span class="meta-item">
            <span class="meta-label">Created:</span>
            <span class="meta-value">${formatDate(item.created_at)}</span>
          </span>
        </div>
      </div>

      <div class="todo-actions">
        <button class="icon-btn" type="button" title="Edit" data-action="edit">✎</button>
        <button class="icon-btn danger" type="button" title="Delete" data-action="delete">🗑</button>
      </div>
    `;

    todoList.appendChild(li);
  });
}

function renderPagination() {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  pageCurrentEl.textContent = currentPage;
  pageTotalEl.textContent = totalPages;

  prevBtn.disabled = !hasPrev;
  nextBtn.disabled = !hasNext;
}

async function postTodo(newTodo) {
  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    });

    const data = await res.json();

    if (!res.ok || data.success === false) {
      alert("Xato! Todo qo'shilmadi.");
      return;
    }

    formEl.reset();
  } catch (err) {
    console.log(err);
    alert("Xato! Internetni tekshiring.");
  }
}

async function deleteTodo(id) {
  if (!confirm("Rostdan ham o'chirmoqchimisiz?")) return;

  try {
    const res = await fetch(baseUrl + id + "/", { method: "DELETE" });

    if (!res.ok) {
      alert("O'chirishda xatolik yuz berdi.");
      return;
    }

    if (allTodos.length === 1 && currentPage > 1) {
      getTodos(currentPage - 1);
    } else {
      getTodos(currentPage);
    }
  } catch (err) {
    console.log(err);
    alert("Xato! Internetni tekshiring.");
  }
}

async function toggleTodo(id, completed) {
  try {
    const res = await fetch(baseUrl + id + "/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });

    if (!res.ok) {
      alert("Yangilashda xatolik yuz berdi.");
      return;
    }

    getTodos(currentPage);
  } catch (err) {
    console.log(err);
    alert("Xato! Internetni tekshiring.");
  }
}

async function editTodo(id, oldTitle, oldDesc) {
  const newTitle = prompt("Yangi sarlavha:", oldTitle);
  if (newTitle === null) return;

  const newDesc = prompt("Yangi tavsif:", oldDesc);
  if (newDesc === null) return;

  if (!newTitle.trim() || !newDesc.trim()) {
    alert("Title va Description bo'sh bo'lmasligi kerak!");
    return;
  }

  try {
    const res = await fetch(baseUrl + id + "/", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle.trim(),
        description: newDesc.trim(),
      }),
    });

    if (!res.ok) {
      alert("Tahrirlashda xatolik yuz berdi.");
      return;
    }

    getTodos(currentPage);
  } catch (err) {
    console.log(err);
    alert("Xato! Internetni tekshiring.");
  }
}

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (!title || !description) {
    alert("Title va Description ni kiriting!");
    return;
  }

  postTodo({ title, description, completed: false });
});

todoList.addEventListener("click", function (e) {
  const btn = e.target.closest("button[data-action]");
  if (!btn) return;

  const li = btn.closest(".todo-item");
  const id = li.dataset.id;
  const completed = li.dataset.completed === "true";

  const action = btn.dataset.action;

  if (action === "toggle") {
    toggleTodo(id, completed);
  } else if (action === "delete") {
    deleteTodo(id);
  } else if (action === "edit") {
    const title = li.querySelector(".todo-title").textContent;
    const desc = li.querySelector(".todo-desc").textContent;
    editTodo(id, title, desc);
  }
});

searchInput.addEventListener("input", function (e) {
  searchQuery = e.target.value;
  renderTodos();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterBtns.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    currentFilter = btn.dataset.filter;
    renderTodos();
  });
});

sortSelect.addEventListener("change", function (e) {
  currentSort = e.target.value;
  renderTodos();
});

prevBtn.addEventListener("click", function () {
  if (hasPrev) getTodos(currentPage - 1);
});

nextBtn.addEventListener("click", function () {
  if (hasNext) getTodos(currentPage + 1);
});

refreshBtn.addEventListener("click", function () {
  getTodos(currentPage);
});

openCreateBtn.addEventListener("click", function () {
  titleInput.focus();
  titleInput.scrollIntoView({ behavior: "smooth", block: "center" });
});

getTodos(1);
