'use strict'

const LinkedList = require('./c7_linked-list-kth');

describe("kthFromEnd", () => {
    test("should return null if k is greater than the length of the linked list", () => {
        let c7 = new LinkedList();
        c7.append("1");
        c7.append("2");
        c7.append("3");
        expect(c7.kthFromEnd(5)).toEqual(null);
    });

    test("should return the head node if k and the length of the list are the same", () => {
        let c7 = new LinkedList();
        c7.append("1");
        c7.append("2");
        c7.append("3");
        expect(c7.kthFromEnd(3)).toEqual("1");
    });

    test("should return null if k is not a positive integer", () => {
        let c7 = new LinkedList();
        c7.append("1");
        c7.append("2");
        c7.append("3");
        expect(c7.kthFromEnd(-1)).toEqual(null);
    });

    test("should return the only node if the linked list is of size 1", () => {
        let c7 = new LinkedList();
        c7.append("1");
        expect(c7.kthFromEnd(1)).toEqual("1");
    });

    test("should return the kth node from the middle of the linked list", () => {
        let c7 = new LinkedList();
        c7.append("1");
        c7.append("2");
        c7.append("3");
        expect(c7.kthFromEnd(2)).toEqual("2");
    });
});