//1-masala
let talaba = prompt("Talabamisiz");
if (talaba == "ha" || talaba == "yes" || talaba == "true") {
  console.log("Skidka bor: 20,000 so'm");
} else {
  console.log("To'liq narx: 40,000 so'm");
}
//2-dars
let ball = prompt("Imtihondagi balingizni kiriting");
let davomatfoiz = prompt("Davomatizi foizini kiriting");
if (ball >= 60 && davomatfoiz >= 80) {
  console.log("O'tdingiz 🎉");
} else {
  console.log("Yiqildingiz ❌");
}
//3-masala
let temperature = 12;
let isRaining = true;
if (temperature < 15 || isRaining) {
  console.log("Kurtka kiying va soyabon oling 🧥☔");
} else {
  console.log("Yengil kiyining 👕");
}
//4-masala
let oylik = prompt("Oylikgizi kiriting");
let kredit_tarixi = prompt("Kreditingizni tarixi yahshimi ?");
if (
  (oylik >= 5000000 && kredit_tarixi == "yaxshi") ||
  kredit_tarixi == "good"
) {
  console.log("Kredit tasdiqlandi 💰");
} else {
  console.log("Rad etildi 🚫");
}
//5-masala
let username = "admin";
let password = "12345";
if (username === "admin" && password === "12345") {
  console.log("Xush kelibsiz! 🎉");
} else {
  console.log("Login yoki parol xato! ❌");
}
//6-masala
let color = "yellow";
switch (color) {
  case "red":
    console.log("To'xtang! 🛑");
    break;
  case "yellow":
    console.log("Tayyorlaning! ⚠️");
    break;
  case "green":
    console.log("Harakatlaning! 🟢");
    break;
  default:
    console.log("Bunday rang yo'q");
}
//7-masala
let baho = prompt("son kiriting");
switch (baho) {
  case "A":
    console.log("Alo! 🌟");
    break;
  case "B":
    console.log("Yaxshi! 👍");
    break;
  case "C":
    console.log("Qoniqarli 😐");
    break;
  case "F":
    console.log("Yiqildingiz 😭");
    break;
  default:
    console.log("Xato baho");
}
//8-masala
let num1 = 12;
let num2 = 4;
let operator = "/";

switch (operator) {
  case "+":
    console.log(`Natija: ${num1 + num2}`);
    break;
  case "-":
    console.log(`Natija: ${num1 - num2}`);
    break;
  case "*":
    console.log(`Natija: ${num1 * num2}`);
    break;
  case "/":
    console.log(`Natija: ${num1 / num2}`);
    break;
  default:
    console.log("Xato operator kiritildi!");
}
//9-masala
let monthNumber = 1;
switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Qish ❄️");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Bahor 🌱");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Yoz ☀️");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Kuz 🍂");
    break;
  default:
    console.log("Xato oy");
}
//10-masala
let day = "yakshanba";
switch (day) {
  case "dushanba":
  case "seshanba":
  case "chorshanba":
  case "payshanba":
  case "juma":
    console.log("Ish kuni 🧑‍💻");
    break;
  case "shanba":
  case "yakshanba":
    console.log("Dam olish kuni 🎉");
    break;
  default:
    console.log("Bunday kun yo'q");
}
