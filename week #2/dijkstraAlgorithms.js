let rs = require("fs");

// let data = rs.readFileSync("dijkstraData.txt","utf-8");
let data = rs.readFileSync("testCase.txt","utf-8");

let V = data.split('\n');

for (let i = 0; i < V.length; i++) {
  V[i] = V[i].split('\t').filter(n => {
    if (n !== '\r') return n
  }).map(n => {
    return n.split(',').map(n => {
      return parseInt(n)
    })
  })
}

V.unshift(undefined)

let X = [];
let A = [undefined, 0];

X.push(V[1]);

let w = undefined

X.forEach(function(n) {
  let v = n[0][0];

  let wIndex = 1;
  let w = n[wIndex][0];

  let l_vw = A[v] + n[1][1];
  n.forEach(function(m, index) {
    if (index >= 2) {
      if (l_vw > A[v] + getLength(m)) {
        l_vw = A[v] + getLength(m);
        wIndex = index
      }
    }
  })


  // console.log(l_vw)
  // console.log(wIndex)

  w = n[wIndex][0]
  A[w] = A[v] + l_vw
})

X.push(V[w])
// console.log(X)
// console.log(A)


X.forEach(function(n) {
  console.log(n)

  let v = n[0][0]

  let l_vw = A[v] + n[1][1]

  console.log(l_vw)
})


function getLength(n) {
  return n[1]
}