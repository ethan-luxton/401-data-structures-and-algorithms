const Hashtable = require('../hashtable/c30_hashtable')

function tree_intersection(tree1, tree2) {
    const hashmap = new Hashtable(100);
    const result = new Set();
  
    function traverseAndStore(node) {
      if (node === null) return;
  
      hashmap.set(node.value, true);
      traverseAndStore(node.left);
      traverseAndStore(node.right);
    }
  
    function traverseAndCompare(node) {
      if (node === null) return;
  
      if (hashmap.has(node.value)) {
        result.add(node.value);
      }
      traverseAndCompare(node.left);
      traverseAndCompare(node.right);
    }
  
    traverseAndStore(tree1.root);
    traverseAndCompare(tree2.root);
  
    return result;
}

module.exports = tree_intersection