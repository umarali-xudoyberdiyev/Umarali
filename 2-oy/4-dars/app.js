//1-masala
function toSlug(text) {
  return text.toLowerCase().trim().replace(" ", "-");
}
console.log(toSlug("  Hello World  "));
console.log(toSlug("JavaScript Basics!!!"));
//2-masala
function normalizeSpaces(text) {
  return text.trim().replace(/\s+/g, " ");
}

console.log(normalizeSpaces("  salom   dunyo  "));
console.log(normalizeSpaces("React \n \t JS"));
//3-masala
function isAnagram(word1, word2) {
  let tozaWord1 = word1.toLowerCase();
  let tozaWord2 = word2.toLowerCase();

  let saralangan1 = tozaWord1.split("").sort().join("");

  let saralangan2 = tozaWord2.split("").sort().join("");

  return saralangan1 === saralangan2;
}

console.log(isAnagram("Earth", "Heart")); // true
console.log(isAnagram("olma", "malo")); // true
console.log(isAnagram("Frontend", "React")); // false
//4-masala
function maskEnd(str, visibleCount) {
  if (visibleCount >= str.length) {
    return str;
  }

  let oxirgiQismi = str.slice(-visibleCount);

  return oxirgiQismi.padStart(str.length, "*");
}

console.log(maskEnd("8600123412341234", 4));
console.log(maskEnd("998901234567", 2));
console.log(maskEnd("123", 5));
//5-masala
function getInitials(fullName) {
  let tozaMatn = fullName.trim().toUpperCase();

  if (tozaMatn === "") {
    return "";
  }

  let sozlari = tozaMatn.split(" ").filter((soz) => soz !== "");

  if (sozlari.length === 1) {
    return sozlari[0][0];
  }

  return sozlari[0][0] + sozlari[1][0];
}

console.log(getInitials("asadbek abdulhamidov"));
console.log(getInitials("  nazira  "));
console.log(getInitials("xudoyberdiyev umarali"));
