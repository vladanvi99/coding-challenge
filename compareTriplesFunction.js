module.exports = compareTriplets = (a, b) => {
    let first = 0;
    let second = 0;
    for (let i = 0; i < a.length; i ++) {
        if (a[i] > b[i]) {
            first += 1;
        } else if (a[i] < b[i]) {
            second += 1;
        }
    }
    return [first, second];

}