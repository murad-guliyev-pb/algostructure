/*
    Runtime: 140 ms, faster than 53.41% of JavaScript online submissions for Add Two Numbers.
    Memory Usage: 44.1 MB, less than 48.24% of JavaScript online submissions for Add Two Numbers.
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
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();
    let l1Node = l1;
    let l2Node = l2;
    let resNode = result;
    let inMemory = 0;

    while(l1Node && l2Node) {
        let val = l1Node.val + l2Node.val;
        
        resNode.next = new ListNode((val + inMemory) % 10);
        resNode = resNode.next;
        
        if(val + inMemory >= 10) {
            inMemory = 1;
        } else {
            inMemory = 0;
        }
        
        l1Node = l1Node.next;
        l2Node = l2Node.next;
    }
    
    let lNode = l1Node || l2Node;

    while(lNode) {
        resNode.next = new ListNode((lNode.val + inMemory) % 10);
        
        if(lNode.val + inMemory >= 10) {
            inMemory = 1;
        } else {
            inMemory = 0;
        }
        
        resNode = resNode.next;
        lNode = lNode.next;
    }
    
    if(inMemory) {
        resNode.next = new ListNode(1);
    }
    
    return result.next;
};