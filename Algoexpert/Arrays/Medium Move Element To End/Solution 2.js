// O(n) time | O(1) space
function moveElementToEnd(array, toMove) {
    // Write your code here.
    let i = 0;
    let j = array.length - 1;
    
    while(i < j) {
        while(i < j && array[j] === toMove) j--;
        
        if(array[i] === toMove) {
            swap(i, j, array);
        }
        i++;
    }
    
    return array;
}

function swap(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
  