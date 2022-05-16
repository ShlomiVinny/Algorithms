/**05/06/2022 15:04	Accepted	77 ms	42 MB	javascript
 * 
 * param {number[]} digits
 * return {number[]}
 */
var plusOne = function(digits) {
    // get the last digit in the array
    let i = -1; 
    let lastDigit = digits.at(i);
    // index of -1 is equivalent to digits[digits.length - 1]
    // because im going to iterate over the array, member by member starting from the right, i is preferably negative as the indexes were using
    
    while (true) {
        if (lastDigit === 9) { // if the last digit is 9, we need to zero it out and add one to the next digit
            digits[digits.length + i] = 0;
            // add one to the next digit as well
            i--; // reduce the index to get the next digit
            lastDigit = digits.at(i); // set the next digit as last
            continue; // rerun loop 
        }
        else if (lastDigit === undefined) { 
            // if the digit does not exist we get an undef, therefore we must expand the array and add another member at the start (index = 0)
            digits.unshift(0);
            // unshift a 0 which will be turned to a 1 in the next line
        }
        //else if lastDigit is not a 9 and is not undef, just add a 1
        digits[digits.length + i] = digits[digits.length + i] + 1;
        break;
    }
    return digits;
};
