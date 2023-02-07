



function breadthFirst(treeRoot) {
    const result = [];
    if (!treeRoot) {
      return result;
    }
  
    const queue = [treeRoot];
    
    while (queue.length) {
        console.log(queue)
      const node = queue.shift();
      result.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }




module.exports = breadthFirst;