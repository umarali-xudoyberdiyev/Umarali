let id = window.location.href.split("=").at(-1);
const detealEl = document.querySelector(".detail-section");
import { countries } from "./data.js";
console.log(typeof id);
console.log(countries);

let findEl = countries.find((item) => item.id == id);
console.log(findEl);

function UdateDetail(country) {
  detealEl.innerHTML = `
  <div class="container detail-container">
          <div class="detail-img">
            <img src="${findEl.flag}" alt="flag" />
          </div>

          <div class="detail-intro">
            <div class="desc-top">
              <div class="desc-r">
                <h1>${findEl.name}</h1>
                <p>Native name:<span>${findEl.nativeName}</span></p>
                <p>Population:<span>${findEl.population}</span></p>
                <p>Region:<span>${findEl.region}</span></p>
                <p>Sub Region:<span>${findEl.subRegion}</span></p>
                <p>Capital:<span>${findEl.capital}</span></p>
              </div>
              <div class="desc-l">
                <p>Top Level Domain:<span>${findEl.topLevelDomain}</span></p>
                <p>Currencies:<span>${findEl.currencies}</span></p>
                <p>Languages:<span>${findEl.languages}</span></p>
              </div>
            </div>

            <div class="desc-bottom">
              <p>Border Countries:</p>
              <span>France</span>
              <span>German</span>
              <span>Uzbek</span>
            </div>
          </div>
        </div>`;
}
