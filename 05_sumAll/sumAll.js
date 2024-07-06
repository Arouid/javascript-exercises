const sumAll = function(start, end) {
    if ((Math.sign(start) === -1) || (Math.sign(end) === -1)) {
        return 'ERROR';  
    } else if ((typeof start !== "number") || (typeof end !== "number")) {
        return 'ERROR';
    }  
    if (start > end) {
    end = [start, start = end][0];
    }
    let makeArray = Array.from({length: end - start + 1},(_, index) => start + index);
    return makeArray.reduce((accu, curr) => accu + curr, 0); 
}
sumAll(10,"90");

// Do not edit below this line
module.exports = sumAll;
