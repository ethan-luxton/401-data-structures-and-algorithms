'use strict'

const LinkedList = require('./c5_linked-list');

describe('LinkedList', () => {
    let c5;
    beforeEach(() => {
        c5 = new LinkedList();
    });

    test('Testing the include method to see if it returns true if a value is in the node.', () => {
        c5.insert(1);
        c5.insert(2);
        c5.insert(3);

        expect(c5.includes(1)).toBe(true);
        expect(c5.includes(2)).toBe(true);
        expect(c5.includes(3)).toBe(true);
    });
  
    test('Testing the includes method to see if it returns false if a value is not in the node.', () => {
        c5.insert(1);
        c5.insert(2);
        c5.insert(3);

        expect(c5.includes(4)).toBe(false);
    });
  
    test('Testing toString to see if it returns a fully created string which represents the linked list.', () => {
        c5.insert(1);
        c5.insert(2);
        c5.insert(3);

        expect(c5.toString()).toEqual("{ 3 } -> { 2 } -> { 1 } -> NULL");
    });
  });