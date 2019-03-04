let rs = require("fs");

let data = rs.readFileSync("dijkstraData.txt","utf-8");
// let data = rs.readFileSync("testCase.txt","utf-8");

let array = data.split('\n');

for (let i = 0; i < array.length; i++) {
  array[i] = array[i].split('\t')
}

let inputVertices = array.map(function (n) {
  return parseInt(n[0])
});
let inputEdges = [];
array.forEach(function (n) {
  n.forEach(function (m, index, array) {
    // 数组是引用类型
    let mArray = m.split(',')
    if (index >= 1) {
      inputEdges.push([array[0], mArray[0], mArray[1]])
    }
  })
});
inputEdges = inputEdges.map(function (n) {
  return n.map(function (m) {
    return parseInt(m)
  })
})
console.log('inputVertices', inputVertices)
console.log('inputEdges', inputEdges)

/*
**** Dijkstra's Algorithm ****
*
*/
let X = [];
let A = [];

let s = inputEdges[0][0]

X.push(s);
A[s] = 0;

let edge = [];

function getEdge() {
  for (let i = 0; i < inputEdges.length; i++) {
    if (X.indexOf(inputEdges[i][0]) >= 0 && X.indexOf(inputEdges[i][1]) === -1) {
      return inputEdges[i]
    }
  }
}

while (X.length !== inputVertices.length) {
  edge = getEdge();
  for (let i = 0; i < inputEdges.length; i++) {
    if (X.indexOf(inputEdges[i][0]) >= 0 && X.indexOf(inputEdges[i][1]) === -1) {
      if (A[inputEdges[i][0]] + inputEdges[i][2] < A[edge[0]] + edge[2]) {
        edge = inputEdges[i]
      }
    }
  }
  X.push(edge[1]);
  A[edge[1]] = A[edge[0]] + edge[2];
}

console.log('A', A);

let question = [7,37,59,82,99,115,133,165,188,197];
let answer = []
question.forEach(function(n) {
  answer.push(A[n])
})

console.log(answer.toString())

// heap的实现