let rs = require("fs");

// let data = rs.readFileSync("dijkstraData.txt","utf-8");
let data = rs.readFileSync("testCase.txt","utf-8");

let array = data.split('\n');

for (let i = 0; i < array.length; i++) {
  array[i] = array[i].split('\t')
}

// for (let i = 0; i < V.length; i++) {
//   V[i] = V[i].split('\t').filter(n => {
//     if (n !== '\t') return n
//   }).map(n => {
//     return n.split(',').map(n => {
//       return parseInt(n)
//     })
//   })
// }


console.log('array', array)

let inputVertices = array.map(function (n) {
  return parseInt(n[0])
});
let inputEdges = [];
array.forEach(function (n) {
  n.forEach(function (m, index, array) {
    // 数组是引用类型
    let mArray = m.split(',')
    if (index >= 1 && !inputEdges.some(function (arr) {
      return JSON.stringify(arr) === JSON.stringify([mArray[0], array[0], mArray[1]])
    })) {
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
let proceedVertices = [];
let distanceList = [];
// let pathList = [];

proceedVertices.push(inputEdges[0][0]);
distanceList[inputEdges[0][0]] = 0;

minIndex = 0;

// while (proceedVertices.length !== inputVertices.length) {
  pathList = []
  for (let i = 0; i < inputEdges.length; i++) {
    if (proceedVertices.indexOf(inputEdges[i][0]) != -1 && proceedVertices.indexOf(inputEdges[i][1] == -1)) {
      // pick the one that minimizes the path
      // console.log(distanceList[inputEdges[i][0]])
      // console.log(inputEdges[i][2])
      pathList.push([distanceList[inputEdges[i][0]] + inputEdges[i][2], i])
    }
  }
  // 0: 长度； 1: 相对于inputEdges的编号
  minIndex = pathList.sort(function(a,b) {return a[0] - b[0]})[0][1];
  console.log(minIndex);

  proceedVertices.push(inputEdges[minIndex][1]);
  distanceList[inputEdges[minIndex][1]] = pathList[0][0];

  console.log(proceedVertices);
  console.log(distanceList);
// }