const mergeSort = require('./c27_mergesort');

describe('mergeSort', () => {
    test('sorts an array of six numbers', () => {
      const input = [8, 4, 23, 42, 16, 15];
      const expectedOutput = [4, 8, 15, 16, 23, 42];
      const actualOutput = mergeSort(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  
    test('sorts an array of three numbers', () => {
      const input = [1, 3, 2];
      const expectedOutput = [1, 2, 3];
      const actualOutput = mergeSort(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  
    test('sorts an array of two numbers', () => {
      const input = [2, 1];
      const expectedOutput = [1, 2];
      const actualOutput = mergeSort(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  
    test('returns an empty array when given an empty array', () => {
      const input = [];
      const expectedOutput = [];
      const actualOutput = mergeSort(input);
      expect(actualOutput).toEqual(expectedOutput);
    });
  });