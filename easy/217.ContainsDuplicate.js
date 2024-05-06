import checkSolution from "../checkSolution.js";

const containsDuplicate = (nums = []) => {
    const storage = new Set(nums);
    return storage.size !== nums.length;
};

checkSolution(
    [[1, 2, 3, 1], [1, 2, 3, 4], [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
    [true, false, true],
    containsDuplicate
);

// https://leetcode.com/problems/contains-duplicate/description/