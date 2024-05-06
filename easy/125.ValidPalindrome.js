import checkSolution from "../checkSolution.js";

const isPalindrome = (s = "") => {
    const str = s.replace(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
};

checkSolution(
    ["A man, a plan, a canal: Panama", "race a car", " "],
    [true, false, true],
    isPalindrome
);

// https://leetcode.com/problems/valid-palindrome/description/