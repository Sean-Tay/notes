/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) { 
    var helper = function(s, idx) {
        if (idx >= s.length) {
            return;
        }
        let currChar = s[idx];
        helper(s, idx + 1);
        s[s.length - idx - 1] = currChar;
    }
    
    helper(s, 0);
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) { 
    for (let i = 0; i < (s.length / 2) - (s.length % 2); i++) {
        let j = s.length - i - 1;
        
        s[i] = String.fromCharCode(s[i].charCodeAt() ^ s[j].charCodeAt());
        s[j] = String.fromCharCode(s[i].charCodeAt() ^ s[j].charCodeAt());
        s[i] = String.fromCharCode(s[i].charCodeAt() ^ s[j].charCodeAt());
    }
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let limit = (s.length / 2) - (s.length % 2);
    for (let i = 0; i < limit; i++) {
        let j = s.length - i - 1;
        
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
};
