import fs from "fs";

const levels = {
    e: "easy",
    m: "medium",
    h: "hard"
}

const taskName = "43. Multiply Strings";
const funcName = "multiply";
const level = levels["m"];
const taskUrl = "https://leetcode.com/problems/multiply-strings/description/";

const defaultContent = `import checkSolution from "../checkSolution.js";

const ${funcName} = () => {
    return;
};

checkSolution(
    [c1, c2],
    [a1, a2],
    ${funcName}
);

// ${taskUrl}`;

const fileName = taskName
    .split(" ")
    .map((w, i) => i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
    .trim();

fs.promises
    .writeFile(`./${level}/${fileName}.js`, defaultContent)
    .then(() => console.log(`Task ${fileName} successfully added\nLevel: ${level}\nHappy coding!!`))
    .catch(e => console.error(e));