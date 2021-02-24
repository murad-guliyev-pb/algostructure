// O(n^2) time | O(1) space (In my opinion)
function moveElementToEnd(array, toMove) {
    // Write your code here.
    for(let i = array.length - 1; i >= 0; i--) {
        if(array[i] === toMove) {
            array.splice(i,1);
            array.push(toMove);
        }
    }
    
    return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
  