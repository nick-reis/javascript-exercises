const reverseString = function(str) {
    let array = str.split('');
    array.reverse();

    let result = array.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
