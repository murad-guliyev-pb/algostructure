/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let word = strs[0] ?? "";
    
    for(let i=1; i<strs.length; i++) {
        while(word != "") {
            if(strs[i].substring(0, word.length).includes(word)) {
                break;
            }
            word = word.slice(0,-1);
        }
    }
    
    return word;
};