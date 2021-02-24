// O(n) time | O(1) space
function isMonotonic(array) {
    // Write your code here.
    let isNonIncreasing = true;
    let isNonDecreasing = true;
    
    for(let i = 0; i < array.length - 2; i++) {
        if(array[i] < array[i + 1]) isNonDecreasing = false;
        if(array[i] > array[i + 1]) isNonIncreasing = false;
    }
    
    return isNonIncreasing || isNonDecreasing;
}
  
// Do not edit the line below.
exports.isMonotonic = isMonotonic;
  