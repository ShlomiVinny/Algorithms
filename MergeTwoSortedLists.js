/**
 * 04/24/2022 17:40	Accepted	119 ms	44.6 MB	javascript
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * param {ListNode} list1
 * param {ListNode} list2
 * return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) { // if the lists are empty, return null or one of the empty lists
        return list1;
    }

    let arr = []; // this is the array that will accept all the values from both lists
    
    function compareNumbers(a, b) { // compare function to use with Array.sort() as a callback function
        return a - b;  // this will sort the array in an ascending order
    }

    function listToArr(list) { // function to turn a singly linked lists into an array
        while (list) {
            let val = list.val; // get a value
            arr.push(val); // push it into arr[]
            list = list.next; // jump to the next node
        }
    }

    function arrToLinkedList(arr) { // function to turn an array into a singly linked list
        let val = arr.shift(); // get the first value from the array, shift is destructive
        let list = new ListNode(val); // make a new list and init it with the first value from arr[]
        let currNode = list; 
        while (arr.length > 0) { // while the array is not empty
            let node = new ListNode(); // make a new node
            node.val = arr.shift(); // assign a value to the new node, again the first value from arr[]
            currNode.next = node; // link the node to the list
            currNode = node; // make the new node (which is also the last one in the list) the current node
        }
        return list;
    }
    // function calls:
    listToArr(list1);
    listToArr(list2);
    arr.sort(compareNumbers);
    return arrToLinkedList(arr);
};
