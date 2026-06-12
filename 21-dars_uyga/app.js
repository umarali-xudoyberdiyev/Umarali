//1-masala
const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

function getNamesByGrade(students, grade) {
  return students
    .map((student) => {
      if (student.percent >= 85 && student.percent <= 100) {
        return { ...student, grade: 5 };
      } else if (student.percent >= 70 && student.percent < 85) {
        return { ...student, grade: 4 };
      } else if (student.percent >= 60 && student.percent < 70) {
        return { ...student, grade: 3 };
      } else {
        return { ...student, grade: 0 };
      }
    })
    .filter((student) => student.grade === grade);
}

console.log("1:", getNamesByGrade(students, 5)); // ["Quincy", "Alexis", "Katie"]
console.log("1:", getNamesByGrade(students, 4)); // ["Jason", "Anna"]
console.log("1:", getNamesByGrade(students, 3)); // ["Sam"]
//2-masala
const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

function Hayfonlarsoni(arr) {
  let result = {};

  for (let i of arr) {
    if (result[i]) {
      result[i]++;
    } else {
      result[i] = 1;
    }
  }

  return result;
}

console.log("2:", Hayfonlarsoni(animals));
// { dog: 2, chicken: 3, cat: 1, rabbit: 1 }
//3-masala
const arr = [1, 2, 3, 4, 5];
let kvadrat = arr.map((x) => x * x);
console.log("3:", kvadrat);
// [1, 4, 9, 16, 25]
//4-masala
const nubers = [1, -4, 12, 0, -3, 29, -150];

let sum = 0;

for (let i of nubers) {
  if (i > 0) {
    sum += i;
  }
}
console.log("4:", sum);
// 42
//5-masala
const str = "George Raymond Richard Martin";

const result = str
  .split(" ")
  .map((word) => word[0])
  .join("");

console.log("5:", result); // "GRRM"
//6-masala
const users = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

users.sort((a, b) => a.age - b.age);

const farq = users[users.length - 1].age - users[0].age;

console.log("6:", farq);
// 54
//7-masala
function ajrat(arr) {
  return {
    juft: arr.filter((num) => num % 2 === 0),
    toq: arr.filter((num) => num % 2 !== 0),
  };
}

console.log("7:", ajrat([1, 2, 3, 4, 5, 6, 7, 8]));
// { juft: [ 2, 4, 6, 8 ], toq: [ 1, 3, 5, 7 ] }
//8-masala
const arr2 = [1, 2, 3, 2, 4, 5, 1, 6];

const result2 = arr2.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log("8:", result2);
// [1, 2, 3, 4, 5, 6]
//9-masala

let products = [
  { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20 },
  { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10 },
  { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40 },
  { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30 },
  { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30 },
];

console.log("ID bo'yicha:");
console.log(
  "9:",
  [...products].sort((a, b) => a.id - b.id),
);

console.log("NAME bo'yicha:");
console.log(
  "9:",
  [...products].sort((a, b) => a.name.localeCompare(b.name)),
);

console.log("PRICE bo'yicha:");
console.log(
  "9:",
  [...products].sort((a, b) => a.price - b.price),
);

console.log("RATING bo'yicha:");
console.log(
  "9:",
  [...products].sort((a, b) => a.rating - b.rating),
);

console.log("DISCOUNT bo'yicha:");
console.log(
  "9:",
  [...products].sort((a, b) => a.discount - b.discount),
);
//10-masala
const bestProduct = [...products].sort((a, b) => b.rating - a.rating)[0];

console.log("10:", bestProduct);
// { id: 5, name: 'Dell', price: 35000, rating: 4.9, discount: 30 }
//11-masala
// eng arzon product
const cheapestProduct = [...products].sort((a, b) => a.price - b.price)[0];

console.log("11:", cheapestProduct);

// 12-masala
const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
console.log("12:", totalPrice);

// 13-masala
const names = products.map((p) => p.name);
console.log("13:", names);

// 14-masala
const product5 = products.find((p) => p.id === 5)?.name;
console.log("14:", product5);

// 15-masala
const without4 = products.filter((p) => p.id !== 4);
console.log("15:", without4);

// 16-masala
function isLetters(str) {
  return str
    .split("")
    .every((ch) => (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z"));
}
console.log("16:", isLetters("HelloWorld"));

// 17-masala
function getTruthyFalsy(arr) {
  return {
    truthy: arr.filter(Boolean),
    falsy: arr.filter((v) => !v),
  };
}
console.log(
  "17:",
  getTruthyFalsy([false, 1, 10, "", null, "abdulaziz", 1.13, 0]),
);

// 18-masala
const str18 = "Men Abdulaziz Programmerman";
const lenArr = str18.split(" ").map((w) => w.length);
console.log("18:", lenArr);

// 19-masala
const str19 = "Men Abdulaziz Programmerman";
const hasSpace = str19.split("").some((ch) => ch === " ");
console.log("19:", hasSpace);

// 21-masala
function digitSum(n) {
  if (n === 0) return 0;
  return (n % 10) + digitSum(Math.floor(n / 10));
}
console.log("21:", digitSum(1234));

// 22-masala
const pupils = [
  { name: "Elbek", percent: 95 },
  { name: "Zafar", percent: 78 },
  { name: "Aziz", percent: 83 },
  { name: "Jasur", percent: 88 },
  { name: "Bobur", percent: 66 },
  { name: "Kamron", percent: 75 },
];

const ortacha = pupils.reduce((sum, p) => sum + p.percent, 0) / pupils.length;
console.log("22", ortacha);

// 23-masala
const grade23 = pupils.map((p) => ({
  ...p,
  grade: p.percent >= 90 ? 5 : p.percent >= 80 ? 4 : p.percent >= 70 ? 3 : 2,
}));
console.log("23:", grade23);

// 24-masala
const pass24 = pupils.map((p) => ({
  ...p,
  isPassed: p.percent > 70,
}));
console.log("24:", pass24);

// 25-masala
const result25 = pupils.reduce(
  (exam, p) => {
    if (p.percent > 70) exam.pass++;
    else exam.fail++;
    return exam;
  },
  { pass: 0, fail: 0 },
);

console.log("25:", result25);
