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
console.log(inputVertices)
console.log(inputEdges)

/*
**** Dijkstra's Algorithm ****
*
*/