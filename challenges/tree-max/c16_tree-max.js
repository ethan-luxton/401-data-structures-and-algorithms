const { BST } = require('../trees/c15_trees');

class maxTree extends BST {
    constructor(root) {
        super(root);
    };
    findMax() {
        console.log(this.root)
        let maxRight = 0;
        let maxLeft = 0;
        let prev = 0;
        let _walk = (node) => {
            
            if (node.left !== null && node.left.value < prev) {
                prev = node.left.value
                _walk(node.left);
            } else if (node.left !== null) {
                maxLeft = node.left.value
            }
            if (node.right !== null && node.right.value < prev) {
                prev = node.right.value
                _walk(node.right);
            } else if (node.right !== null) {
                maxRight = node.right.value
            }
            
            return maxLeft > maxRight ? maxLeft : maxRight
        }
        return _walk(this.root) > this.root.value ? _walk(this.root) : this.root.value;
        
    };
    

};

module.exports = maxTree;