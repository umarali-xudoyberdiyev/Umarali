const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

let Hsoni = animals.reduce((acc, cut) => {
  if (acc[cut]) {
    acc[cut] += 1;
  } else {
    acc[cut] = 1;
  }

  return acc;
}, {});

console.log(Hsoni);
