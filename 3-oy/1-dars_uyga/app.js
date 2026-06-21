const heddingEl = document.querySelector(".heading");
const btn = document.querySelector("#show-modal-btn");
const savol = document.querySelector(".quiz-card");
const togri = document.querySelector(".result-card");
const JArr = document.querySelector(".result-cardArr");
const JNum = document.querySelector(".result-cardNum");
const JNO = document.querySelector(".result-cardNO");

function toggleModal() {
  btn.classList.toggle("hidden");
  savol.classList.toggle("hidden");
}

function TogriJavob() {
  togri.classList.toggle("hidden");
  savol.classList.toggle("hidden");
}

function J_Arr() {
  savol.classList.toggle("hidden");
  JArr.classList.toggle("hidden");
}

function J_Num() {
  savol.classList.toggle("hidden");
  JNum.classList.toggle("hidden");
}

function J_NO() {
  savol.classList.toggle("hidden");
  JNO.classList.toggle("hidden");
}
