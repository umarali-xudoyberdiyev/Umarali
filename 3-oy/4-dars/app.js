import { countries } from "./data.js";

const wrapperEl = document.querySelector(".flags-conteiner");
const inputEl = document.querySelector(".search_Input");
const selectEl = document.querySelector(".select_option");

window.goDetail = function (id) {
  console.log(id);

  window.location.href = `http://127.0.0.1:5501/detail.html?=${id}`;
};

function UpdeteUi(arr) {
  wrapperEl.innerHTML = "";
  arr.forEach((item) => {
    const { name, population, region, capital, flag } = item;
    wrapperEl.innerHTML += `
    <div class="cauntry">
    <button><img src="${flag}" alt=""></img></button>
            <div class="country-intro">
              <h2>${name}</h2>
              <p>Population: <span>${population}</span></p>
              <p>Region: <span>${region}</span></p>
              <p>Capital: <span>${capital}</span></p>
            </div>
          </div>
          `;
  });
}

UpdeteUi(countries);

inputEl.addEventListener("input", (e) => {
  let inputVal = e.target.value;
  let newCountries = countries.filter((item) => {
    if (item.name.toLowerCase().includes(inputVal.toLowerCase())) {
      return item;
    }
  });
  UpdeteUi(newCountries);
});

selectEl.addEventListener("change", (e) => {
  let selectVal = e.target.value;

  if (selectEl == "All") {
    UpdeteUi(countries);
  } else {
    let newCountries = countries.filter((item) => {
      if (item.region.toLowerCase().includes(selectVal.toLowerCase())) {
        return item;
      }
    });
  }
  UpdeteUi(newCountries);
});
