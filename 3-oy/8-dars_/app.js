const formEl = document.querySelector(".create-form");
console.log(formEl);

let baseUrl = "https://biyovo1194.pythonanywhere.com/api/v1";
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(formEl);

  let newTodo = {
    title: formData.get("title"),
    description: formData.get("description"),
    completed: false,
  };

  postTodo(newTodo);
});

async function postTodo(newTodo) {
  try {
    let res = await fetch(baseUrl + "/tasks/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) {
      throw new Error("yaratishda muammo");
    }
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
