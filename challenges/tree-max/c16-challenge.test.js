const {Node} = require('../trees/c15_trees');
const maxTree = require('./c16_tree-max');


describe("Binary Tree Max", () => {
    
    
    test("Test simple case", () => {
        let max = new maxTree(new Node(5));
        max.add(2);
        max.add(71);
        max.add(11);
        expect(max.findMax()).toEqual(71);
    });
    test("Test zero case", () => {
        let max = new maxTree(new Node(0));
        expect(max.findMax()).toEqual(0);
    });
    

    
});