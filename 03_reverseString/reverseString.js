const reverseString = function(input) {
    if(input == "") {
        return "";
    }
    reversed_str = input.split("").reverse().join("");
    return(reversed_str);
};

// Do not edit below this line
module.exports = reverseString;
