const sumAll = function(num1, num2) {
    let min, max;
    if((isNaN(num1) || isNaN(num1)) || !((Number.isInteger(num1)) && (Number.isInteger(num2)))) {
        return("ERROR");
    }
    if(num1 > num2) {
        if(num2 < 0) {
            return("ERROR");
        }
        max = num1;
        min = num2;
    } else {
        if(num1 < 0) {
            return("ERROR");
        }
        max = num2;
        min = num1;
    }
    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum += i;
    }
    return(sum);
};

// Do not edit below this line
module.exports = sumAll;
