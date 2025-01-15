const removeFromArray = function() {
    let newArray1 = arguments[0];
    let newArray2 = [];
    let flag = 1;
    for(let i = 1; i < arguments.length; i++) {
        if(flag == 1) {
            for(const item of newArray1) {
                if(item === arguments[i]) {
                    continue;
                } else {
                    newArray2.push(item);
                }
            }
            flag = 2;
            newArray1 = [];
        }
        if(flag == 2) {
            for(const item of newArray2) {
                if(item === arguments[i]) {
                    continue;
                } else {
                    newArray1.push(item);
                }
            }
            flag = 1;
            newArray2 = [];
        }
    }
    if(newArray1 == []) {
        return(newArray2);
    } else {
        return(newArray1);
    }
}

// Do not edit below this line
module.exports = removeFromArray;
