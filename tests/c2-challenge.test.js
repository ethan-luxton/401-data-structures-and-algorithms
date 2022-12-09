const c2 = require('../challenges/c2_array-insert-shift')

describe('Code Challenge Two Test', () => {
    test('Tests the function using the simplest input', () => {
        let arr = [1,2];
        let value = 3;
        expect(c2(arr, value)).toStrictEqual([1, 3, 2])
    });
    test('Tests the function using null input', () => {
        let arr = [];
        let value = null;
        expect(c2(arr, value)).toStrictEqual([null])
    });
    test('Tests the function using complex input', () => {
        let arr = [42,8,15,23,42];
        let value = 16;
        expect(c2(arr, value)).toStrictEqual([42,8,16,15,23,42])
    })
})