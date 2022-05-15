/**
 * param {number[]} nums
 * param {number} target
 * return {number}
 */
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target); // get the index of the first element that matches <target>
    if (index !== -1) return index;
    nums.push(target);
    nums.sort((a, b) => { return a - b });
    return nums.indexOf(target);
};