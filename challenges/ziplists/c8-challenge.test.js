'use strict';

const { zipLists } = require('./c8_zip-list')
const LinkedList = require('../linkedListKth/c7_linked-list-kth');

describe("zipLists", () => {
    test("Should return a new linked list with nodes from the previous two alternating", () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list1.insert("1");
        list1.insert("2");
        list1.insert("3");
        list2.insert("4");
        list2.insert("5");
        list2.insert("6");
        let output = zipLists(list1, list2)
        expect(output).toEqual("{ 1 } -> { 4 } -> { 2 } -> { 5 } -> { 3 } -> { 6 } -> NULL");
    });
    test("Should return a new linked list with nodes from the previous two alternating", () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        list1.insert("1");
        list2.insert("2");
        let output = zipLists(list1, list2)
        expect(output).toEqual("{ 1 } -> { 2 } -> NULL");
    });
    test("Should return a new linked list with nodes from the previous two alternating", () => {
        let list1 = new LinkedList();
        let list2 = new LinkedList();
        let output = zipLists(list1, list2)
        expect(output).toEqual("NULL");
    });
});