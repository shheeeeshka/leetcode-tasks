import checkSolution from "../checkSolution.js";

const isPalindrome = (x) => {
    if (x < 0) return false;
    if (x === 0) return true;

    const s = x.toString();

    let i = 0,
        j = s.length - 1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};

checkSolution(
    [121, -121, 10],
    [true, false, false],
    isPalindrome
);

// https://leetcode.com/problems/palindrome-number/description/