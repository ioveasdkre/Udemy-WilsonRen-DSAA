let n = 10;
let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < n; i++) {
  // unshift處理時間較長
  arr.push(10); // O(1)
  arr2.unshift(10); // O(n)
}

console.log(arr);
console.log(arr2);
