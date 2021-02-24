// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// O(n) time | O(1) space - where n is the number of nodes in Linked List
function removeDuplicatesFromLinkedList(linkedList) {
    // Write your code here.
    let node = linkedList;
    while(node.next) {
        if(node.value === node.next.value) {
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    
    return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
  