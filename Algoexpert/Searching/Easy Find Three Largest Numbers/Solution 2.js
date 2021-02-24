// O(n) time | O(1) space
function findThreeLargestNumbers(array) {
    // Write your code here.
    const threeLargest = initThreeLargest(array);
    
    for(let i = 3; i < array.length; i++) {
        if(array[i] > threeLargest[0]) {
            setNewNumber(array[i], threeLargest)
        }
    }
    
    return threeLargest;
}

function setNewNumber(newNumber, threeLargest) {
    if(newNumber > threeLargest[2]) {
        sortThreeLargest(threeLargest, 2)
        threeLargest[2] = newNumber;
    } else if(newNumber > threeLargest[1]) {
        sortThreeLargest(threeLargest, 1)
        threeLargest[1] = newNumber;
    } else {
        threeLargest[0] = newNumber;
    }
}

function sortThreeLargest(threeLargest, lastIndex) {
    for(let i = 0; i < lastIndex; i++) {
        threeLargest[i] = threeLargest[i + 1];
    }
}

function initThreeLargest(array) {
    return [array[0], array[1], array[2]].sort((a, b) => a-b);
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
