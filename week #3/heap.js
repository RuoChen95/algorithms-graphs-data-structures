let rs = require("fs");
var Heap = require('heap');

let data = rs.readFileSync("Median.txt","utf-8");
let array = data.split('\r\n');
// let data = rs.readFileSync("testCase.txt","utf-8");
// let array = data.split('\n');

array = array.map(function (n) {
  return parseInt(n)
});


/*
**** Heap Application: Median Maintenence ****

1. maintain heaps heapLow and heapHigh
2. maintain invariant that i/2 smallest(largest) elements in heapLow and heapHigh(*)
3. choose median number from heapLow's max number of heapHigh's min number
*/
let heapLow = new Heap(function(a, b) {
  return b - a;
});

let heapHigh = new Heap();

function addNum(inputNum) {
  if (inputNum < heapLow.peek()) {
    heapLow.push(inputNum);
  } else {
    heapHigh.push(inputNum);
  }
}

function rebalance() {
  if (heapLow.size() - heapHigh.size() > 1) {
    heapHigh.push(heapLow.pop())


  } else if (heapHigh.size() - heapLow.size() > 1) {
    heapLow.push(heapHigh.pop())
  }
}

function findMedian() {
  if (heapHigh.size() - heapLow.size() >= 1) {
    return heapHigh.peek()
  } else {
    return heapLow.peek()
  }
}

let results = array[0];

if (array[1] < array[0]) {
  heapLow.push(array[1]);
  heapHigh.push(array[0]);
  results += array[1]
} else {
  heapLow.push(array[0]);
  heapHigh.push(array[1]);
  results += array[0];
}

// console.log('first two sum:', results);

array.forEach(function(n, index) {
  if (index > 1) {
    addNum(n);
    if (heapLow.size() - heapHigh.size() > 1 || heapHigh.size() - heapLow.size() > 1) {
      rebalance();
    }

    // console.log('media', findMedian())
    results += findMedian();
  }
});


// console.log(heapLow.toArray());
// console.log(heapHigh.toArray());
console.log('In data of Median.txt, sum of these medians, modulo 10000 is: ');
console.log(results % 10000);