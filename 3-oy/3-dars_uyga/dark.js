let BtnEl = document.querySelector(".mode_btn");
let inputEl = document.querySelector(".search_Input");
let searchEl = document.querySelector(".select_option");
let logoEl = document.querySelector(".logo");
let BtnEl2 = document.querySelector("#mode_btn_2");
let header = document.querySelector("header");
let cauntry = document.querySelector(".cauntry");

BtnEl.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
  logoEl.classList.toggle("dark_input");
  searchEl.classList.toggle("dark_input");
  inputEl.classList.toggle("dark_input");
  BtnEl.classList.toggle("header_color");
  header.classList.toggle("header_color");
  cauntry.classList.toggle("header_color");
});

// BtnEl.addEventListener("doubleclick", () => {
//   document.body.classList.remove("dark_mode");
//   document.body.classList.add("light_mode");
//   logoEl.classList.remove("dark_input");
//   searchEl.classList.remove("dark_input");
//   inputEl.classList.remove("dark_input");
//   BtnEl.classList.remove("hidden");
//   BtnEl2.classList.remove("dark_input");
//   header.classList.add("header_color_light");
//   BtnEl2.classList.remove("hidden");
// });
