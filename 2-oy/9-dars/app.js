const users = [
  {
    id: 1,
    name: "Ali",
    lastName: "Karimov",
    email: "ali@gmail.com",
    age: 20,
  },
  {
    id: 2,
    name: "Vali",
    lastName: "Aliyev",
    email: "vali@gmail.com",
    age: 22,
  },
  {
    id: 3,
    name: "Hasan",
    lastName: "Tursunov",
    email: "hasan@gmail.com",
    age: 19,
  },
  {
    id: 4,
    name: "Husan",
    lastName: "Qodirov",
    email: "husan@gmail.com",
    age: 25,
  },
  {
    id: 5,
    name: "Aziz",
    lastName: "Rahimov",
    email: "aziz@gmail.com",
    age: 21,
  },
  {
    id: 6,
    name: "Jasur",
    lastName: "Nazarov",
    email: "jasur@gmail.com",
    age: 24,
  },
  {
    id: 7,
    name: "Sardor",
    lastName: "Yoqubov",
    email: "sardor@gmail.com",
    age: 23,
  },
  {
    id: 8,
    name: "Bekzod",
    lastName: "Ergashev",
    email: "bekzod@gmail.com",
    age: 26,
  },
  {
    id: 9,
    name: "Sherzod",
    lastName: "Rustamov",
    email: "sherzod@gmail.com",
    age: 18,
  },
  {
    id: 10,
    name: "Oybek",
    lastName: "Sobirov",
    email: "oybek@gmail.com",
    age: 27,
  },
];

let yoshikatta = users.filter((users) => users.age >= 20);

console.log(yoshikatta);

let tartib = users.sort((a, b) => a.age - b.age);

console.log(tartib);
