// For1

console.log("--- For1 Natijasi ---");
let a1 = 3,
  b1 = 8;
let soni1 = 0;
let qator1 = "";

for (let i = a1; i <= b1; i++) {
  qator1 += i + " ";
  soni1++;
}
console.log(`Sonlar: ${qator1.trim()}`);
console.log(`Chiqarilgan sonlar soni: ${soni1} ta`);

// For2

console.log("\n--- For2 Natijasi ---");
let a2 = 3,
  b2 = 8;
let soni2 = 0;
let qator2 = "";

for (let i = b2 - 1; i > a2; i--) {
  qator2 += i + " ";
  soni2++;
}
console.log(`Sonlar: ${qator2.trim()}`);
console.log(`Chiqarilgan sonlar soni: ${soni2} ta`);

// For3

console.log("\n--- For3 Natijasi ---");
let narx3 = 15000.5;

for (let kg = 1; kg <= 10; kg++) {
  console.log(`${kg} kg konfet = ${(kg * narx3).toFixed(2)} so'm`);
}

// For4

console.log("\n--- For4 Natijasi ---");
let narx4 = 20000.0;

for (let i = 12; i <= 20; i += 2) {
  let kg = i / 10;
  console.log(`${kg} kg konfet = ${(kg * narx4).toFixed(2)} so'm`);
}

// For5. a dan b gacha sonlar yig'indisi

console.log("\n--- For5 Natijasi ---");
let a5 = 4,
  b5 = 9;
let yig_indi5 = 0;

for (let i = a5; i <= b5; i++) {
  yig_indi5 += i;
}
console.log(`${a5} dan ${b5} gacha yig'indi: ${yig_indi5}`);

// For6

console.log("\n--- For6 Natijasi ---");
let a6 = 2,
  b6 = 5;
let ko_paytma6 = 1;

for (let i = a6; i <= b6; i++) {
  ko_paytma6 *= i;
}
console.log(`${a6} dan ${b6} gacha ko'paytma: ${ko_paytma6}`);

// For7

console.log("\n--- For7 Natijasi ---");
let a7 = 2,
  b7 = 4;
let yig_indi7 = 0;

for (let i = a7; i <= b7; i++) {
  yig_indi7 += i * i;
}
console.log(`${a7} dan ${b7} gacha kvadratlar yig'indisi: ${yig_indi7}`);

// For8

console.log("\n--- For8 Natijasi ---");
let n8 = 4;
let S8 = 0;

for (let i = 1; i <= n8; i++) {
  S8 += 1 / i;
}
console.log(`Yig'indi S = ${S8.toFixed(4)}`);

// For9

console.log("\n--- For9 Natijasi ---");
let n9 = 3;
let S9 = 1;

for (let i = 1; i <= n9; i++) {
  S9 *= 1 + i / 10;
}
console.log(`Ko'paytma S = ${S9.toFixed(4)}`);

// For10

console.log("\n--- For10 Natijasi ---");
let n10 = 5;
let kvadrat10 = 0;

for (let i = 1; i <= n10; i++) {
  kvadrat10 += 2 * i - 1;
  console.log(`${i} ning kvadrati = ${kvadrat10}`);
}
//===========================================================

// While1

console.log("--- While1 Natijasi ---");
let A1 = 17,
  B1 = 5;

while (A1 >= B1) {
  A1 -= B1;
}
console.log(`A kesmaning bo'sh qismi: ${A1}`);

// While2

console.log("\n--- While2 Natijasi ---");
let A2 = 23,
  B2 = 5;
let sigganKesmalaSoni = 0;

while (A2 >= B2) {
  A2 -= B2;
  sigganKesmalaSoni++;
}
console.log(`B kesmadan ${sigganKesmalaSoni} ta joylashtirish mumkin.`);

/// While3

console.log("\n--- While3 Natijasi ---");
let n3 = 27;
let joriyDaraja = 1;

while (joriyDaraja < n3) {
  joriyDaraja = joriyDaraja + joriyDaraja + joriyDaraja;
}

if (joriyDaraja === n3) {
  console.log(`${n3} — 3-ning darajasi`);
} else {
  console.log(`${n3} — 3-ning darajasi emas`);
}

/// While4

console.log("\n--- While4 Natijasi ---");
let n4 = 19,
  m4 = 5;
let butunQism4 = 0;

while (n4 >= m4) {
  n4 -= m4;
  butunQism4++;
}
console.log(`Butun qismi: ${butunQism4}, Qoldiq qismi: ${n4}`);

// While5
console.log("\n--- While5 Natijasi ---");
let n5 = 4582;
let teskariSon = "";

console.log(`Asl son: ${n5}`);
while (n5 > 0) {
  let qoldiq = n5 % 10; // Oxirgi raqamni olamiz
  teskariSon += qoldiq;
  n5 = Math.floor(n5 / 10); // Sonni 1 xona kichraytiramiz
}
console.log(`Teskari tartibda: ${teskariSon}`);

// While6

console.log("\n--- While6 Natijasi ---");
let n6 = 735;
let yig_indi6 = 0;
let raqamlarSoni = 0;

while (n6 > 0) {
  let raqam = n6 % 10;
  yig_indi6 += raqam;
  raqamlarSoni++;
  n6 = Math.floor(n6 / 10);
}
console.log(`Raqamlar yig'indisi: ${yig_indi6}`);
console.log(`Raqamlar soni: ${raqamlarSoni} ta`);

// While7. Son raqamlari ichida 2 bor-yo'qligini aniqlash

console.log("\n--- White7 Natijasi ---");
let n7 = 84261;
let ikkiBorMi = false;

while (n7 > 0) {
  if (n7 % 10 === 2) {
    ikkiBorMi = true;
    break; // 2 ni topgach, siklni davom ettirish shart emas
  }
  n7 = Math.floor(n7 / 10);
}
console.log(`Raqamlar orasida 2 raqami bor-yo'qligi: ${ikkiBorMi}`);

// While8. Son raqamlari ichida toq raqam bor-yo'qligini aniqlash

console.log("\n--- While8 Natijasi ---");
let n12 = 4683; // 3 - toq son
let toqBorMi = false;

while (n8 > 0) {
  let raqam = n12 % 10;
  if (raqam % 2 !== 0) {
    // Toq son bo'lsa
    toqBorMi = true;
    break;
  }
  n12 = Math.floor(n12 / 10);
}
console.log(`Raqamlar orasida toq raqam bor-yo'qligi: ${toqBorMi}`);

// While9

console.log("\n--- While9 Natijasi ---");
let originalSon = 1345431;
let vaqtinchaSon = originalSon;
let teskari9 = 0;

while (vaqtinchaSon > 0) {
  let raqam = vaqtinchaSon % 10;
  teskari9 = teskari9 * 10 + raqam;
  vaqtinchaSon = Math.floor(vaqtinchaSon / 10);
}

let palindromMi = originalSon === teskari9;
console.log(`Son: ${originalSon} -> Palindrommi: ${palindromMi}`);

// While10

console.log("\n--- While10 Natijasi ---");
let n11 = 29;
let i10 = 2;
let tubMi = true;

if (n11 <= 1) {
  tubMi = false;
}

while (i10 <= Math.sqrt(n10)) {
  if (n11 % i10 === 0) {
    tubMi = false;
    break;
  }
  i10++;
}

if (tubMi) {
  console.log(`${n11} — tub son`);
} else {
  console.log(`${n11} — tub emas (murakkab son)`);
}
