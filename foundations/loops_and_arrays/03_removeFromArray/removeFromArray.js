const removeFromArray = function(ary) {
    let newAry = ary;
    for(let i = 1; i < arguments.length; i++){
        newAry = newAry.filter((word) => word !== arguments[i]);
    }
    return newAry;
};

// Do not edit below this line
module.exports = removeFromArray;
