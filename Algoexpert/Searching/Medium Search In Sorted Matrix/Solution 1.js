// O(n * (m * log(m)) time | O(n * m) space - where n is the number of rows and m is the number of columns (??) 
function searchInSortedMatrix(matrix, target) {
    // Write your code here.
    const result = [-1, -1];
    const initialMatrix = [...matrix];
    
    while(matrix.some(row => row.length > 0)) {
        for(let i = 0; i < matrix.length; i++) {
            const row = matrix[i];
            const mediumItem = Math.floor(row.length / 2);
            
            if(row[mediumItem] > target) {
                matrix[i] = mediumItem > 0 ? row.slice(0, mediumItem) : row.slice(1);
            } else if(row[mediumItem] < target) {
                matrix[i] = mediumItem > 0 ? row.slice(mediumItem): row.slice(1);
            } else if(row[mediumItem] === target) {
                for(let j = 0; j < initialMatrix[i].length; j++) {
                    if(initialMatrix[i][j] === target) return [i, j];
                }
            }
        }
    }
        
    return result;
}

// Do not edit the line below.
exports.searchInSortedMatrix = searchInSortedMatrix;
  