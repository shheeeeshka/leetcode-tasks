import checkSolution from "../checkSolution.js";

const intToRoman = (num = 0) => {
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];

    return ths[~~(num / 1000)] + hrns[~~(num % 1000 / 100)] + tens[~~(num % 100 / 10)] + ones[num % 10];
};

checkSolution(
    [3, 58, 1994],
    ["III", "LVIII", "MCMXCIV"],
    intToRoman
);

// https://leetcode.com/problems/integer-to-roman/description/