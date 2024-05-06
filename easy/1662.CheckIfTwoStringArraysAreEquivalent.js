const arrayStringsAreEqual = (w1 = [], w2 = []) => {
    let s1 = "";
    let s2 = "";
    for (let i = 0; i < w1.length; i++) {
        s1 += w1[i];
    }
    for (let i = 0; i < w2.length; i++) {
        s2 += w2[i];
    }
    return s1 === s2;
}

// const arrayStringsAreEqual = (w1 = [], w2 = []) => w1.join('') === w2.join('');

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["a", "cb"], ["a", "bc"]));
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));

// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/