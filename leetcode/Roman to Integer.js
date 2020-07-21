/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };
    
    let sum = 0;
    
    for(let i=0; i< s.length;) {
        if(s[i + 1] && map[s[i + 1]] > map[s[i]]) {
            sum += map[s[i + 1]] - map[s[i]]
             i += 2;
        } else {
            sum += map[s[i]];
             i++;
        }
    }
    
    return sum;
};