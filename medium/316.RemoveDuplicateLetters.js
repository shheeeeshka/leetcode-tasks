import checkSolution from "../checkSolution.js";

const removeDuplicateLetters = (s = "") => {
    const stack = [];
    const seen = new Set();

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!seen.has(c)) {
            while (stack.length > 0 && stack[stack.length - 1] > c && s.indexOf(stack[stack.length - 1], i) > i) {
                seen.delete(stack.pop());
            }
            seen.add(c);
            stack.push(c);
        }
    }
    return stack.join("");
};

checkSolution(
    ["bcabc", "cbacdcbc"],
    ["abc", "acdb"],
    removeDuplicateLetters
);

// https://leetcode.com/problems/remove-duplicate-letters/description/