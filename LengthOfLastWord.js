/**
 * param {string} s
 * return {number}
 */
var lengthOfLastWord = function(s) {
    //trim end whitespace from the string
    s = s.trimEnd();
    //slice string from last space until s.length
    let lastIndex = s.lastIndexOf(' '); // get the index of the last ' ' (space)
    let slice = s.slice(lastIndex + 1, s.length);
    //return slice array length
    return slice.length;
};