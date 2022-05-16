/**
 * 04/27/2022 17:41	Accepted	114 ms	43.5 MB	javascript
 * 
 * param {number[]} nums
 * param {number} val
 * return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // keep a seperate count for how many values matched <val>
    // itterate over the array and every value that equals val will be spliced and reappended
    for (let i = 0; i < nums.length;) { // loop through nums[] 
        let num = nums[i];
        if (num === val) { // if the values match
            nums.push(nums.splice(i, 1)); // splice it and append to the end of nums[]
            k++; // match count grow
            continue; // if a value is found we want to splice it which means it cuts that array member out,
            // therefore <i> has to stay the same, since we shifted some of the values in the array, starting from our match to the end, one index to the left
        }
        i++; // if no match was found, keep iterating over the array
    }
    return nums.length - k; // return the length of nums[] minus the number of matches <k>
};
