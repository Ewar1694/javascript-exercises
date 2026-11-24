const reverseString = function(string) {
    let reverse = "";
    for(let i = 0; i < string.length ; i++){
        reverse = reverse + string.at(string.length-(i+1));
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
