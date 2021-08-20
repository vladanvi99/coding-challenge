const compareTriplets = require("./compareTriplesFunction");


it('compareTriplets([1,2,3], [3,2,1]) should return array', () => {
    expect(typeof compareTriplets([1,2,3], [3,2,1])).toStrictEqual('object');
})
it('compareTriplets([1,2,3], [3,2,1]) should return [1,1]', () => {
    expect(compareTriplets([1,2,3], [3,2,1])).toStrictEqual([1,1]);
})
it('compareTriplets([1,3,3], [3,2,1]) should return [2,1]', () => {
    expect(compareTriplets([1,3,3], [3,2,1])).toStrictEqual([2,1]);
})
it('compareTriplets([8,5,3], [2,0,1]) should return [3,0]', () => {
    expect(compareTriplets([8,5,3], [2,0,1])).toStrictEqual([3,0]);
})