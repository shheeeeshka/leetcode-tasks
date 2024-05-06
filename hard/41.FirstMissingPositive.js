import checkSolution from "../checkSolution.js";

const firstMissingPositive = (nums = []) => {
    const numSet = new Set(nums.filter(n => n > 0));
    let candidate = 1;
    while (numSet.has(candidate)) candidate++;
    return candidate;
};

checkSolution(
    [[1, 2, 0], [3, 4, -1, 1], [7, 8, 9, 11, 12]],
    [3, 2, 1],
    firstMissingPositive
);

// https://leetcode.com/problems/first-missing-positive/description/