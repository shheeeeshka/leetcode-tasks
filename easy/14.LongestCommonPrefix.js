import checkSolution from "../checkSolution.js";

const longestCommonPrefix = (strs = [""]) => {
    let ans = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(ans) !== 0) {
            ans = ans.substring(0, ans.length - 1);
            if (ans === "") return "";
        }
    }
    return ans;
};

checkSolution(
    [["flower", "flow", "flight"], ["dog", "racecar", "car"]],
    ["fl", ""],
    longestCommonPrefix
);

// https://leetcode.com/problems/longest-common-prefix/description/