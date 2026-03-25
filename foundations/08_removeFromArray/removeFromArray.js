const removeFromArray = function(arr,...valuesToRemove) {

    let arrAfterRemoval = arr.filter(
        element => {
            if (valuesToRemove.indexOf(element)=== -1) {
            return true
        }
        else {
            return false
        }})
    return arrAfterRemoval
};

console.log(removeFromArray([1,2,2,6,4,5,3],2,3,9));

// Do not edit below this line
module.exports = removeFromArray;
