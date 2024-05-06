import checkSolution from "../checkSolution.js";

const isPowerOfFour = (n = 0) => Number.isInteger(Math.log(n) / Math.log(4));

checkSolution(
    [16, 5, 1],
    [true, false, true],
    isPowerOfFour
);

// https://leetcode.com/problems/power-of-four/description/