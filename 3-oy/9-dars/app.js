// async function getTodos() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     if (!res.ok) {
//       throw new Error(`Status: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error("GET xato:", error);
//   }
// }

// // getTodos();

// async function postTodos() {
//   let userLogin = {
//     usersId: 1,
//     Id: 1,
//     title: " ",
//     body: " ",
//   };
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(userLogin),
//     });
//     if (!res.ok) {
//       throw new Error("post qilishda muammo");
//     }
//     let data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // postTodos();

// async function deletePost(id) {
//   try {
//     let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: "DELETE",
//     });
//     if (res.status == 200 || res.status == 204) {
//       console.log("ochirildi");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// // deletePost(2);

async function UpdateTodo(id) {
  let newTodo = {
    userId: 1,
    id: 1,
    title: "Assalomu alaykum",
    completed: true,
  };
  try {
    let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    if (!res.ok) {
      throw new Error("yangianishda muammo");
    }

    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

UpdateTodo(20);
