/*
    Runtime: 100 ms, faster than 24.35% of JavaScript online submissions for Merge Two Sorted Lists.
    Memory Usage: 40.2 MB, less than 74.77% of JavaScript online submissions for Merge Two Sorted Lists.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let result = new ListNode();
    let resNode = result;
    
    while(l1 && l2) {
        if(l2.val < l1.val) {
            resNode.next = l2;
            l2 = l2.next;
        } else {
            resNode.next = l1;
            l1 = l1.next;
        }
        
        resNode = resNode.next;
    }
    
    resNode.next = l1 || l2;
    
    return result.next;
};