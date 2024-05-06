const strWithout3a3b = (a = 0, b = 0) => {
    let str = "";
    while (a > 0 && b > 0) {
        if (a === b) {
            str += "ab";
            a--;
            b--;
        } else if (a > b) {
            str += "aab";
            a -= 2;
            b--;
        } else {
            str += "bba";
            a--;
            b -= 2;
        }
    }
    if (a > 0) str += 'a'.repeat(a); else if (b > 0) str += 'b'.repeat(b);
    return str;
};

console.log(strWithout3a3b(1, 2));
console.log(strWithout3a3b(4, 1));

// https://leetcode.com/problems/string-without-aaa-or-bbb/description/