/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * param {ListNode} head
 * return {ListNode}
 */

var deleteDuplicates = function(head) {
    if (!head) return head; // if head is null, the list is empty, return itself
    let list = head;
    let newList = new ListNode(list.val); // create a new list
    let currNode = newList; // set the new list to be the first node
    while (list) {
        let val = list.val;
        if (currNode.val !== val) { // if the value in <newList> is different than the value in list
            let node = new ListNode(val); // create a new node with <list.val> as the value
            currNode.next = node; // link the current node to the new node
            currNode = currNode.next;
        }
        // if the value in <newlist> is the same as in <list>, keep going over <list>
        list = list.next;
    }
    // loop done, return newList
    return newList;
};