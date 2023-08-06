// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Input: head = [7,7,7,7], val = 7
// Output: []

// Easy
// https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null;

    while (head && head.val === val) {
        head = head.next;
    }
    if (!head) return head;

    let slow = head;
    let fast = head.next;
    while (fast) {
        if (fast.val === val) {
            slow.next = fast.next;
        } else {
            slow = fast;
        }
        fast = fast.next;
    }
    return head;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head;
	
	// if head is the value were deleting and if there is any repetition lets handle that case first otherwise we'll just break out of the loop
    while(head) {
        if(head.val === val) {
            head = head.next;
        } else {
            break;
        }
    }
    
	// skip any nodes whos values match the parameters and set it to the node after
	// if the node is found, set curr.next to the node after it then try again
	// otherwise iterate forward
    let curr = head;
    while(curr && curr.next) {
        if (curr.next.val === val) curr.next = curr.next.next;
        else curr = curr.next;
    }
    
    return head;
};