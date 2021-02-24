// O(nlog(n) + mlog(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	
	const result = [arrayOne[0], arrayTwo[0]];
	let arrayOneIndex = 0;
	let arrayTwoIndex = 0;
	
	while(arrayOneIndex !== arrayOne.length && arrayTwoIndex !== arrayTwo.length) {
		if(Math.abs(result[0] - result[1]) > Math.abs(
				arrayOne[arrayOneIndex] - arrayTwo[arrayTwoIndex]
		)) {
			result[0] = arrayOne[arrayOneIndex];
			result[1] = arrayTwo[arrayTwoIndex];
		}
		
		if(arrayOne[arrayOneIndex] > arrayTwo[arrayTwoIndex]) {
			arrayTwoIndex++;
		} else if(arrayOne[arrayOneIndex] < arrayTwo[arrayTwoIndex]) {
			arrayOneIndex++;
		} else {
			return [arrayOne[arrayOneIndex], arrayTwo[arrayTwoIndex]];
		}
	}
	
	return result;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
