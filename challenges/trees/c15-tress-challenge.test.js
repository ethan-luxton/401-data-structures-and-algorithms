'use strict';

const {BST, BinaryTree, Node} = require('./c15_trees')

describe("Binary Tree", () => {
    
    test("Instantiate new empty tree.", () => {
        const tree = new BinaryTree();
        
        expect(tree).toEqual({root: null});
    });
    test("Instantiate new tree with a root node.", () => {
        const tree = new BinaryTree(15);
        
        expect(tree).toEqual({root: 15});
    });
    test("Add left and right child properly to a node", () => {
        let node = new BST(new Node(15));
        node.add(5);
        node.add(16);
        expect(node.root.left.value).toEqual(5);
        expect(node.root.right.value).toEqual(16);
        
    });
    test("Return a collection from a preorder traversal", () => {
        let node = new BST(new Node(15));
        node.add(5);
        node.add(16);
        expect(node.preOrder()).toEqual([15, 5, 16]);
    });
    test("Return a collection from a preorder traversal", () => {
        let node = new BST(new Node(5));
        node.add(2);
        node.add(4);
        node.add(6);
        expect(node.inOrder()).toEqual([2, 4, 5, 6]);
    });
    test("Return a collection from a postorder traversal", () => {
        let node = new BST(new Node(4));
        node.add(2);
        node.add(7);
        node.add(6);
        expect(node.inOrder()).toEqual([2, 4, 6, 7]);
    });
    test("Returns true/false for the contains method, given an existing or non-existing node value", () => {
        let node = new BST(new Node(4));
        node.add(2);
        node.add(7);
        node.add(6);
        expect(node.contains(2)).toBe(true);
        expect(node.contains(10)).toBe(false);
    });

    
});