import { countries } from "./data.js";

const detailEl = document.querySelector(".detail-section");

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const country = countries.find((item) => item.id == id);

function UpdateDetail(item) {
  detailEl.innerHTML = `

<div class="container detail-container">

<div class="detail-img">

<img 
src="${item.flag}" 
alt="flag">

</div>

<div class="detail-intro">

<div class="desc-top">

<div class="desc-r">

<h1>${item.name}</h1>

<p>
Native name:
<span>
${item.nativeName}
</span>
</p>

<p>
Population:
<span>
${item.population.toLocaleString()}
</span>
</p>

<p>
Region:
<span>
${item.region}
</span>
</p>

<p>
Sub Region:
<span>
${item.subRegion}
</span>
</p>

<p>
Capital:
<span>
${item.capital}
</span>
</p>

</div>

<div class="desc-l">

<p>
Top Level Domain:
<span>
${item.topLevelDomain}
</span>
</p>

<p>
Currencies:
<span>
${item.currencies.join(", ")}
</span>
</p>

<p>
Languages:
<span>
${item.languages.join(", ")}
</span>
</p>

</div>

</div>

<div class="desc-bottom">

<p>
Border Countries:
</p>

${
  item.borderCountries.length
    ? item.borderCountries
        .map(
          (country) =>
            `
<span>${country}</span>
`,
        )
        .join("")
    : "<span>No borders</span>"
}



</div>



</div>


</div>


`;
}

if (country) {
  UpdateDetail(country);
}
