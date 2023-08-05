// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.


//  Input: head = [1,2,2,1]
// Output: true

// Input: head = [1,2]
// Output: false

// Easy
// https://leetcode.com/problems/palindrome-linked-list/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const values = [];

    while(head) {
        values.push(head.val);
        head = head.next;
    }

    return values.join('') === values.reverse().join('');
};


var isPalindrome = function(head) {
    if(head == null || head.next == null) return true;
        var slow = head;
        var fast = head;
        while(fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        slow.next = reverseList(slow.next);
        slow = slow.next;
        while(slow != null) {
            if(head.val != slow.val) return false;
            head = head.next;
            slow = slow.next;
        }
        return true;
};

var reverseList = function(head) {
        var pre = null;
        var next = null;
        while(head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
};