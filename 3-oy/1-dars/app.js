const heddingEl = document.querySelector(".heading");
const modalEl = document.querySelector(".modal");
const btn = document.querySelector("#show-modal-btn");
const bir = document.querySelector(".bosqichbir");

function toggleModal() {
  modalEl.classList.toggle("hidden");
  btn.classList.toggle("hidden");
}
function bosqichBir() {
  bir.classList.remove("hidden");
}
