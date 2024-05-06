import checkSolution from "../checkSolution.js";

const isPowerOfTwo = (n = 0) => {
    if (n <= 0) return 0;
    return (n & (n - 1)) === 0;
}

/**
 * 1
 * 00001 & 
 * 00000
 * -----
 * 00000 - true
 * 
 * 16
 * 10000 & 
 * 01111
 * -----
 * 00000 - true
 * 
 * 3
 * 00011 & 
 * 00010
 * -----
 * 00010 - false
 */

checkSolution(
    [1, 16, 3],
    [true, true, false],
    isPowerOfTwo
);

// https://leetcode.com/problems/power-of-two/description/