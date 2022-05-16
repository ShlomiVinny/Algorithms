/**
 * param {number[]} nums
 * param {number} target
 * return {number[]}
 */
var twoSum = function(nums, target) {
    let val;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                val = nums[i] + nums[j];
            }
            if (val === target) {
                return [i, j];
                continue;
            }
        }
    }
};
