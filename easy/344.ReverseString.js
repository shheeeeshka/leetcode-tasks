import checkSolution from "../checkSolution.js";

const reverseString = (arr = []) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const t = arr[left];
        arr[left] = arr[right];
        arr[right] = t;
        left++;
        right--;
    }

    return arr;
};

checkSolution(
    [["h", "e", "l", "l", "o"], ["H", "a", "n", "n", "a", "h"]],
    [["o", "l", "l", "e", "h"], ["h", "a", "n", "n", "a", "H"]],
    reverseString
);

// https://leetcode.com/problems/reverse-string/description/