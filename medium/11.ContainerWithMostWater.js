import checkSolution from "../checkSolution.js";

const maxArea = (height = []) => {
    let i = 0,
        j = height.length - 1;
    let maxA = 0;

    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        maxA = Math.max(area, maxA);
        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return maxA;
};

checkSolution(
    [[1, 8, 6, 2, 5, 4, 8, 3, 7], [1, 1], [1, 2, 1]],
    [49, 1, 2],
    maxArea
);

// https://leetcode.com/problems/container-with-most-water/description/