/**
 * param {string} s
 * return {number}
 */
var romanToInt = function(s) {
    const Values = { // a dictionary for the values of single and double char numerals
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    }
    
    let currChar; // keep track of the current char
    let nextChar; // keep track of the next char
    let sum = 0; 
    let addToSum = (char) => { // add to sum function, adds new values to the total sum
        sum = sum + Values[char]; // sum equals to itself, plus whatever value that character represents, which is stored in the Values dictionary
    }

    for (let i = 0; i < s.length; i++) { // itterate over String s 
        currChar = s.charAt(i);
        // this would be the current character being tested
        
        nextChar = s.charAt(i + 1);
        // this would be the following character to be tested
        
        let dblChar = currChar + nextChar;
        // concatenate both characters together to create a double character
        
        if (Values[dblChar]) { // check wether the double character is present in Values as a [key]
            addToSum(dblChar); // if it does, add it to sum
            i++;               // and add another index to compensate for the extra character
            continue;          // skip over the rest of the code and itterate once more
        }
        addToSum(currChar);    // if all else fails, it means this char should be treated as a single and added to the sum
    }
    return sum;  // once loop terminates without exceptions, the function would return sum
};
