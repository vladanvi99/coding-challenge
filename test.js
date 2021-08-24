const birthdayCakeCandles = require("./birthdayCakeCandles");


it('birthdayCakeCandles([1,2,3]) should return number', () => {
    expect(typeof birthdayCakeCandles([1,2,3])).toBe('number');
})
it('birthdayCakeCandles([1,2,3]) should return 3', () => {
    expect(birthdayCakeCandles([1,2,3])).toBe(1);
})
it('birthdayCakeCandles([1,5,6,9,3,8,10,9,7,9,9,3,4,5,6,9]) should return 5', () => {
    expect(birthdayCakeCandles([1,5,6,9,3,8,1,9,7,9,9,3,4,5,6,9])).toBe(5);
})
it('birthdayCakeCandles([8,5,3,8,4,5,6,8]) should return 3', () => {
    expect(birthdayCakeCandles([8,5,3,8,4,5,6,8])).toBe(3);
})