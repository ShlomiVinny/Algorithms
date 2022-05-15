/**
 * 04/27/2022 17:41	Accepted	114 ms	43.5 MB	javascript
 * 
 * param {number[]} nums
 * param {number} val
 * return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    // itterate over the array and every value that equals val will be spliced and reappended
    for (let i = 0; i < nums.length;) {
        let num = nums[i];
        if (num === val) {
            nums.push(nums.splice(i, 1));
            k++;
            console.log(num, val, i, nums.length, k)
            continue;
        }
        i++;
    }
    return nums.length - k;
};