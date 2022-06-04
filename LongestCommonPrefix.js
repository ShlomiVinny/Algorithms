/**
 * param {string[]} strs
 * return {string}
 */
var longestCommonPrefix = function(strs) {
    var lcp = '';
    var lastLcp;   // lastLcp not init, therefore it is undefined
    let str1 = strs[0];   // this is my sample string, which will be used for slicing and comparing to the rest of strs[]
    if (strs.length === 1) return strs[0];   // guard clause - if strs only has 1 member return that member
    for (let i = 0; i < str1.length; i++) {   // iterate over strs[] with the length of str1 to check all characters of str1
        if (strs[i] === '') return '';   // if strs[] has an empty string in it, return an empty string
        let slice = str1.slice(0, i + 1);   // this is the slice from the 1st string of strs[] that is being tested against the other strings, it grows by 1 char every time the slice passes all checks
        for (let j = 0; j < strs.length - 1; j++) { // since im using the 1st string from strs[] as my sample, im reducing it out of the pool, thus this loop should only run 'strs.length-1' times
            let str2 = strs[j + 1]; // this is the string being compared with slice, again since i already used str1, i can skip it during the compares, thus values should start from index strs[j+1], as str1 = strs[j=0]
            if (str2 !== undefined && str2.startsWith(slice)) { // if str2 is not undefined and it strats with the slice:
                lcp = slice; // set lcp to equal slice
                continue; // continue to skip over the rest of the code and itterate once more
            }
            if (lastLcp) return lastLcp; // if lastLcp was set, return it
            return ''; // otherwise, return an empty string
        }
        lastLcp = lcp; // set lastLcp to lcp only if all checks passed
    }
    return lcp; // if all went well and both loops finished with no exceptions, return lcp
};
