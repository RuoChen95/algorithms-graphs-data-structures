# algorithms-graphs-data-structures

This is Ruochen Xie's programming assignment of Algorithms online class offered by Stanford University. It's NOT PERFECT and has not benn finished.

IMPORTANT:
1. In week #1, the Kosaraju.js can only deal with smaller input graph and need improvements.
2. In week #4, the hashTable.js can only deal with smaller input array and need improvements.

Courses can be found in [Coursera](https://www.coursera.org/learn/algorithms-graphs-data-structures) which is part II of [specializations of algorithms](https://www.coursera.org/specializations/algorithms).

My programming assignment of Part I of the specialization is [here](https://github.com/RuoChen95/algorithms-divide-conquer).

My credentials: https://www.coursera.org/account/accomplishments/certificate/Q8KEBDEUEV4K

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

## Design of the code
1. Read the data from txt file using fs;
2. Format data;
3. Use specific algorithms to finish problems:
    1. SCC: Kosaraju's Two-Pass Algorithm(* still have some speed problem *)
    2. Shortest-path: Dijkstra's Algorithm
    3. Median Maintenance: Heap Application
    4. 2-SUM problem: Hashing Application(* still have some speed problem *)

## How to run it
1. install node.js
2. cd to the specific directory, read the README.md file
3. using `node [filename]`to run the js file