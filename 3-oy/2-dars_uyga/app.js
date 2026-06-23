const theme = document.querySelector("#theme");
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");
const close = document.querySelector("#close");

theme.onclick = () => {
  document.body.classList.toggle("dark");
};

menuBtn.onclick = () => {
  menu.classList.add("show");
};

close.onclick = () => {
  menu.classList.remove("show");
};
