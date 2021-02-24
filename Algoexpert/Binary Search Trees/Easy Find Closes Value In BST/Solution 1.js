// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
function findClosestValueInBst(tree, target) {
    // Write your code here.
    let closestValue = tree.value;
    let node = tree;
    
    while(node !== null) {
        if(isNodeValueClosest(node, target, closestValue)) {
            closestValue = node.value;
        }
        
        if(node.value > target) {
            node = node.left;
        } else if(node.value < target) {
            node = node.right;
        } else {
            break;
        }
    }
    
    return closestValue;
}

function isNodeValueClosest(node, target, closestValue) {
    return Math.abs(target - node.value) < Math.abs(target - closestValue);
}

    // This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
