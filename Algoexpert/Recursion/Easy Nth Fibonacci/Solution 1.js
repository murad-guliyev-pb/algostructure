// O(n) time | O(1) space
function getNthFib(n) {
  // Write your code here.
	if(n === 0) return 0;
    if(n === 1) return 0;
    
	let temp = 0;
	let prevVal = 0;
	let val = 1;
	
	for(let i = 2; i < n; i++) {
		temp = val;
		val += prevVal;
		prevVal = temp;
	}
	
	return val;
	
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
