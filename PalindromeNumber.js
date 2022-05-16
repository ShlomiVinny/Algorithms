/**
 * param {number} x
 * return {boolean}
 */
var isPalindrome = function(x) {
    if (Math.sign(x) === -1) return false;
    // guard clause - Math.sign return -1 for negative numbers, if the number is negative, its not a palindrome
    
    if (x < 10) return true;
    // guard clause - if x is smaller than 10 it is a palindrome, we already know that x cannot be negative, therefore a simple clause would do.
    
    const originalX = x;
    // keep the original x as a const
    
    let reverse = 0;
    // this is the variable that would hold the reverse order of the Number x
    
    while (x > 0) { // while x is bigger than 0
        
        reverse = (reverse * 10) + x % 10;
        // at first reverse = 0, therefore only modulo10(x) is added, and then for every additional itteration reverse is grown by another digit that equals to modulo10(x)
        
        x = (x - (x % 10)) / 10;
        // reduce modulo10(x)=10^0 slot of x, from x to zero out the 10^0 slot, and then remove that 0 by dividing by 10,
        //and thus we have succesfully removed a digit without creating floats or needing to truncate or round or whatever, i <3 Math!
    }
    return originalX === reverse; // if the original Number x and our computed Number reverse are the same, return true, otherwise, return false 
};
