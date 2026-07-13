const formEl = document.querySelector(".create-form");
console.log(formEl);
const TodoWrapEl = document.querySelector(".todo-list");
console.log(TodoWrapEl);

let baseUrl = "https://biyovo1194.pythonanywhere.com/api/v1";

window.deletetodo = async function (id) {
  console.log(id);

  try {
    let res = await fetch(baseUrl + `/tasks/${id}/`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("o'chirishda muammo");
    }

    let data = await res.json();
    console.log(data);
    console.log("ochdi");
  } catch (error) {
    console.log(error);
  }

  getTodo();
};

async function UpdateUi(arr) {
  arr.forEach((item) => {
    TodoWrapEl.innerHTML += `
    <li class="todo-item" data-id="1" data-completed="false">
              <button
                class="check"
                type="button"
                aria-label="Mark as completed"
                data-action="toggle"
              >
                <span class="check-icon" aria-hidden="true"></span>
              </button>

              <div class="todo-content">
                <div class="todo-top">
                  <h3 class="todo-title">${item.title}</h3>
                  <span class="badge badge-active">${item}</span>
                </div>
                <p class="todo-desc">
                 ${item.description}
                </p>

                <div class="meta">
                  <span class="meta-item">
                    <span class="meta-label">ID:</span>
                    <span class="meta-value">${item.id}</span>
                  </span>
                  <span class="meta-item">
                    <span class="meta-label">Created:</span>
                    <span class="meta-value">${item}</span>
                  </span>
                </div>
              </div>

              <div class="todo-actions">
                <button
                  class="icon-btn"
                  type="button"
                  title="Edit"
                  data-action="edit"
                >
                  ✎
                </button>
                <button 
                  onclick="deletetodo(${item.id})"
                  class="icon-btn danger"
                  type="button"
                  title="Delete"
                  data-action="delete"
                >
                  🗑
                </button>
              </div>
            </li>
    `;
  });
}

async function getTodo() {
  try {
    let res = await fetch(baseUrl + "/tasks/");

    if (!res.ok) {
      throw new Error("olib kelishda muammo");
    }
    let data = await res.json();
    UpdateUi(data.data.results);
  } catch (error) {
    console.log(error);
  }
}

getTodo();
