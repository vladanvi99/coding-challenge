module.exports = birthdayCakeCandles = (arr) => {
    return arr.filter(l=>l==Math.max(...arr)).length

}

