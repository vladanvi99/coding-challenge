const simpleArraySum = require("./simpleArraySum");


it('simpleArraySum([1,2,5]) should return number', () => {
    expect(typeof simpleArraySum([1,2,5])).toBe('number');
})
it('simpleArraySum([1,2,5]) should return 8', () => {
    expect(simpleArraySum([1,2,5])).toBe(8);
})
it('simpleArraySum([1,8,2]) should return 11', () => {
    expect(simpleArraySum([1,8,2])).toBe(11);
})
it('simpleArraySum([4,3,5,6]) should return 18', () => {
    expect(simpleArraySum([4,3,5,6])).toBe(18);
})
it('simpleArraySum([5,4,8,3,4,5,10,50]) should return 89', () => {
    expect(simpleArraySum([5,4,8,3,4,5,10,50])).toBe(89);
})