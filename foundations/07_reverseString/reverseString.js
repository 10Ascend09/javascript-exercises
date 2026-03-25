const reverseString = function(string) {
    let stringReversed = "";
    for (let i = 0; i < string.length; i++) {
        stringReversed += string[string.length-1-i]
        
    }
    return stringReversed
};

// Do not edit below this line
module.exports = reverseString;
