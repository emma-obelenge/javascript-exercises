const caesar = function(strInput, shiftFactor) {
    let charArr = [];
    for(let i = 0; i < strInput.length; i++) {
        let charAscii = strInput.charCodeAt(i);

        if(charAscii >= 65 && charAscii <= 90) {
            // for uppercase alphabets
            abs_shift = shiftFactor % 26;
            if(abs_shift > 0) {
                for(let i = 1; i <= abs_shift; i++) {
                    if(charAscii == 90) {
                        charAscii = 65;
                        continue;
                    }
                    charAscii += 1;
                }
            } else if (abs_shift < 0) {
                abs_shift *= -1;
                for(let i = 1; i <= abs_shift; i++) {
                    if(charAscii == 65) {
                        charAscii = 90;
                        continue;
                    }
                    charAscii -= 1;
                }
            }
        } else if(charAscii >= 97 && charAscii <= 122) {
            // for lowercase alphabets
            abs_shift2 = shiftFactor % 26;
            if(abs_shift2 > 0) {
                for(let i = 1; i <= abs_shift2; i++) {
                    if(charAscii == 122) {
                        charAscii = 97;
                        continue;
                    }
                    charAscii += 1;
                }
            } else if (abs_shift2 < 0) {
                abs_shift2 *= -1;
                for(let i = 1; i <= abs_shift2; i++) {
                    if(charAscii == 97) {
                        charAscii = 122;
                        continue;
                    }
                    charAscii -= 1;
                }
            }
        }
        // will push the worked on alphabets or any other character without working on them
        charArr.push(String.fromCharCode(charAscii));
    }
    return(charArr.join(""));
};

// Do not edit below this line
module.exports = caesar;
