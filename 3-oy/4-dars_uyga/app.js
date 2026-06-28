import { countries } from "./data.js";

const wrapperEl = document.querySelector(".flags-conteiner");
const inputEl = document.querySelector(".search_Input");
const selectEl = document.querySelector(".select_option");

window.goDetail = function (id) {
  window.location.href = `./deteil.html?id=${id}`;
};

function UpdateUi(arr) {
  wrapperEl.innerHTML = "";

  arr.forEach((item) => {
    const { id, name, population, region, capital, flag } = item;

    wrapperEl.innerHTML += `


<div class="cauntry" onclick="goDetail(${id})">


<img src="${flag}">


<div class="country-intro">


<h2>${name}</h2>


<p>
Population:
<span>
${population.toLocaleString()}
</span>
</p>


<p>
Region:
<span>${region}</span>
</p>


<p>
Capital:
<span>${capital}</span>
</p>



</div>


</div>


`;
  });
}

UpdateUi(countries);

inputEl.addEventListener("input", (e) => {
  let value = e.target.value;

  let result = countries.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase()),
  );

  UpdateUi(result);
});

selectEl.addEventListener("change", (e) => {
  let value = e.target.value;

  if (value == "All") {
    UpdateUi(countries);
  } else {
    let result = countries.filter((item) => item.region == value);

    UpdateUi(result);
  }
});
