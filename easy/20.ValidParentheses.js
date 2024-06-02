import checkSolution from "../checkSolution.js";

const isValid = (s = "") => {
    const stack = [];
    for (let c of s) {
        if (c === "(" || c === "[" || c === "{") {
            stack.push(c);
        } else {
            if (!stack.length ||
                c === ")" && stack[stack.length - 1] !== "(" ||
                c === "]" && stack[stack.length - 1] !== "[" ||
                c === "}" && stack[stack.length - 1] !== "{"
            ) {
                return false;
            }
            stack.pop();
        }
    }
    return !stack.length;
};

checkSolution(
    ["()", "()[]{}", "(]"],
    [true, true, false],
    isValid
);

// https://leetcode.com/problems/valid-parentheses/description/