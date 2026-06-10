//100-masala
function poyi(str) {
  let arr = str.split("*");
  let tag = arr[0];
  let son = Number(arr[1]);

  return `<${tag}></${tag}>`.repeat(son);
}

console.log(poyi("div*2")); // <div></div><div></div>
console.log(poyi("p*1")); // <p></p>
console.log(poyi("li*3")); // <li></li><li></li><li></li>
//101-masala
function yigindi(son) {
  let yigindi = 0;
  for (let i = 0; i <= son; i++) {
    yigindi += i;
  }
  return yigindi;
}

console.log(yigindi(10)); //55
console.log(yigindi(7)); //28
//102-masala
function namuna(son, obyekt) {
  return son >= obyekt.min && son <= obyekt.max;
}

console.log(namuna(4, { min: 0, max: 5 })); // true
console.log(namuna(4, { min: 4, max: 5 })); // true
console.log(namuna(4, { min: 6, max: 10 })); // false
//103-masala
function OxiridaBarmi(son) {
  let sonstr = son.toString();
  let son2 = (son * son).toString();
  if (sonstr == son2.slice(son2.length - 1)) {
    return true;
  } else {
    return false;
  }
}

console.log(OxiridaBarmi(1)); //true
console.log(OxiridaBarmi(3)); //false
console.log(OxiridaBarmi(6)); //true
//104-masala
function yigindilar(arr) {
  let arryigindi = [];
  for (let i = 0; i < arr.length; i++) {
    arryigindi.push(arr[i] + i);
  }
  return arryigindi;
}

console.log(yigindilar([0, 0, 0, 0, 0])); //[0, 1, 2, 3, 4]
console.log(yigindilar([1, 2, 3, 4, 5])); //[1, 3, 5, 7, 9]
console.log(yigindilar([5, 4, 3, 2, 1])); //[5, 5, 5, 5, 5]
//105-masala
function ShakrYoq(arr) {
  let shakaryoq = [];
  if (arr.includes("water")) {
    shakaryoq.push("water");
  }
  if (arr.includes("lemonade")) {
    shakaryoq.push("lemonade");
  }
  if (arr.includes("beer")) {
    shakaryoq.push("beer");
  }
  return shakaryoq;
}

console.log(ShakrYoq(["fanta", "cola", "water"])); //["water"]
console.log(ShakrYoq(["fanta", "cola"])); //[]
console.log(ShakrYoq(["lemonade", "beer", "water"])); //(["lemonade", "beer", "water"])
//106-masala
function NechtaSon(son) {
  son.toString();
  return son.lengis;
}

console.log(NechtaSon(123)); ///3
console.log(NechtaSon(56)); //2
console.log(NechtaSon(7154)); //4
console.log(NechtaSon(61217311514)); //11
console.log(NechtaSon(0)); //(0)
//107-masala
function engKattaSon(son) {
  return Number(
    String(son)
      .split("")
      .sort((a, b) => b - a)
      .join(""),
  );
}

console.log(engKattaSon(123)); // 321
console.log(engKattaSon("001")); // 100
console.log(engKattaSon(999)); // 999
console.log(engKattaSon(784)); // 874
//108-masala
function randomSon(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomSon(5, 9)); // 5, 6, 7, 8 yoki 9
//109-masala
function narissistik(son) {
  let raqamlar = String(son).split("");
  let daraja = raqamlar.length;

  let yigindi = raqamlar.reduce((sum, raqam) => {
    return sum + Math.pow(Number(raqam), daraja);
  }, 0);

  return yigindi === son;
}

console.log(narissistik(153)); // true
console.log(narissistik(370)); // true
console.log(narissistik(1652)); // false
//110-masala
function kattaHarflarSoni(str) {
  let count = 0;

  for (let harf of str) {
    if (harf >= "A" && harf <= "Z") {
      count++;
    }
  }

  return count;
}

console.log(kattaHarflarSoni("fvLzpxmgXSDrobbgMVrc")); // 6
console.log(kattaHarflarSoni("JMZWCneOTFLWYwBWxyFw")); // 14
