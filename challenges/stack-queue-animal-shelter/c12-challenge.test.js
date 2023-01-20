'use strict';

const AnimalShelter = require('./c12_animal-shelter-queue')

describe("Animal Shelter", () => {
    test("Should return a new string with the queue in {x} -> {y} -> {z} -> null format", () => {
        let newQueue = new AnimalShelter();
        newQueue.enqueue("dog");
        newQueue.enqueue("cat");
        newQueue.enqueue("dog");
        
        let output = newQueue.toString()
        expect(output).toEqual("{ dog } -> { cat } -> { dog } -> NULL");
    });
    test("Should sucessfully dequeue  out of a queue the expected value", () => {
        let newQueue = new AnimalShelter();
        newQueue.enqueue("cat");
        newQueue.enqueue("cat");
        newQueue.enqueue("dog");
        let value = newQueue.dequeue("dog");
        let output = newQueue.toString();
        
        expect(value).toEqual("dog");
        expect(output).toEqual("{ cat } -> { cat } -> NULL");
        
    });
    test("Should sucessfully dequeue out of a queue the expected value", () => {
        let newQueue = new AnimalShelter();
        newQueue.enqueue("dog");
        newQueue.enqueue("cat");
        newQueue.enqueue("dog");
        newQueue.dequeue("dog");
        newQueue.dequeue("cat");
        newQueue.dequeue("dog");
        let output = newQueue.toString();
        
        
        expect(output).toEqual("NULL");
        
    });
    test("Should return null if dog or cat is not provided", () => {
        let newQueue = new AnimalShelter();
        newQueue.enqueue("dog");
        newQueue.enqueue("cat");
        newQueue.enqueue("dog");
        let value = newQueue.dequeue("bird");
        console.log(value)
        let output = newQueue.toString();
        expect(value).toEqual(null);
        expect(output).toEqual("{ dog } -> { cat } -> { dog } -> NULL");
        
    });

    
});