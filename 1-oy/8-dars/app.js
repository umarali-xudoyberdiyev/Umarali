//1-mashiq
let tomon1 = +prompt("1-tomonni kiriting");
let tomon2 = +prompt("2-tomonni kiriting");
let S_tortburchak = tomon1 * tomon2;
let P_tortburchak = 2 * (tomon1 + tomon2);
console.log("To'rtburchak yuzasi:", S_tortburchak);
console.log("To'rtburchak perimetri:", P_tortburchak);
//2-mashiq
let diametr = +prompt("Doiraning diametrini kiriting");
let PI = 3.14;
let r = diametr / 2;
let L = PI * diametr;
let S_doira = PI * r ** 2;
console.log("Doira uzunligi:", L);
console.log("Doira yuzasi:", S_doira);
//3-mashiq
let tomon = +prompt("Kubning tomonini kiriting");
let V_kub = tomon ** 3;
let S_kub = 6 * tomon ** 2;
console.log("Kub hajmi:", V_kub);
console.log("Kub yuzasi:", S_kub);
//4-mashiq
let a_tomon = +prompt("A tomonini kiriting");
let b_tomon = +prompt("B tomonini kiriting");
let c_tomon = +prompt("C tomonini kiriting");
let V_parallelepiped = a_tomon * b_tomon * c_tomon;
let S_parallelepiped =
  2 * (a_tomon * b_tomon + a_tomon * c_tomon + b_tomon * c_tomon);
console.log("Parallelepiped hajmi:", V_parallelepiped);
console.log("Parallelepiped yuzasi:", S_parallelepiped);
//5-mashiq
let son1 = +prompt("1-sonni kiriting");
let son2 = +prompt("2-sonni kiriting");
let M = (son1 + son2) / 2;
console.log("Ikkala sonning o'rta arifmetigi:", M);
//6-mashiq
let N1 = +prompt(
  "Kun boshidan beri necha sekund o'tdi? 60 dan katta son yozing:",
);
let minut1 = Math.floor(N1 / 60);
console.log("Kun boshidan boshlab ", minut1, " minut o'tdi");
//7-mashiq
let N2 = +prompt(
  "Kun boshidan beri necha sekund o'tdi? 3600 dan katta son yozing:",
);
let soat1 = Math.floor(N2 / 3600);
console.log("Kun boshidan boshlab:", soat1, "soat o'tdi");
//8-mashiq
let N3 = +prompt(
  "Kun boshidan beri necha sekund o'tdi? 3600 dan katta son yozing:",
);
let soat2 = Math.floor(N3 / 3600);
let minut2 = Math.floor((N3 % 3600) / 60);
let sekund1 = N3 % 60;
console.log(
  "Kun boshidan boshlab:",
  soat2,
  "soat",
  minut2,
  "minut",
  sekund1,
  "sekund o'tdi",
);
//9-mashiq
let N4 = +prompt(
  "Kun boshidan beri necha sekund o'tdi? 3600 dan katta son yozing:",
);
let soat3 = Math.floor(N4 / 3600);
let sekund2 = N4 % 3600;
console.log("Kun boshidan boshlab:", soat3, "soat va", sekund2, "sekund o'tdi");
//10-mashiq
let con1 = +prompt("Sonni kiriting");
if (con1 % 2 === 0) {
  console.log("Son juft");
} else {
  console.log("Son toq");
}
//11-mashiq
let con2 = +prompt("Sonni kiriting");
if (con2 > 0) {
  console.log("Son musbat");
} else if (con2 < 0) {
  console.log("Son manfiy");
} else {
  console.log("Son nolga teng");
}
//12-mashiq
let age = +prompt("Yoshingizni kiriting");
if (age >= 18) {
  console.log("Sizga mumkin");
} else {
  console.log("18 ga kirsen kelasan");
}
//13-mashiq
let shokolad = +prompt("Nechi kg shokolad kerak? 1 kg shokolad 10000 so'm");
let konfet = +prompt("Nechi kg konfet kerak? 1 kg konfet 5000 so'm");
let kg_shokolad = shokolad * 10000;
let kg_konfet = konfet * 5000;
let shokolad_va_konfet = kg_shokolad + kg_konfet;
console.log("Shokolad narxi:", kg_shokolad, "so'm");
console.log("Konfet narxi:", kg_konfet, "so'm");
console.log("Jami narx:", shokolad_va_konfet, "so'm");
//14-mashiq
let olma = +prompt("Nechi kg olma kerak? 1 kg olma = 10000 so'm");
let nok = +prompt("Nechi kg nok kerak? 1 kg nok = 5000 so'm");
let kg_olma = olma * 10000;
let kg_nok = nok * 5000;
let olma_va_nok = kg_olma + kg_nok;
console.log("Olma narxi:", kg_olma, "so'm");
console.log("Nok narxi:", kg_nok, "so'm");
console.log("Jami narx:", olma_va_nok, "so'm");
