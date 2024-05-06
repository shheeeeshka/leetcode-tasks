import checkSolution from "../checkSolution.js";

const findDuplicate = (nums = []) => {
    const memo = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (memo.has(nums[i])) {
            return nums[i];
        }
        memo.add(nums[i]);
    }
};

checkSolution(
    [[1, 3, 4, 2, 2], [3, 1, 3, 4, 2], [3, 3, 3, 3, 3]],
    [2, 3, 3],
    findDuplicate
);

// https://leetcode.com/problems/find-the-duplicate-number/description/