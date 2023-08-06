// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Easy
// https://leetcode.com/problems/reverse-linked-list/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prevNode = null;
    let newHead = null;

    while(head) {
        newHead = new ListNode(head.val);
        newHead.next = prevNode;
        prevNode = newHead;
        head = head.next;
    }

    return newHead;
};



var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}

var reverseList = function(head) {
    let prev = null
    let curr = head
    let next = null
    
    while(curr!== null){
        // save next
        next = curr.next
        // reverse
        curr.next = prev
        // advance prev and curr
        prev = curr
        curr = next
    }
    return prev;
};