// const son = {
//   floor: function (num) {
//     if (num > 0) {
//       console.log(num - (num % 1));
//     } else if (num == 0) {
//       console.log(0);
//     } else {
//       console.log(num - (num % 1) + 1);
//     }
//   },
// };

// son.floor(14.5);
// son.floor(7.9);
// son.floor(-15.7);

// const son2 = {
//   ceil: function (num) {
//     if (num > 0) {
//       console.log(num - (num % 1) + 1);
//     } else if (num == 0) {
//       console.log(0);
//     } else {
//       console.log(num - (num % 1));
//     }
//   },
// };

// son2.ceil(14.5);
// son2.ceil(7.9);
// son2.ceil(-15.7);

// const son3 = {
//   trunc: function (num) {
//     if (num > 0) {
//       console.log(num - (num % 1));
//     } else if (num == 0) {
//       console.log(0);
//     } else {
//       console.log(num - (num % 1));
//     }
//   },
// };

// son3.trunc(14.5);
// son3.trunc(7.9);
// son3.trunc(-15.7);

//============================================================
let students = [
  {
    id: 1,
    name: "Umarali",
    age: 15,
  },
  {
    id: 2,
    name: "Xusanboy",
    age: 16,
  },
  {
    id: 3,
    name: "Zayniddin",
    age: 14,
  },
];

function addStudent(name, age) {
  let newStudent = {
    id: students[students.length - 1].id + 1,
    name: name,
    age: age,
  };
  students.push(newStudent);
}

addStudent("Sayfulloh", 15);

console.log(students);
