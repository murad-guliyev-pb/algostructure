// O(n^2) time | O(n) space
function getNthFib(n) {
  // Write your code here.
	if(n === 0) return 0;
	if(n === 1) return 0;
	if(n === 2) return 1;
	
	return getNthFib(n - 2) + getNthFib(n - 1)
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
