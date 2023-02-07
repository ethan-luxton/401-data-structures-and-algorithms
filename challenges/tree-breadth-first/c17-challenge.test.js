const { BST } = require("../trees/c15_trees");
const breadthFirst = require("./c17_tree-breadth-first");
const {Node} = require('../trees/c15_trees');

describe("Binary Tree Breadth First", () => {
    
    test("Test interesting case", () => {
        let bTree = new BST();
        bTree.add(71);
        bTree.add(2);
        bTree.add(11);
        bTree.add(6);
        bTree.add(8);
        bTree.add(101);
        expect(breadthFirst(bTree.root)).toEqual([71, 2, 101, 11, 6, 8])
        
    });
    test("Test zero case", () => {
        let bTree = new BST();
        expect(breadthFirst(bTree.root)).toEqual([]);
    });
    
    test("Test simple case", () => {
        let bTree = new BST();
        bTree.add(2);
        bTree.add(5);
        
        bTree.add(1);
        
        
        expect(breadthFirst(bTree.root)).toEqual([2,1,5]);
    });
    
});