// //75-masala
// function turlar(arr) {
//   let NewArr = [];
//   for (let i of arr) {
//     NewArr.push(typeof i);
//   }
//   return NewArr;
// }

// console.log(turlar([1, 2, "null", []]));
// //76-masala
// function qaytarString(str, miqdor) {
//   if (typeof str !== "string") {
//     return "String kiriting";
//   }
//   return str.repeat(miqdor);
// }

// console.log(qaytarString("Mubashir", 2));
// console.log(qaytarString("Matt", 3));
// console.log(qaytarString(1990, 7));
// //77-masala
// function koplik(str) {
//   if (str.slice(-3) === "lar") {
//     return true;
//   }
//   return false;
// }

// console.log(koplik("daraxtlar"));
// console.log(koplik("meva"));
// //78-masala
// function boshOxiri(str) {
//   return str[0] + str[str.length - 1];
// }

// console.log(boshOxiri("qwerty"));
// //79-masala
// function sozAytish(word) {
//   let NewWord = word.slice(0, 2) + "... " + word.slice(0, 2) + "... ";
//   return NewWord + word;
// }

// console.log(sozAytish("incredible"));
// //80-masala
// function ahvol(str) {
//   if (str === "") {
//     return "Today, I am feeling neutral";
//   }
//   return "Today, I am feeling " + str;
// }

// console.log(ahvol("happy"));
// console.log(ahvol(""));
// //81-masala
// function bogin(word) {
//   let count = 0;
//   for (let i of word) {
//     if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(bogin("Hehehehehehe")); //6
// //82-masala
// console.log("Ustoz 82 chi masalani tushunmadim");
// //83-masala
// function tengmi(soz1, soz2) {
//   if (soz1.toLowerCase() === soz2.toLowerCase()) {
//     return true;
//   }
//   return false;
// }

// console.log(tengmi("hello", "hELLo")); //true
// console.log(tengmi("motive", "emotive")); //false
// //84-masala
// function belgiSoni(word) {
//   let count = 0;
//   for (let i of word) {
//     count++;
//   }
//   return count;
// }
// console.log(belgiSoni("Hello World")); //11
// //85-masala
// function endCorona(tuzalganlar, yangikasallar, kasallar) {
//   return Math.ceil(kasallar / (tuzalganlar - yangikasallar));
// }

// console.log(endCorona(4000, 2000, 77000)); //39
// //86-masala
// function kopaytir_2(arr) {
//   let NewArr = [];
//   for (let i of arr) {
//     NewArr.push(i * 2);
//   }
//   return NewArr;
// }

// console.log(kopaytir_2([2, 5, 3])); //[4, 10, 6]
// //87-masala
// function wordLengths(words) {
//   let lengths = [];
//   for (let i of words) {
//     lengths.push(i.length);
//   }
//   return lengths;
// }
// console.log(wordLengths(["hello", "world"])); // [5, 5]
// //88-masala
// function taksi(masofa) {
//   masofa = masofa - 4000;
//   let narx = masofa / 1000 + 1;
//   return narx;
// }

// console.log(taksi(7000)); //4
// //89-masala
// function dlar(matn) {
//   let sanoq = 0;

//   matn = matn.toLowerCase();

//   for (let i = 0; i < matn.length; i++) {
//     if (matn[i] === "d") {
//       sanoq++;
//     }
//   }

//   return sanoq;
// }

// console.log(dlar("My friend Dylan got distracted in school.")); // 4
// console.log(dlar("Debris was scattered all over the yard.")); // 3
// console.log(dlar("The rodents hibernated in their den.")); // 3
// //90-masala
// function boshJoy(str) {
//   return str.split("").join(" ");
// }

// console.log(boshJoy("space")); // "s p a c e"
// //91-masala
// function Namuna(a, b) {
//   for (let son = Math.max(a, b) + 1; ; son++) {
//     if (son % b === 0) {
//       return son;
//     }
//   }
// }

// console.log(Namuna(17, 8)); // 24
// console.log(Namuna(98, 3)); // 99
// console.log(Namuna(14, 11)); // 22
// //92-masala
// function kofesoni(kofe) {
//   kofe = Math.trunc(kofe / 3) + kofe;
//   return kofe;
// }

// console.log(kofesoni(4)); // 5
// console.log(kofesoni(10)); // 13
// console.log(kofesoni(200)); // 266
// //93-masala
// function SozMarta(soz, marta) {
//   let ohirgiHarf = soz.slice(-1);
//   return soz + ohirgiHarf.repeat(marta - 1);
// }

// console.log(SozMarta("Hello", 3));
// //94-masala
// function BeshKatta(arr) {
//   let ArrYigindi = 0;
//   for (let i of arr) {
//     if (i > 5) {
//       ArrYigindi += i;
//     }
//   }
//   return ArrYigindi;
// }

// console.log(BeshKatta([1, 5, 20, 30, 4, 9, 18])); //77
// console.log(BeshKatta([1, 2, 3, 4])); //0
// //95-masala
// function yigindi(arr) {
//   let yigindi = 0;
//   for (let i of arr) {
//     yigindi += i;
//   }
//   return yigindi;
// }
// console.log(yigindi([2, 7, 4])); //13
// console.log(yigindi([45, 3, 0])); //48
// console.log(yigindi([-2, 84, 23])); //105
// //96-masala
// function Namuna2(path) {
//   let arr = path.split("/");
//   return arr[arr.length - 1];
// }

// console.log(Namuna2("C:/Projects/pil_tests/ascii/edabit.txt"));
// // edabit.txt

// console.log(Namuna2("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
// // Beethoven_5.mp3

// console.log(Namuna2("ffprobe.exe"));
// // ffprobe.exe
// //97-masala
// function yigindiPlus(arr) {
//   let yigindiplus = 0;
//   for (let i of arr) {
//     yigindiplus += i;
//   }
//   return Math.abs(yigindiplus);
// }

// console.log(yigindiPlus([2, 4, 2, 5]));
// console.log(yigindiPlus([-1, -4, -3, -2]));
// console.log(yigindiPlus([3, 4, -5, -2]));
// //98-masala
// function uchburchak(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     return true;
//   }
//   return false;
// }

// console.log(uchburchak(2, 3, 4)); // true
// console.log(uchburchak(3, 4, 5)); // true
// console.log(uchburchak(4, 3, 8)); // false
// //99-masala
// function Oraliq(a, b) {
//   let arr = [];

//   for (let i = a + 1; i < b; i++) {
//     arr.push(i);
//   }

//   return arr;
// }

// console.log(Oraliq(2, 4)); // [3]
// console.log(Oraliq(5, 9)); // [6, 7, 8]
// console.log(Oraliq(2, 11)); // [3, 4, 5, 6, 7, 8, 9, 10]
// //100-masala
// function poyi(str) {
//   let arr = str.split("*");
//   let tag = arr[0];
//   let son = Number(arr[1]);

//   return `<${tag}></${tag}>`.repeat(son);
// }

// console.log(poyi("div*2")); // <div></div><div></div>
// console.log(poyi("p*1")); // <p></p>
// console.log(poyi("li*3")); // <li></li><li></li><li></li>
// //101-masala
// function yigindi(son) {
//   let yigindi = 0;
//   for (let i = 0; i <= son; i++) {
//     yigindi += i;
//   }
//   return yigindi;
// }

// console.log(yigindi(10)); //55
// console.log(yigindi(7)); //28
// //102-masala
// function namuna(son, obyekt) {
//   return son >= obyekt.min && son <= obyekt.max;
// }

// console.log(namuna(4, { min: 0, max: 5 })); // true
// console.log(namuna(4, { min: 4, max: 5 })); // true
// console.log(namuna(4, { min: 6, max: 10 })); // false
// //103-masala
// function OxiridaBarmi(son) {
//   let sonstr = son.toString();
//   let son2 = (son * son).toString();
//   if (sonstr == son2.slice(son2.length - 1)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(OxiridaBarmi(1)); //true
// console.log(OxiridaBarmi(3)); //false
// console.log(OxiridaBarmi(6)); //true
// //104-masala
// function yigindilar(arr) {
//   let arryigindi = [];
//   for (let i = 0; i < arr.length; i++) {
//     arryigindi.push(arr[i] + i);
//   }
//   return arryigindi;
// }

// console.log(yigindilar([0, 0, 0, 0, 0])); //[0, 1, 2, 3, 4]
// console.log(yigindilar([1, 2, 3, 4, 5])); //[1, 3, 5, 7, 9]
// console.log(yigindilar([5, 4, 3, 2, 1])); //[5, 5, 5, 5, 5]
// //105-masala
// function ShakrYoq(arr) {
//   let shakaryoq = [];
//   if (arr.includes("water")) {
//     shakaryoq.push("water");
//   }
//   if (arr.includes("lemonade")) {
//     shakaryoq.push("lemonade");
//   }
//   if (arr.includes("beer")) {
//     shakaryoq.push("beer");
//   }
//   return shakaryoq;
// }

// console.log(ShakrYoq(["fanta", "cola", "water"])); //["water"]
// console.log(ShakrYoq(["fanta", "cola"])); //[]
// console.log(ShakrYoq(["lemonade", "beer", "water"])); //(["lemonade", "beer", "water"])
// //106-masala
// function NechtaSon(son) {
//   son.toString();
//   return son.lengis;
// }

// console.log(NechtaSon(123)); ///3
// console.log(NechtaSon(56)); //2
// console.log(NechtaSon(7154)); //4
// console.log(NechtaSon(61217311514)); //11
// console.log(NechtaSon(0)); //(0)
// //107-masala
// function engKattaSon(son) {
//   return Number(
//     String(son)
//       .split("")
//       .sort((a, b) => b - a)
//       .join(""),
//   );
// }

// console.log(engKattaSon(123)); // 321
// console.log(engKattaSon("001")); // 100
// console.log(engKattaSon(999)); // 999
// console.log(engKattaSon(784)); // 874
// //108-masala
// function randomSon(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomSon(5, 9)); // 5, 6, 7, 8 yoki 9
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
