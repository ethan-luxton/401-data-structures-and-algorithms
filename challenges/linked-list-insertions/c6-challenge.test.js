'use strict'

const LinkedList = require('./c6_linked-list-insert');

describe('LinkedList', () => {
    let c6;
    beforeEach(() => {
        c6 = new LinkedList();
    }); 

    test('Testing append to see if it returns a fully created string which represents the linked list.', () => {
        c6.append(0);
        c6.append(1);
        c6.append(2);

        expect(c6.toString()).toEqual("{ 0 } -> { 1 } -> { 2 } -> NULL");
    });

    test('Testing append and insertBefore to see if it returns a fully created string which represents the linked list.', () => {
        c6.append(0);
        c6.append(1);
        c6.append(3);
        c6.insertBefore(2, 3);

        expect(c6.toString()).toEqual("{ 0 } -> { 1 } -> { 2 } -> { 3 } -> NULL");
    });

    test('Testing append and insertAfter to see if it returns a fully created string which represents the linked list.', () => {
        c6.append(0);
        c6.append(1);
        c6.append(2);
        c6.insertAfter(3, 2);

        expect(c6.toString()).toEqual("{ 0 } -> { 1 } -> { 2 } -> { 3 } -> NULL");
    });
});