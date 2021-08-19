module.exports = simpleArraySum = (arr) => {
    let sum = 0;
    for(num of arr) {
        sum = sum + num;
    }
    return sum;
}