'use strict';

const Queue = require('./c10_queue')

describe("zipLists", () => {
    test("Should return a new string with the queue in {x} -> {y} -> {z} -> null format", () => {
        let newQueue = new Queue();
        newQueue.enqueue("1");
        newQueue.enqueue("2");
        newQueue.enqueue("3");
        
        let output = newQueue.toString()
        expect(output).toEqual("{ 1 } -> { 2 } -> { 3 } -> NULL");
    });
    test("Should sucessfully dequeue  out of a queue the expected value", () => {
        let newQueue = new Queue();
        newQueue.enqueue("1");
        newQueue.enqueue("2");
        newQueue.enqueue("3");
        let value = newQueue.dequeue();
        let output = newQueue.toString();
        
        expect(value).toEqual("1");
        expect(output).toEqual("{ 2 } -> { 3 } -> NULL");
        
    });
    test("Should successfully peek into a queue, seeing the expected value", () => {
        let newQueue = new Queue();
        
        newQueue.enqueue("1");
        newQueue.enqueue("2");
        newQueue.enqueue("3");
        let value = newQueue.peek()
        expect(value).toEqual("1");
    });

    test("Should successfully empty a queue after multiple dequeues", () => {
        let newQueue = new Queue();
        
        newQueue.enqueue("1");
        newQueue.enqueue("2");
        newQueue.enqueue("3");
        newQueue.dequeue();
        newQueue.dequeue();
        newQueue.dequeue();
        let output = newQueue.toString()
        expect(output).toEqual("NULL");
    });

    test("Should successfully instantiate an empty queue", () => {
        let newQueue = new Queue();
        let output = newQueue.toString()
        expect(output).toEqual("NULL");
    });

    test("Calling dequeue or peek on empty queue raises exception", () => {
        let newQueue = new Queue();
        expect(() => {
            newQueue.dequeue();
        }).toThrow("Queue is Empty");
    });
});