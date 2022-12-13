const c3 = require('./c3_binary-search')

describe('Code Challenge Three Test', () => {
    test('Tests the function using the simplest input', () => {
        let arr = [1,2,3,4,5];
        let value = 4;
        let start = 0;
        let end = arr.length - 1;
       
        expect(c3(arr, value, start, end)).toStrictEqual(3)
    });
    test('Tests the function using null input', () => {
        let arr = [];
        let value = null;
        let start = 0;
        let end = arr.length - 1;
        
        expect(c3(arr, value, start, end)).toStrictEqual(-1)
    });
    test('Tests the function using complex input', () => {
        let arr = [23, 30, 40, 47, 50, 85, 94];
        let value = 40;
        let start = 0;
        let end = arr.length - 1;
        
        expect(c3(arr, value, start, end)).toStrictEqual(2)
    })
})