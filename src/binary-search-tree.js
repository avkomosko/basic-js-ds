const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  
  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      return (this._root = new Node(data));
    } else {
      debugger
      return this._root = insertNode(this._root, data);
    }

    function insertNode(node, data) {
      if (!node)  {
        return new Node(data);
      } 

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = insertNode(node.left, data);
      } else {
        node.right = insertNode(node.right, data);
      }
      debugger;
      return node;

    }
  }

  has(data) {
    return searchData(this._root, data);

    function searchData(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? searchData(node.left, data) : searchData(node.right, data);
    }
  }

  find(data) {
    if (!this.has(data)) {
      return null;
    } else {
      return findNode(this._root, data);
    }
    
    function findNode(node, data) {
      if (node.data === data) {
        return node;
      } 
      return data < node.data ? findNode(node.left, data) : findNode(node.right, data);
    }

  }

  remove(data) {
   
  }

  min() {
    
  }

  max() {
    
  }

}