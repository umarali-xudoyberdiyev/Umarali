let darkBtn = document.querySelector(".dark");

let lightBtn = document.querySelector(".light");

let mode = localStorage.getItem("mode") || null;

if (mode === "dark") {
  document.body.classList.add("dark_mode");
} else {
  document.body.classList.remove("light_mode");
}

darkBtn.addEventListener("click", () => {
  document.body.classList.add("dark_mode");
  document.body.classList.remove("light_mode");

  localStorage.setItem("mode", "dark");
});

lightBtn.addEventListener("click", () => {
  document.body.classList.remove("dark_mode");
  document.body.classList.add("light_mode");
  localStorage.setItem("mode", "light");
});
