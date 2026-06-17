//1-masala
let son1 = prompt("1-sonni kiriting");
let son2 = prompt("2-sonni kiriting");
let son3 = prompt("3-sonni kiriting");
let son4 = prompt("4-sonni kiriting");

let max = Math.max(son1, son2, son3, son4);

console.log(max);
//2-qisim
let min_son1 = prompt("1-sonni kiriting");
let min_son2 = prompt("2-sonni kiriting");
let min_son3 = prompt("1-sonni kiriting");
let min_son4 = prompt("1-sonni kiriting");

let min = Math.max(min_son1, min_son2, min_son3, min_son4);

console.log(min);
//2-masala
let son3_xona = prompt("Uch xonali son kiriting");

let xona3 = Math.trunc(son3_xona / 100);
let xona2 = Math.trunc((son3_xona % 100) / 10);
let xona1 = Math.trunc((son3_xona % 100) % 10);

console.log("birlik", xona1);
console.log("o'nlik", xona2);
console.log("yuzlik", xona3);

//3-masala
let son3_xona_ = prompt("Uch xonali son kiriting");

let xona3_ = Math.trunc(son3_xona / 100);
let xona2_ = Math.trunc((son3_xona % 100) / 10);
let xona1_ = Math.trunc((son3_xona % 100) % 10);

let max1 = Math.max(xona1_, xona2_, xona3_);
let min1 = Math.min(xona1_, xona2_, xona3_);

console.log(max);
console.log(min);

//4-masala
let son_random1 = prompt("1-sonni kiriting");
let son_random2 = prompt("2-sonni kiritimg");
let max2 = Math.max(son_random1, son_random2);
let min2 = Math.min(son_random1, son_random2);

let random = Math.trunc(Math.random() * (max2 - min2) + min2);
