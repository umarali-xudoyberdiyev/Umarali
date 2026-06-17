//1-masala
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let juft = nums.filter((x) => x % 2 == 0);
console.log(juft);
//2-masala
let AllNums = nums.reduce((a, b) => a + b);
console.log(AllNums); //55
//3-masala
let KvNums = nums.map((y) => y * y);
console.log(KvNums);
