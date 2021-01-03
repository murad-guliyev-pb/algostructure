// O(n^2) time | O(1) space
function insertionSort(array) {
  // Write your code here.
	for(let i = 0; i < array.length; i++) {
		for(let j = i; j > 0; j--) {
			if(array[j] < array[j -1]) {
				swap(j, j - 1, array);
			}
		} 
	}
	
	return array;
}

function swap(i, j, array) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
