// breadth-first search

let rs = require("fs");

let data = rs.readFileSync("bfs.txt","utf-8");

let array = data.split('\n');

for (let i = 0; i < array.length; i++) {
  array[i] = array[i].split(' ').map(function (n, index) {
    return parseInt(n)
  })
}

console.log(array)


let exposedVertex = []

function DFS(G, s) {
  // 将s标记为已经探索过的顶点
  exposedVertex.push(s)
  for (let i = 0; i < array.length; i++) {
    // 对于所有的边(s, v)
    if (array[i][0] == s) {
      // 如果顶点v没有被搜索过的话
      if (exposedVertex.indexOf(array[i][1]) == -1) {
        // 递归
        DFS(G, array[i][1])
      }
    }
  }
}

DFS(array, 1)

console.log(exposedVertex)