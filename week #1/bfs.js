// breadth-first search

let rs = require("fs");

let data = rs.readFileSync("course.txt","utf-8");

let G = data.split('\n');

for (let i = 0; i < G.length; i++) {
  G[i] = G[i].split(' ').map(function (n, index) {
    return parseInt(n)
  })
}

let exposedVertex = []
let leader = {}

let leadArray = []

function DFS(G, i) {
  console.log(i)
  // 将i标记为已经探索过的顶点
  exposedVertex.push(i)

  // 表明i可以从s获得
  set_learder(i, s);

  for (let n = 0; n < G.length; n++) {
    // 对于所有的边(i, v)
    if (G[n][0] == i) {
      // 如果顶点v没有被搜索过的话
      if (exposedVertex.indexOf(G[i][1]) == -1) {
        console.log(G[i])
        // 递归
        DFS(G, G[i][1])
      }
    }
  }
  // t++;
  // G[i][0] = t;
}

function set_learder(i, s) {
  leadArray.push([i, s])
}

// 已经遍历了多少个顶点
let t = 0
// 上一个顶点?
let s = null
function DFS_loop(G) {
  // 总共顶点的数量
  let n = 9
  for (let i = n; i >= 1; i--) {
    // 如果顶点i没有被搜索过的话
    if (exposedVertex.indexOf(i) == -1) {
      s = i
      // console.log(s)
      // 从最大的开始遍历
      DFS(G, i)
    }
  }
}

// 将Grev设立为所有有向边的相反
// let Grev = G.map(function(element) {
//   return [element[1],element[0]]
// })

let Grev = G
// console.log('G:', G)
console.log('Grev:', Grev)
// 在图Grev中运行深度算法循环
DFS_loop(Grev)

// exposedVertex = []
// // 在图G中运行深度算法循环
// DFS_loop(G)

console.log(exposedVertex)
// console.log(leadArray)