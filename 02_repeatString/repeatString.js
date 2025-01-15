const repeatString = function(string, num) {
    if (num < 0) {
        return("ERROR");
    }
    let merged = "";
    for (let i = 0; i < num; i++) {
        merged += string;
    }
    return (merged);
};

// Do not edit below this line
module.exports = repeatString;
