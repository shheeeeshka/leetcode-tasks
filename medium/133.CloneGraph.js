import checkSolution from "../checkSolution.js";

// class Node {
//     constructor(val, neighbors = []) {
//         this.val = val || 0;
//         this.neighbors = neighbors.map(n => new Node(n.val || 0, n.neighbors || []));
//     }
// }

const cloneGraph = (node) => {
    if (node === null) return null;
    let visited = new Map();
    function dfs(node) {
        if (visited.has(node)) return visited.get(node);
        let clone = new Node(node.val);
        visited.set(node, clone);
        for (let neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }
    return dfs(node);
};

checkSolution(
    [[[2, 4], [1, 3], [2, 4], [1, 3]], [[]], []],
    [[[2, 4], [1, 3], [2, 4], [1, 3]], [[]], []],
    cloneGraph
);

// !! doesn't work locally !! only in leetcode's compiler !!
// https://leetcode.com/problems/clone-graph/description/