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
    if (list1 === null && list2 === null) {
        return list1;
    }

    let arr = [];

    function compareNumbers(a, b) {
        return a - b;
    }

    function listToArr(list) {
        while (list) {
            let val = list.val;
            arr.push(val);
            list = list.next;
        }
    }

    function arrToLinkedList(arr) {
        let val = arr.shift();
        let list = new ListNode(val);
        let currNode = list;
        while (arr.length > 0) {
            let node = new ListNode();
            node.val = arr.shift();
            currNode.next = node;
            currNode = node;
        }
        return list;
    }

    listToArr(list1);
    listToArr(list2);
    arr.sort(compareNumbers);
    return arrToLinkedList(arr);
};