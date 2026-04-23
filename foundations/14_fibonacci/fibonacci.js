const fibonacci = function(sequenceNumber) {
    sequence = [1,1];
    if (sequenceNumber === 1){
        return sequence[0]
    } else if (sequenceNumber === 2){
        return sequence[1]
    } else if (Number(sequenceNumber) === 0){
        return 0
    } else if (sequenceNumber > 0){
        for (let i = 2; i < sequenceNumber; i++) {
            sequence.push(sequence[i-2] + sequence[i-1]);

        }
        return sequence[sequenceNumber - 1]
    } else return "OOPS"
};

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(10));
// Do not edit below this line
module.exports = fibonacci;
