// breadth-first search

let rs = require("fs");

// let data = rs.readFileSync("SCC.txt","utf-8");
// let G = data.split('\n');
let data = rs.readFileSync("testcase_1.txt","utf-8");
let G = data.split('\n\n');

for (let i = 0; i < G.length; i++) {
  G[i] = G[i].split(' ').map(function (n, index) {
    return parseInt(n)
  })
}

let pivotArray = []
for (let i = 0; i < G.length; i ++) {
  if (pivotArray.indexOf(G[i][0]) == -1) {
    pivotArray.push(G[i][0])
  }
  if (pivotArray.indexOf(G[i][1]) == -1) {
    pivotArray.push(G[i][1])
  }
}
console.log('length', pivotArray.length)
console.log('last one', pivotArray.sort((a, b) => a - b)[pivotArray.length-1])

let exposedVertex = []
let orderList = []
let formationList = []

let leaderArray = []

function DFS(G, i) {
  exposedVertex.push(i)

  leaderArray[i] = s

  for (let n = 0; n < G.length; n++) {
    if (G[n][0] == i) {
      if (exposedVertex.indexOf(G[n][1]) == -1) {
        DFS(G, G[n][1])
      } else {
        orderList.push(G[n][0])
      }
    }
  }
  t++
  formationList[i] = t
}

// 已经遍历了多少个顶点，计数用
let t = 0
// 我的理解：进入的顶点
let s = 0
function DFS_loop(G) {
  // 总共顶点的数量
  let n = pivotArray.sort((a, b) => a - b)[pivotArray.length-1]
  for (let i = n; i >= 1; i--) {
    // 如果顶点i没有被搜索过的话
    if (exposedVertex.indexOf(i) == -1) {
      s = i
      DFS(G, i)
    }
  }
}

// 将Grev设立为所有有向边的相反
let Grev = G.map(function(element) {
  return [element[1],element[0]]
})

console.log(1)
DFS_loop(Grev)
console.log(2)

let newG = G.map(function(n) {
  return [formationList[n[0]], formationList[n[1]]]
})

// 数据的初始化
exposedVertex = []
DFS_loop(newG)
let results = []
for (let i = 1; i < leaderArray.length; i++) {
  if(results[leaderArray[i]] == undefined) {
    results[leaderArray[i]] = 1
  } else {
    results[leaderArray[i]]++
  }
}
results = results.filter(function(n) {
  if (typeof n !== 'undefined') {
    return Number(n)
  }
})
console.log(results.sort((a, b) => a - b).reverse())