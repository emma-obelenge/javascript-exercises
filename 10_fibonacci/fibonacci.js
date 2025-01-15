const fibonacci = function(number) {
    let prev = 0;
    let next = 1;
    let fib = 1;
    if(typeof(number) == "string") {
        number = parseInt(number);
    }
    if(number == 0) {
        return(0);
    } else if(number < 0) {
        return("OOPS");
    } else {
        for(let i = 2; i <= number; i++) {
            fib = prev + next;
            prev = next;
            next = fib;
        }
    }
    return(fib);
};

// Do not edit below this line
module.exports = fibonacci;
