// O(n) time | O(1) space
function maxSubsetSumNoAdjacent(array) {
    // Write your code here.
    const length = array.length;
    if(length === 0) return 0;
    if(length === 1) return array[0];
    
    array[1] = Math.max(array[0], array[1])
	for(let i = 2; i < length; i++) {
		array[i] = Math.max(array[i - 1], array[i] + array[i - 2])
	}
    
    return Math.max(array[length -1], array[length - 2])
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;
  