// breadth-first search

let rs = require("fs");

let data = rs.readFileSync("SCC.txt","utf-8");

let G = data.split('\n');

for (let i = 0; i < G.length; i++) {
  G[i] = G[i].split(' ').map(function (n, index) {
    return parseInt(n)
  })
}

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
  let n = 9
  for (let i = n; i >= 1; i--) {
    // 如果顶点i没有被搜索过的话
    if (exposedVertex.indexOf(i) == -1) {
      s = i
      // console.log('s', s)
      // 从最大的开始遍历
      DFS(G, i)
    }
  }
}

// 将Grev设立为所有有向边的相反
let Grev = G.map(function(element) {
  return [element[1],element[0]]
})

// console.log('G:', G)
// console.log('Grev:', Grev)
// 在图Grev中运行深度算法循环
DFS_loop(Grev)

let newG = G.map(function(n) {
  return [formationList[n[0]], formationList[n[1]]]
})



// console.log(G)
// console.log('formation', formationList)
// console.log(newG)


exposedVertex = []
DFS_loop(newG)
console.log(leaderArray.sort())