const findMedianSortedArrays = (n1 = [], n2 = []) => {
    let n = n1.concat(n2);
    const l = n.length;
    n.sort((a, b) => a - b);
    return l % 2 === 0 ? (n[l / 2 - 1] + n[l / 2]) / 2 : n[(l - 1) / 2];
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));

// https://leetcode.com/problems/median-of-two-sorted-arrays/description/