//1-masala
let students = [
  { id: 1, name: "Ali", age: 20 },
  { id: 2, name: "Vali", age: 22 },
];

function addStudent(id, name, age) {
  students.push({ id, name, age });
}

function getStudents() {
  console.log(students);
}

function updateAge(id, age) {
  let user = students.find((x) => x.id == id);

  user.age = age;
}

function deleteStudent(id) {
  students = students.filter((x) => x.id != id);
}

addStudent(3, "Olim", 19);

updateAge(1, 21);

deleteStudent(2);

getStudents();

//2-masala
let cart = [];

function addToCart(product) {
  let item = cart.find((x) => x.id == product.id);

  if (item) {
    item.quantity++;
  } else {
    cart.push(product);
  }
}

function showCart() {
  let sum = 0;

  cart.forEach((x) => {
    console.log(x.name, x.quantity);

    sum += x.price * x.quantity;
  });

  console.log(sum);
}

function changeQuantity(id, count) {
  let item = cart.find((x) => x.id == id);

  item.quantity = count;
}

function removeFromCart(id) {
  cart = cart.filter((x) => x.id != id);
}

addToCart({
  id: 1,
  name: "Telefon",
  price: 300,
  quantity: 1,
});

showCart();

//3-masala
let todos = [];

function addTask(text) {
  todos.push({
    id: 1,
    task: text,
    done: false,
  });
}

function viewTasks() {
  console.log(todos);
}

function toggleTask() {
  todos[0].done = !todos[0].done;
}

function clearCompleted() {
  todos = todos.filter((x) => x.done == false);
}

addTask("JS");

toggleTask();

viewTasks();

//4-masala
let books = [
  {
    id: 1,
    title: "O'tkan kunlar",
    author: "Qodiriy",
    free: true,
  },
];

function addBook(title, author) {
  books.push({
    id: 2,
    title,
    author,
    free: true,
  });
}

function searchBook(text) {
  console.log(books.filter((x) => x.author.includes(text)));
}

function borrowBook(id) {
  let book = books.find((x) => x.id == id);

  book.free = false;
}

function removeBook(id) {
  books = books.filter((x) => x.id != id);
}

borrowBook(1);

searchBook("Qodiriy");

//5-masala
let movies = [
  {
    id: 1,
    title: "Inception",
    rating: 8.8,
  },
];

function addMovie(title, rating) {
  movies.push({
    id: 2,
    title,
    rating,
  });
}

function getTopMovies(rate) {
  console.log(movies.filter((x) => x.rating >= rate));
}

function updateMovie(id, rating) {
  let movie = movies.find((x) => x.id == id);

  movie.rating = rating;
}

function deleteMovie(id) {
  movies = movies.filter((x) => x.id != id);
}

updateMovie(1, 9);

console.log(movies);
