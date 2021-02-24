// O(n) time | O(1) space
function isMonotonic(array) {
    // Write your code here.
    if(array.length === 0 || array.lenght === 1) return true;

    const nonIncreasing = array[0] >= array[array.length - 1];

    for(let i = 0; i < array.length - 2; i++) {
        if(nonIncreasing) {
            if(array[i] < array[i + 1]) return false;
        } else {
            if(array[i] > array[i + 1]) return false;
        }
    }

    return true;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
