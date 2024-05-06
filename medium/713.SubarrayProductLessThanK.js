const numSubarrayProductLessThanK = (nums = [], k = 0) => {
    if (k <= 1) return 0;

    let left = 0, right = 0, product = 1, count = 0;
    const n = nums.length;

    while (right < n) {
        product *= nums[right];
        while (product >= k)
            product /= nums[left++];
        count += 1 + (right - left);
        right++;
    }

    return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));

// https://leetcode.com/problems/subarray-product-less-than-k/description/