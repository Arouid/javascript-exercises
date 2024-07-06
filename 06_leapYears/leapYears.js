const leapYears = function(num) {
    if (num % 4 === 0 && num % 100 !== 0) {
        return true;
    } else if (num % 100 === 0 && num % 400 === 0) {
        return true;
    }
    return false;
}

leapYears(1600)
// Do not edit below this line
module.exports = leapYears;
// if /4 && 400 = true
// if /4 && 100 = false
// if /400 && 100 = true