const {BinaryTree, Node} = require('../trees/c15_trees');
const tree_intersection = require('./c32_treeintersection')
describe('Tree Intersection', () => {
    test('Should return an empty set if both trees are empty', () => {
      const tree1 = new BinaryTree();
      const tree2 = new BinaryTree();
  
      expect(tree_intersection(tree1, tree2)).toEqual(new Set());
    });
  
    test('Should return an empty set if one tree is empty', () => {
      const tree1 = new BinaryTree();
      const tree2 = new BinaryTree();
      tree2.root = new Node(5);
  
      expect(tree_intersection(tree1, tree2)).toEqual(new Set());
    });
  
    test('Should return a set of common values in simple trees', () => {
      const tree1 = new BinaryTree();
      tree1.root = new Node(5);
      tree1.root.left = new Node(3);
      tree1.root.right = new Node(7);
  
      const tree2 = new BinaryTree();
      tree2.root = new Node(4);
      tree2.root.left = new Node(3);
      tree2.root.right = new Node(8);
  
      expect(tree_intersection(tree1, tree2)).toEqual(new Set([3]));
    });
  
    test('Should return a set of common values in interesting trees', () => {
      const tree1 = new BinaryTree();
      tree1.root = new Node(5);
      tree1.root.left = new Node(3);
      tree1.root.right = new Node(7);
      tree1.root.left.left = new Node(2);
      tree1.root.left.right = new Node(4);
      tree1.root.right.left = new Node(6);
  
      const tree2 = new BinaryTree();
      tree2.root = new Node(4);
      tree2.root.left = new Node(3);
      tree2.root.right = new Node(8);
      tree2.root.left.left = new Node(1);
      tree2.root.left.right = new Node(6);
  
      expect(tree_intersection(tree1, tree2)).toEqual(new Set([3,4,6]));
    });
  });
 