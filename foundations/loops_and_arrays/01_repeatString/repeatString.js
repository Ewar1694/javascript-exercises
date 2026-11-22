const repeatString = function(string, iterations) {
    if(iterations < 0) {
        return "ERROR";
    }
    let output = "";
    for(let i = 0; i < iterations; i++){
        output = output + string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
