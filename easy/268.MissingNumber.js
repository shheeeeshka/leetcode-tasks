import checkSolution from "../checkSolution.js";

const missingNumber = (nums = []) => {
    const n = nums.length;
    const tSum = (n * (n + 1)) / 2;
    const actSum = nums.reduce((acc, num) => acc + num, 0);
    return tSum - actSum;
};

checkSolution(
    [[3, 0, 1], [0, 1], [9, 6, 4, 2, 3, 5, 7, 0, 1]],
    [2, 2, 8],
    missingNumber
);

// https://leetcode.com/problems/missing-number/description/