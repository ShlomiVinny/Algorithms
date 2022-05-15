/**
 * param {string} s
 * return {boolean}
 */
var isValid = function(s) {
    if (s.length < 2) { return false; } // gaurd clause - if the length of s is smaller than 2 just return false
    const Values = { // this is the dictionary for the parentheses, each closing parenthes is the [key] while the openning parenthes are the [value]
        ")": "(",
        "]": "[",
        "}": "{",
    }
    let stack = []; // this will be out stack, since js doesnt implement a Stack object, i'll just use an array and only use the correct methods that fit a stack, as: push() and pop() to keep the First In - First Out nature of a stack
    let isValid = true; // init isValid as true and set it to false during runtime
    for (let i = 0; i < s.length; i++) { // loop to itterate over String s
        let char = s.charAt(i);
        let contains = Values.hasOwnProperty(char); // this function checks if Values has char as a [key]
        if (!contains) { // if char is not a [key] in Values:
            stack.push(char); // push char into the stack
        } else if (stack.length > 0) { // otherwise, if the stack still contains something:
            let last = stack.pop(); // pop the last value out of the stack, and
            if (Values[char] !== last) { // if the [value] that meats the [key] in Values, does not equal to the last value from the stack:
                isValid = false; // then this string is not valid, set isValid to false
                break; // break out of the loop
            }
        } else if (contains && stack.length === 0) { // otherwise, if the parenthes is a [key] in Values and the stack is empty, then theres no matching parenthes for it:
            isValid = false; // set isValid to false
            break; // break out of the loop
        }
    }
    return isValid && stack.length === 0; // if all went well and isValid is true and the stack is empty, return true
};
// written by Shlomo Yagolnitser and Jonathan Shlomo