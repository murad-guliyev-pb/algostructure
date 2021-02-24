// O(w * n * log(n)) time | O(w * n) space - where w is the number of words and n the is length of the longest word 
function groupAnagrams(words) {
    // Write your code here.
    const anagrams = {};
    
    for(let i = 0; i < words.length; i++) {
        const sortedWord = words[i].split("").sort().join("");

        if(anagrams[sortedWord]) {
            anagrams[sortedWord].push(words[i]);
        } else {
            anagrams[sortedWord] = [words[i]];	
        }
    }
    
    return Object.values(anagrams);
}

// Do not edit the line below.
exports.groupAnagrams = groupAnagrams;
  