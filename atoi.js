/**05/13/2022 02:33	Accepted	91 ms	45.6 MB	javascript
 * 
 * Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
 * 
 * param {string} s
 * return {number}
 */
var myAtoi = function(s) {
    s = s.trimStart(); // Step 1: remove/ignore whitespace at the start of the input string
    
    let digits = {}; // create an empty digits object
    
    for (let i = 0; i < 10; i++) { // create a dictionary of {'n':n} of all the digits from 0-9
        
        let a = new String(i); // make a new String object with <i> as the value
        
        digits[a.valueOf()] = i;
        // the call: Object[String: [key]] looks for a key that matches the passed string, if it doesnt find any, it makes a new object entry
        // with the passed string as the key and i as the value which translates to {'i': i} for all the number from 0-9
    }

    let last = false; // indicates the last itteration
    let answer = 0; // answer: Number
    let intSign = ''; // integer sign, if the sign is either '+' or there is no sign, return a positive integer

    for (let i = 0; i < s.length; i++) { // looop through s
        let char = s.charAt(i); // get the char at index i
        if (char === '-' && i === 0 || char === '+' && i === 0) { // Step 2: if the first char is a sign, keep it
            intSign = char;
            continue;
        }
        
        if (digits[s.charAt(i + 1)] === undefined || i === s.length - 1) { // Step 3
            // if the next char is not a digit or its the last index, this is the last itteration
            last = true;
        }
        
        // Step 4
        if (digits[char] !== undefined) { // if the char is a digit, return its value from the dictionary 
            answer = answer + digits[char]; // add the char value: Number to answer: Number
        } else { // if the char is not a digit, break
            break;
        }
        if (!last) { // if this is not the last itteration, multiply answer by 10 and continue
            answer = answer * 10;
            continue;
        }
        break; // otherwise if it is the last itteration, break
    }

    if (intSign === '-') answer = answer * -1; // if the sign is '-' we need to sign answer accordingly

    // Step 5
    let lowerLimit = Math.pow(2, 31) * -1; // the rest is pretty self explanatory
    let upperLimit = Math.pow(2, 31) - 1;
    if (answer <= lowerLimit) return lowerLimit;
    if (answer >= upperLimit) return upperLimit;

    if (lowerLimit <= answer <= upperLimit) return answer;
};
