'use strict';

const sortAlgo = require('./c26_insertionSort')

describe('Insertion Sort Algorithm', () => {
    it('Should sort complex array', () => {
        let answer = sortAlgo([8,4,23,42,16,15])
        expect(answer).toEqual([4, 8, 15, 16, 23, 42])
    })
    it('Should sort a interesting array', () => {
        let answer = sortAlgo([3, 2, 1])
        expect(answer).toEqual([1, 2, 3])
    })
    it('Should sort a simple array', () => {
        let answer = sortAlgo([2, 1])
        expect(answer).toEqual([1, 2])
    })
    it('Should sort an array with one index value', () => {
        let answer = sortAlgo([1])
        expect(answer).toEqual([1])
    })
    it('Should sort an empty array', () => {
        let answer = sortAlgo([])
        expect(answer).toEqual([])
    })
})