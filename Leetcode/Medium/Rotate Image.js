/*
    Runtime: 76 ms, faster than 81.61% of JavaScript online submissions for Rotate Image.
    Memory Usage: 38.8 MB, less than 49.09% of JavaScript online submissions for Rotate Image.
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const length = matrix.length - 1;
    for(let i =0; i <= length; i++) {
        matrix[i].reverse();
    }
    
    for(let i = 0; i <= length; i++) {
        for(let j = 0; j <= length - i; j++) {
            const temp = matrix[length - j][length - i];
            matrix[length - j][length - i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
};
