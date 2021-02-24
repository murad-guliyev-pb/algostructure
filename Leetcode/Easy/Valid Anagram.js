/*
    Runtime: 128 ms, faster than 19.08% of JavaScript online submissions for Valid Anagram.
    Memory Usage: 45.3 MB, less than 7.67% of JavaScript online submissions for Valid Anagram.
/*

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return sortString(s) === sortString(t);
};

function sortString(s) {
    return s.split("").sort().join("");
}


// -----------------------------------------------------------------------------------------------------

/*
    Runtime: 88 ms, faster than 92.06% of JavaScript online submissions for Valid Anagram.
    Memory Usage: 40.9 MB, less than 67.36% of JavaScript online submissions for Valid Anagram.
/*

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const cache = {};

    for(let i of s) {
        if(!cache[i]) {
            cache[i] = 1;
        } else {
            cache[i]++;
        }
    }

    for(let i of t) {
        if(!cache[i]) {
            return false;
        } else {
            cache[i]--;
        }
    }

    return true;
};