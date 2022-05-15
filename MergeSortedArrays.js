/**05/13/2022 22:17	Accepted	72 ms	42.5 MB	javascript
 * 
 * param {number[]} nums1
 * param {number} m
 * param {number[]} nums2
 * param {number} n
 * return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // iterate over nums2, pop() a value and unshift() a value from nums2
    for (let i = 0; i < n; i++) {
        nums1.pop();
        nums1.unshift(nums2[i]);
    }

    function compare(a, b) {
        return a - b;
    }
    return nums1.sort(compare);
};