// O(n) time | O(1) space
function isPalindrome(string) {
  // Write your code here.
	let leftPointer = 0;
	let rigthPointer = string.length - 1;
	
	while(leftPointer <= rigthPointer) {
		if(string[leftPointer] !== string[rigthPointer]) {
			return false;
		}
		
		leftPointer++;
		rigthPointer--;
	}
	
	return true;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
