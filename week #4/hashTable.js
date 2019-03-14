let rs = require("fs");
let Ht = require("ht");
let ht = new Ht();

// let data = rs.readFileSync("algo1-programming_prob-2sum.txt","utf-8");
// let array = data.split('\n');
// const t = [-10000, 10000];
let data = rs.readFileSync("testCase.txt","utf-8");
let array = data.split('\n');
const t = [3, 10];

array = array.map(function (n) {
  return parseInt(n)
});

console.log(array.length);

array.forEach(function(n) {
  ht.put(n, [t[0] - n, t[1] - n]);
});


let num = 0;

let sumList = [];

array.forEach(function(n) {
  for (let i = ht.get(n)[0]; i <= ht.get(n)[1]; i++ ) {
    if (ht.contains(i) && sumList.indexOf(n+i) == -1) {


      sumList.push(n + i);
      console.log(n, i);

      num++
    }
  }
})

console.log(sumList);
console.log(num);