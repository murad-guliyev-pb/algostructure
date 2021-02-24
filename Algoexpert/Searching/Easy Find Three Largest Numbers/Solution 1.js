// O(n) time | O(1) space
function findThreeLargestNumbers(array) {
    // Write your code here.
    const largestsCount = 3;
    const largestNumbers = initLargestNumbers(array, largestsCount);
    
    for(let i = largestsCount; i < array.length; i++) {
        if(array[i] > largestNumbers[0]) {
            setNewNumber(array[i], largestNumbers)
        }
    }
    
    return largestNumbers;
}

function setNewNumber(newNumber, largestNumbers) {
    largestNumbers[0] = newNumber;
    largestNumbers.sort((a, b) => a-b);
}

function initLargestNumbers(array, largestsCount) {
    return array.slice(0, largestsCount).sort((a, b) => a-b);
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
