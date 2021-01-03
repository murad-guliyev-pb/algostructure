// O(n) time | O(n) space
function runLengthEncoding(string) {
  // Write your code here.
	const arr = [];
	let calcMode = false;
	
	const whenIsNine = (arrLastEl, currentChar) => {
		if(arr[arrLastEl] < 9) {
			arr[arrLastEl] += 1;
		} else {
			arr.push(currentChar);
			arr.push(1);
		}
	}
	
	for(let i = 0; i < string.length; i++){
		let arrLastEl = arr.length - 1;
		const currentChar = string[i];
		const nextChar = string[i + 1];
		
		if(calcMode) {
			whenIsNine(arrLastEl, currentChar);
			if(currentChar !== nextChar) {
				arr.push(currentChar);
				calcMode = false;
			}
		} else {
			arr.push(1);
			if(currentChar === nextChar) {
				calcMode = true;
			} else {
				arr.push(currentChar);
			}
		}
	}
	
	return arr.join("");
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
