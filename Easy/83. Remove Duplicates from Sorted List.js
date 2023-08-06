// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.


// Input: head = [1,1,2]
// Output: [1,2]


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]


// Easy
// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/


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
var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    let slow = head;
    let fast = head.next;

    while (fast) {
        if (fast.val === slow.val) {
            slow.next = fast.next;
        } else {
            slow = fast;
        }
        fast = fast.next;
    }

    return head
};