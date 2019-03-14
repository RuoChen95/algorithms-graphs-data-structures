let rs = require("fs");
let Ht = require("ht");
let ht = new Ht();

let data = rs.readFileSync("algo1-programming_prob-2sum.txt","utf-8");
let array = data.split('\n');
const t = [-10000, 10000];
// let data = rs.readFileSync("testCase.txt","utf-8");
// let array = data.split('\n');
// const t = [3, 10];

array = array.map(function (n) {
  return parseInt(n)
});

console.log(array.length);

theArray = array.sort(function(a, b) {
  return a - b
});

console.log(theArray[0] + theArray[theArray.length - 1])

// Coded by Mykhailo Dorokhin
// source: https://www.coursera.org/learn/algorithms-graphs-data-structures/discussions/weeks/4/threads/oDdtZLcSEeaYHgpNzSKpMA#8569149~wQ9FD3b0EeaahA7WQe-h_w~DiRIqsb3EeeaSxJ_5wiJJg-post-legend
let theSums = [];
let theLo = 0;
let theHi = theArray.length - 1;
let T = 10000;
while (theHi > theLo) {
  if (theArray[theHi] + theArray[theLo] > T) {
    theHi--;
    continue;
  }
  if (theArray[theHi] + theArray[theLo] < -T) {
    theLo++;
    continue;
  }
  if (theArray[theHi] == theArray[theLo]) {
    break;
  }
  let theInLo = theLo;
  let sum = theArray[theInLo] + theArray[theHi];
  while (sum >= -T && sum <= T) {
    if (theSums.indexOf(sum) == -1) { // changed! ** not repeat
      theSums.push(sum);
    }
    theInLo++;
    if (theArray[theHi] == theArray[theLo]) {
      break;
    }
    sum = theArray[theInLo] + theArray[theHi];
  }
  theHi--;
}

console.log('the number of sum between -10000 to 10000 is: (** not repeat)');
console.log(theSums.length);