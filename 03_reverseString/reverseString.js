const reverseString = function(str) {
    const arr = str.split("");
    const newArrat = arr.reverse();
    const joinhello = newArrat.join("")
    return joinhello;
};




reverseString('')
// Do not edit below this line
module.exports = reverseString;
""