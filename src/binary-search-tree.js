const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {

  constructor() {
    this.data = null;
  }

  root() {
    return this.data;
  }

  add(data) {

    const treeNode = new Node(data);

    if (this.data === null) {
      this.data = treeNode;
      return;
    }

    this.addTreeNode(this.data, treeNode);

  }

  addTreeNode(node, treeNode) {
    // if (treeNode.data < node.data) {
    //   if (node.left === null) {
    //     node.left = treeNode;
    //     return;
    //   }
    //   this.addTreeNode(node.left, treeNode);
    //   return;
    // }

    // if (node.right === null) {
    //   node.right = treeNode;
    //   return;
    // }
    // this.addTreeNode(node.right, treeNode);

    if (treeNode.data < node.data) {
      this.addTreeNodeLeft(node, treeNode);
    } else {
      this.addTreeNodeRight(node, treeNode);
    }

  }

  addTreeNodeLeft(node, treeNode) {
    if (node.left === null) {
      node.left = treeNode;
      return;
    }
    this.addTreeNode(node.left, treeNode);
  }

  addTreeNodeRight(node, treeNode) {
    if (node.right === null) {
      node.right = treeNode;
      return;
    }
    this.addTreeNode(node.right, treeNode);
  }

  has(value) {

    let elem = this.data;
    while (elem !== null) {
      if (elem.data === value) {
        return true;
      }

      if (value < elem.data) {
        elem = elem.left;
      } else {
        elem = elem.right;
      }

    }
    return false;
  }

  find(value) {
    return this.findNode(this.data, value);
  }

  findNode(treeNode, value) {
    if (treeNode === null) {
      return treeNode;
    }

    if (treeNode.data === value) {
      return treeNode;
    }

    if (value < treeNode.data) {
      return this.findNode(treeNode.left, value);
    } else {
      return this.findNode(treeNode.right, value);
    }
  }


  remove( /* data */ ) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let min = this.data;
    while (min.left !== null) {
      min = min.left;
    }
    return min.data;
  }

  max() {
    let max = this.data;
    while (max.right !== null) {
      max = max.right;
    }
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};