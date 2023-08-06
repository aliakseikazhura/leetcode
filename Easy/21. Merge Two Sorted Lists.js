// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

// Easy
// https://leetcode.com/problems/merge-two-sorted-lists/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

    let newHead = new ListNode();
    let current = newHead;
    let headList1 = list1;
    let headList2 = list2;

    while (headList1 && headList2) {
        if (headList2.val > headList1.val) {
            current.next = headList1;
            headList1 = headList1.next;
        } else {
            current.next = headList2;
            headList2 = headList2.next;
        }
        current = current.next;
    }

    if (!headList1) current.next = headList2;
    if (!headList2) current.next = headList1;

    return newHead.next;
};