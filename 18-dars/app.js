// function Elemets(str) {
//   let str2 = {};
//   for (let i = 0; i <= str.length; i++) {
//     if (str.i) {
//       str2.i = str2.i + 1;
//     } else {
//       str2.i = 1;
//     }
//     return str2;
//   }
// }
// console.log(Elemets("hello"));

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 999,
    category: "Electronics",
    stock: 25,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 899,
    category: "Electronics",
    stock: 18,
  },
  {
    id: 3,
    name: "Nike Air Max",
    price: 120,
    category: "Shoes",
    stock: 40,
  },
  {
    id: 4,
    name: "Adidas Hoodie",
    price: 60,
    category: "Clothing",
    stock: 35,
  },
  {
    id: 5,
    name: "MacBook Air M3",
    price: 1299,
    category: "Electronics",
    stock: 12,
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 45,
    category: "Accessories",
    stock: 50,
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    price: 80,
    category: "Accessories",
    stock: 28,
  },
  {
    id: 8,
    name: "Office Chair",
    price: 150,
    category: "Furniture",
    stock: 15,
  },
  {
    id: 9,
    name: "Smart Watch",
    price: 250,
    category: "Electronics",
    stock: 22,
  },
  {
    id: 10,
    name: "Backpack",
    price: 40,
    category: "Bags",
    stock: 45,
  },
];
function price(arr) {
  let count = arr[0];
  for (let i in arr) {
    if (count.price > arr[i].price) {
      count = arr[i];
    }
  }
  return count;
}
console.log(price(products));
