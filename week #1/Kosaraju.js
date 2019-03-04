let rs = require("fs");

// let data = rs.readFileSync("SCC.txt","utf-8");

let data = rs.readFileSync("SCC_small.txt","utf-8");

let G = data.split('\n');

for (let i = 0; i < G.length; i++) {
  G[i] = G[i].split(' ').map(function (n, index) {
    return parseInt(n)
  })
}


let pivotArray = [];
for (let i = 0; i < G.length; i ++) {
  if (pivotArray.indexOf(G[i][0]) == -1) {
    pivotArray.push(G[i][0])
  }
  if (pivotArray.indexOf(G[i][1]) == -1) {
    pivotArray.push(G[i][1])
  }
}

let exposedVertex = [];
let orderList = [];
let formationList = []; // 这个顶点所处在的时间序列

let leaderArray = [];

function DFS(G, i) {
  exposedVertex.push(i);

  leaderArray[i] = s;

  for (let n = 0; n < G.length; n++) {
    if (G[n][0] == i) {
      if (exposedVertex.indexOf(G[n][1]) == -1) {
        DFS(G, G[n][1])
      } else {
        orderList.push(G[n][0])
      }
    }
  }
  t++;
  formationList[i] = t;
}

// 已经遍历了多少个顶点，计数用
let t = 0;
// 我的理解：进入的顶点
let s = 0;
function DFS_loop(G) {
  // 总共顶点的数量
  let n = pivotArray.sort((a, b) => a - b)[pivotArray.length-1];
  for (let i = n; i >= 1; i--) {
    // 如果顶点i没有被搜索过的话
    if (exposedVertex.indexOf(i) == -1) {
      s = i;
      DFS(G, i)
    }
  }
}


/*
**** Kosaraju's Two-Pass Algorithm ****

1. Let Grev = G with all arcs reversed
2. Run DFS-Loop on Grev, computing magical ordering of nodes
3. Run DFS-Loop on G which is ordered
*/

let Grev = G.map(function(element) {
  return [element[1],element[0]]
});

DFS_loop(Grev);

let newG = G.map(function(n) {
  return [formationList[n[0]], formationList[n[1]]]
});
exposedVertex = [];
DFS_loop(newG);


let results = [];
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
});
console.log('In graph of SCC_small, the sizes of the five largest SCCs is:')
console.log(results.sort((a, b) => a - b).reverse().toString());