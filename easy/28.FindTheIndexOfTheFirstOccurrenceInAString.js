const strStr = (haystack = "", needle = "") => {
    return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("hello", "ll"));
console.log(strStr("a", "a"));
console.log(strStr("abc", "c"));

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/