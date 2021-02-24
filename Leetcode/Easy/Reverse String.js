/*
    Runtime: 144 ms, faster than 12.51% of JavaScript online submissions for Reverse String.
    Memory Usage: 45.8 MB, less than 54.58% of JavaScript online submissions for Reverse String.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    
    while(leftIndex < rightIndex) {
        swap(leftIndex, rightIndex, s);
        leftIndex++;
        rightIndex--;
    }
};

const swap = (i, j, array) => {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}