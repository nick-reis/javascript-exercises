const removeFromArray = function(arr, ...args) {
    let results = [];

    return arr.filter((item) => {
        return !args.includes(item);
    });
};



// Do not edit below this line
module.exports = removeFromArray;
