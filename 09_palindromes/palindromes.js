const palindromes = function (str) {
    let new_str = "";

    for(let i = 0; i < str.length; i++) {
        if(str[i] == " " || str[i] == "," || str[i] == "!" || str[i] == ".") {
            continue;
        } else {
            new_str += str[i];
        }
    }
    new_str = new_str.toLowerCase();

    let str_len = new_str.length;
    let index = 0;
    console.log(new_str);

    for(let i = str_len - 1; i >= 0; i--) {
        if(new_str[i] == new_str[index]) {
            index++;
            continue;
        } else {
            return(false);
        }
    }
    return(true);
};

palindromes("Racecar!");

// Do not edit below this line
module.exports = palindromes;
