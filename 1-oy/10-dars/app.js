let vovels = "aeiou";

let str = "najot talim talabalari";

let undosh = 0;

for (let i = 1; i < str.length; i++) {
  if (!vovels.includes(str[i])) {
    undosh++;
  }
}
console.log(undosh);
