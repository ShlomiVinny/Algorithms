/**05/14/2022 19:49	Accepted	170 ms	49.6 MB	javascript
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * param {ListNode} l1
 * param {ListNode} l2
 * return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // The way im gonna go about it is read the lists into a string, since number of nodes is [1,100], we cant rely on Math operations to handle that size of number
    // therefore, i will parse the chars one by one and do all the arithmetic on numbers, or single digits rather
    // once done, stringify the result and pass it to a function that will turn the string into a Sorted List

    function listToStr(l) { // turn a sorted list into a String
        let str = '';
        while (l) {
            let val = l.val;
            str = str + l.val;
            l = l.next;
        }
        return str;
    }

    function sumNumStrings(str1, str2) { // sum the strings, parsing and stringifying
        let sum = '';
        let maxLen = Math.max(str1.length, str2.length); // initialize maxLen 
        let last = false;
        let addOne = false;
        while (maxLen > 0) {
            if (maxLen === 1) last = true;
            let val1 = Number.parseInt(str1.charAt()); // get the first char of str1
            str1 = str1.substring(1); // cut the first char out of str1
            let val2 = Number.parseInt(str2.charAt());
            str2 = str2.substring(1);
            let midSum = 0;
            // parsing an empty string returns NaN, therefore we must be careful of it because Number+NaN = NaN,
            if (Number.isNaN(val1)) midSum = val2; // if val1 is NaN, use only val2, since we are guaranteed to have at least 1 char at all times.
            if (Number.isNaN(val2)) midSum = val1; // same same, but different...
            if (!Number.isNaN(val1) && !Number.isNaN(val2)) midSum = val1 + val2; // exclusively check wether val1 or val2 are NOT NaN! To be extra careful.
            if (addOne) { // if the prev midSum was >= 10, then we must add 1 to the current sum
                addOne = false;
                midSum = midSum + 1;
            }
            let digit = midSum % 10; // this is the result of the sumation as a singles digit
            sum = sum + digit.toString(); // stringify the result of the sumation
            if (midSum >= 10) addOne = true; // if midSum is >=10 add 1 on the next iteration
            if (last && addOne) sum = sum + '1'; // if its the last itteration and midSum >= 10, we must add the whole number this time, since there wont be a next iteration
            maxLen = Math.max(str1.length, str2.length); // recalculate maxLen
        }
        return sum;
    }

    function strToList(str) { // a function that turns strings into a sorted list
        let char = str.charAt(); // get the first char
        str = str.substring(1); // cut out the first char from the string
        let list = new ListNode(Number.parseInt(char)); // create a new ListNode with char parsed as a number
        let currNode = list;
        while (str !== '') { // as long as the string is not empty, continue
            let char = str.charAt(); // same as before
            str = str.substring(1);
            let node = new ListNode(Number.parseInt(char));
            currNode.next = node; // link the current node to the new node
            currNode = currNode.next;
        }
        return list;
    }

    // function calls:
    let l1str = listToStr(l1);
    let l2str = listToStr(l2);
    let sum = sumNumStrings(l1str, l2str);
    return strToList(sum);
};