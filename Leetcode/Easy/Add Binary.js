/*
    Runtime: 76 ms, faster than 97.31% of JavaScript online submissions for Add Binary.
    Memory Usage: 42.3 MB, less than 9.62% of JavaScript online submissions for Add Binary.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let memory = 0;
    let result = "";
    let rest = "";
    
    while(a && b) {
        const sum = Number(a[a.length - 1]) + Number(b[b.length - 1]);
        result = (sum + memory) % 2 + result;
        
        if(sum + memory >= 2) {
            memory = 1;
        } else {
            memory = 0;
        }
        
        a = a.slice(0, -1);
        b = b.slice(0, -1);
    }
    
    if(memory === 0) {
        return a + b + result;
    } else {
        rest = a || b;
    }
        
    while(rest){
        const lastCh = Number(rest[rest.length - 1]);
        result = (lastCh + memory) % 2 + result;
        
        if(lastCh + memory >= 2) {
            memory = 1;
        } else {
            memory = 0;
        }
        
        rest = rest.slice(0, -1);
    }
    
    if(memory === 1) {
       result = "1" + result;
    }
    
    
    return result;
};