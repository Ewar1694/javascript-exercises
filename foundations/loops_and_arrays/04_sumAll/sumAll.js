const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    let x = 0;
    if(num1 < num2){
        x = num1;
        for(let i = num1; i < num2; i++) {
            x = x + (i + 1);
        }
    }else{
        x = num2;
        for(let i = num2; i < num1; i++) {
            x = x + (i + 1);
        }
    }
    return x;
};

// Do not edit below this line
module.exports = sumAll;
