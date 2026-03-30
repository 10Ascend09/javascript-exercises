const sumAll = function(rangeNumber, rangeNumber2) {
    console.log(rangeNumber);
    console.log(typeof rangeNumber);
    console.log(rangeNumber2);
    console.log(typeof rangeNumber2);
    

    if (Number(rangeNumber) && Number(rangeNumber2) 
        && rangeNumber >= 0 && rangeNumber2 >= 0 
        && rangeNumber === Math.floor(rangeNumber)
        && rangeNumber2 === Math.floor(rangeNumber2)) {
            
        let summedNumber = 0;
        if (rangeNumber < rangeNumber2) {
        for (let i = rangeNumber; i <= rangeNumber2; i++) {
            summedNumber += i;
        }
        return summedNumber
    } else if (rangeNumber > rangeNumber2) {
        for (let i = rangeNumber2; i <= rangeNumber; i++) {
            summedNumber += i;
        }
        return summedNumber
    }
    } else return "ERROR"


};

// Do not edit below this line
module.exports = sumAll;
Math.abs()