import checkSolution from "../checkSolution.js";

const romanToInt = (s = "") => {
    const rom = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    const l = s.length;
    let res = 0;
    let i = 0;

    while (i < l) {
        let cur = rom[s[i]],
            next = rom[s[i + 1]];

        if (i < l - 1 && cur < next) {
            res += next - cur;
            i += 2;
        } else {
            res += cur;
            i++;
        }
    }

    return res;
};

checkSolution(
    ["III", "LVIII", "MCMXCIV"],
    [3, 58, 1994],
    romanToInt
);

// https://leetcode.com/problems/roman-to-integer/description/