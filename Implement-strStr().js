/**
 * 04/27/2022 18:07	Accepted	100 ms	42 MB	javascript
 * 
 * param {string} haystack
 * param {string} needle
 * return {number}
 */
var strStr = function(haystack, needle) {
    //guard clause - if needle is empty, return 0
    if (needle === '') { return 0; }

    let index = -1; // init index as -1 and return it if all checks fail
    let needleLen = needle.length;
    for (let i = 0; i < haystack.length;) { // itterate over the haystack, char by char and slice a sample needle.length long
        let substring = haystack.slice(i, i + needleLen); // this is the substring to be compared to the needle
        if (substring !== needle) { // if the substring does not equal to needle:
            i++; // itterate over the next char
            continue; // skip the rest of the code block and itterate once more
        }
        index = i; // if all else fails, that means that the substring is equal to the needle, therefore we should return the substrings first index, which is i, thus index = i
        break; // once we have a match we can break the loop and return the result
    }
    return index; // returns index as i if the needle is found in the haystack, and -1 if it was not
};