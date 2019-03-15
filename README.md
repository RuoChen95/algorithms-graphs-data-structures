# algorithms-graphs-data-structures

This is Ruochen Xie's programming assignment of Algorithms online class offered by Stanford University. It's NOT PERFECT and has not benn finished.

IMPORTANT:
1. In week #1, the Kosaraju.js can only deal with smaller input graph and need improvements.
2. In week #4, the hashTable.js can only deal with smaller input array and need improvements.

Courses can be found in [Coursera](https://www.coursera.org/learn/algorithms-graphs-data-structures) which is part II of [specializations of algorithms](https://www.coursera.org/specializations/algorithms).

My programming assignment of Part I of the specialization is [here](https://github.com/RuoChen95/algorithms-divide-conquer).

## Course list

- Week 5:
  - 10: Graph Search and Connectivity
- Week 6:
  - 11: Dijkstra's Shortest-Path Algorithm
- Week 7:
  - 12: Heaps
  - 13: balanced binary search trees
- Week 8:
  - 14: Hashing: the Basics
  - 15: Universal Hashing
  - 16: Bloom Filters
  
## Example of output
```
// in week #1 directory
$ node Kosaraju.js
In graph of SCC_small, the sizes of the five largest SCCs is:
6,3,2,1

// in week #2 directory
$ node dijkstraAlgorithms.js
In graph of djData.txt, the shortest-path distances from 1 to 7,37,59,82,99,115,133,165,188,197 is: 
2599,2610,2947,2052,2367,2399,2029,2442,2505,3068

// in week #3 directory
$ npm install heap
$ node heap.js
In data of Median.txt, sum of these medians, modulo 10000 is: 
1213

// in week #4 directory
the number of sum between -10000 to 10000 is: (not repeat)
427
```

## Design of the code
1. Read the data from txt file using fs;
2. Format data;
3. Use specific algorithms to finish problems:
    1. Kosaraju's Two-Pass Algorithm
    2. Dijkstra's Algorithm
    3. Heap Application: Median Maintenence
    4. Hashing (* still have some speed problem *)

## How to run it
1. install node.js
2. cd to the specific directory, read the README.md file
3. using `node [filename]`to run the js file