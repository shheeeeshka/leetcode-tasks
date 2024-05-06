const countSubarrays = (nums = [], minK = 0, maxK = 0) => {
    let minKI = -1;
    let maxKI = -1;
    let culprI = -1;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK)
            culprI = i;

        if (nums[i] === minK)
            minKI = i;

        if (nums[i] === maxK)
            maxKI = i;

        const smaller = Math.min(maxKI, minKI);
        const t = smaller - culprI;

        res += t <= 0 ? 0 : t;
    }
    return res;
};

console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5));
console.log(countSubarrays([1, 1, 1, 1], 1, 1));

// https://leetcode.com/problems/count-subarrays-with-fixed-bounds/description/