/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const hasCycle = (head) => {
    if (!head || !head.next) return false;

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        if (fast === slow) return true;
        fast = fast.next.next;
        slow = slow.next;
    }

    return false;
};

// https://leetcode.com/problems/linked-list-cycle/description/