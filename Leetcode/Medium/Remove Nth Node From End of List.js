/*
    Runtime: 88 ms, faster than 53.60% of JavaScript online submissions for Remove Nth Node From End of List.
    Memory Usage: 40.7 MB, less than 6.24% of JavaScript online submissions for Remove Nth Node From End of List.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let currentNode = head;
    let forwardNode = head;
    
    for(let i = 0; i < n; i++) {
        forwardNode = forwardNode.next;
    }
    
    if(!forwardNode) {
        return head.next;
    }
    
    while(forwardNode.next) {
        forwardNode = forwardNode.next; 
        currentNode = currentNode.next;
    }
    
    currentNode.next = currentNode.next.next;
    
    return head;
};
