const sumAll = function(num1, num2) {
    //Check if number
    if(typeof num1  !== 'number' || typeof num2 !== 'number') { return 'ERROR'; }

    //Check if negative
    if(num1 < 0 || num2 < 0) { return 'ERROR';}

    let greater = 0;
    let smaller = 0;

    if(num1 > num2)
    {
        greater = num1;
        smaller = num2;
    }
    else
    {
        greater = num2;
        smaller = num1;
    }

    let sum = 0;
    for (let i = smaller; i <= greater; i++) {

        sum += i;
        
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
