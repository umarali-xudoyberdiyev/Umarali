console.log("1-masala");
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("2-masala");
let yigindi = 0;
for (let i = 1; i <= 10; i++) {
  yigindi += i;
}
console.log(yigindi);
console.log("3-masala");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("4-masala");

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
console.log("5-masala");
for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}
console.log("6-masala");
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    console.log(i);
  }
}
console.log("7-masala");
for (let i = 1; i <= 10; i++) {
  console.log(2 ** i);
}
console.log("8-masala");

let unli = 0;
let matn = "Assalomu alaykum";
let unlilar = "aeiouAEIOU";
let undosh = 0;
console.log(matn);
for (let i = 0; i < matn.length; i++) {
  if (unlilar.includes(matn[i])) {
    unli++;
  } else {
    undosh++;
  }
}

console.log("Unli hariflar", unli);
console.log("Undosh hariflar", undosh);

console.log("9-masala");
for (let i = 1; i <= 100; i++) {
  if (100 % i == 0) {
    console.log(i);
  }
}
