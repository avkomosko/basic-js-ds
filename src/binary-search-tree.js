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
    if (!this.has(data)) {
      return null;
    } else {
      this._root = removeNode(this._root, data);
    }
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    } 
  }

  min() {
     if (!this._root) {
      return;
    }

    let node = this._root;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
     if (!this._root) {
      return;
    }

    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

}