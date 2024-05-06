const getCommon = (nums1 = [], nums2 = []) => {
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return -1;
};

console.log(getCommon([1, 2, 3], [2, 4]));
console.log(getCommon([1, 2, 3, 6], [2, 3, 4, 5]));

// https://leetcode.com/problems/minimum-common-value/description/