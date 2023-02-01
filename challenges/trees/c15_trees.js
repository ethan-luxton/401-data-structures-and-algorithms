"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let result = [];

    let _walk = (node) => {
      result.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      return;
    };

    _walk(this.root);
    return result;
  }

  postOrder() {
    let result = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      result.push(node.value);
      return;
    };

    _walk(this.root);
    return result;
  }
  inOrder() {
    let result = [];

    let _walk = (node) => {
      if (node.left) _walk(node.left);
      result.push(node.value);
      if (node.right) _walk(node.right);
      return;
    };

    _walk(this.root);
    return result;
  }
}

class BST extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(number) {
    let newNode = new Node(number);
    if (!this.root) {
      this.root = newNode;
    } else {
      _walk(this.root, newNode);
    }

    function _walk(current, newNode) {
      if (newNode.value < current.value) {
        if (current.left) _walk(current.left, newNode);
        else current.left = newNode;
      }
      if (newNode.value > current.value) {
        if (current.right) _walk(current.right, newNode);
        else current.right = newNode;
      }
      return;
    }
  }

  contains(number) {
    if (!this.root) return false;
    else return _walk(this.root, number);

    function _walk(current, number) {
      if (number === current.value) return true;
      else if (number > current.value) {
        if (current.right) {
          return _walk(current.right, number);
        } else {
          return false;
        }
      } else if (number < current.value) {
        if (current.left) {
          return _walk(current.left, number);
        }
        return false;
      }
    }
  }
}
module.exports = {BST, BinaryTree, Node}
