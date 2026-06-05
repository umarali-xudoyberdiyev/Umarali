//1-masala

function yigindi(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(yigindi(5));

//2-masala

function max(a, b, c) {
  return Math.max(a, b, c);
}

console.log(max(7, 17, 20));

//3-masala

function unliHarfSoni(matn) {
  let sanoq = 0;

  let unlilar = "aeiouAEIOU";

  for (let i = 0; i < matn.length; i++) {
    if (unlilar.includes(matn[i])) {
      sanoq++;
    }
  }

  return sanoq;
}

console.log(unliHarfSoni("Assalomu alaykum"));

//4-masala

function boshHarfKatta(matn) {
  let natija = matn[0].toUpperCase() + matn.slice(1).toLowerCase();

  return natija;
}

console.log(boshHarfKatta("salom"));

//5-masala

function son(son) {
  if (son > 0) {
    return son + 1;
  } else if (son < 0) {
    return son - 1;
  } else {
    return 0;
  }
}

console.log(son(-6));

//6-masala

function malumotTuri(malumot) {
  return typeof malumot;
}

console.log(malumotTuri(777));
console.log(malumotTuri("salom"));

//7-masala

function juftToq(son) {
  if (son % 2 === 0) {
    let sum = 0;
    for (let i = 0; i <= son; i++) {
      sum += i;
    }
    return sum;
  } else {
    son *= son;
    return son;
  }
}

console.log(juftToq(4));

//8-masala

function randomSon(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomSon(7, 70));

//9-masala

function palindromeSon(son) {
  let matn = son.toString();

  let teskari = matn.split("").reverse().join("");

  if (matn === teskari) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeSon(121));
console.log(palindromeSon(454));
console.log(palindromeSon(123));

//10-masala

function kvadrat(son) {
  return son ** 2;
}
console.log(kvadrat(7));
