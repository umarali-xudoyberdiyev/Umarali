const wrapper = document.querySelector(".wrapper");
const count = document.querySelector(".count");

let cart = 0;

function updateUI(arr) {
  wrapper.innerHTML = "";

  arr.forEach((item) => {
    wrapper.innerHTML += `
      <div class="card">
        <img src="${item.thumbnail}">
        <h3>${item.title}</h3>
        <p>$${item.price}</p>
        <button onclick="buy()">Buy</button>
      </div>
    `;
  });
}

function buy() {
  cart++;
  count.textContent = cart;
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => updateUI(data));
