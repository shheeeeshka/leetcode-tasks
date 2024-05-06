import checkSolution from "../checkSolution.js";

const checkIfPangram = (sentence = "") => {
    const characters = new Set();
    let i = 0;

    while (i < sentence.length) {
        const char = sentence[i];
        characters.add(sentence[i]);
        i++;
    }
    return characters.size === 26;
};

checkSolution(
    ["thequickbrownfoxjumpsoverthelazydog", "leetcode"],
    [true, false],
    checkIfPangram
);

// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/