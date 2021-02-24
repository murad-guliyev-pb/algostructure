// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  // Write your code here.
	array.sort((a, b) => a - b);
	const result = [];
	
	for(let i = 0; i < array.length; i++) {
		const targetForTwoNumbers = targetSum - array[i];
		let leftIndex = i + 1;
		let rightIndex = array.length - 1;
		
		while(leftIndex < rightIndex) {
			const sumOfEnds = array[leftIndex] + array[rightIndex];
			if(sumOfEnds > targetForTwoNumbers) {
				rightIndex--;
			} else if(sumOfEnds < targetForTwoNumbers) {
				leftIndex++;
			} else {
				result.push([array[i], array[leftIndex], array[rightIndex]]);
				leftIndex++;
				rightIndex--;
			}
		}
	}
	
	return result;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
