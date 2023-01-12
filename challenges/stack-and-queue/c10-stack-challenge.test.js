const Stack = require('./c10_stack')

describe("zipLists", () => {
    test("Should return a new string with the stack in {x} -> {y} -> {z} -> null format", () => {
        let newStack = new Stack();
        newStack.push("1");
        newStack.push("2");
        newStack.push("3");
        
        let output = newStack.toString()
        expect(output).toEqual("{ 3 } -> { 2 } -> { 1 } -> NULL");
    });
    test("Should sucessfully pop out of a stack the expected value", () => {
        let newStack = new Stack();
        newStack.push("1");
        newStack.push("2");
        newStack.push("3");
        let value = newStack.pop();
        let output = newStack.toString();
        
        expect(value).toEqual("3");
        expect(output).toEqual("{ 2 } -> { 1 } -> NULL");
        
    });
    test("Should successfully peek into a stack, seeing the expected value", () => {
        let newStack = new Stack();
        
        newStack.push("1");
        newStack.push("2");
        newStack.push("3");
        let value = newStack.peek()
        expect(value).toEqual("3");
    });

    test("Should successfully empty a stack after multiple pops", () => {
        let newStack = new Stack();
        
        newStack.push("1");
        newStack.push("2");
        newStack.push("3");
        newStack.pop();
        newStack.pop();
        newStack.pop();
        let output = newStack.toString()
        expect(output).toEqual("NULL");
    });

    test("Should successfully instantiate an empty stack", () => {
        let newStack = new Stack();
        let output = newStack.toString()
        expect(output).toEqual("NULL");
    });

    test("Calling dequeue or peek on empty queue raises exception", () => {
        let newStack = new Stack();
        expect(() => {
            newStack.pop();
        }).toThrow("Stack is Empty");
    });
});