const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor(){
    this.queneFront = null;
    this.queneBack = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let current = this.queneFront;
    while (current) {
      current = current.next;
    }
    return this.queneFront;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (!this.queneFront) {
      this.queneFront = newNode;
      this.queneBack = newNode;
    } else {
      this.queneBack.next = newNode;
      this.queneBack = newNode;
    }

    return this.length++;
  }

  dequeue() {
    let current = this.queneFront;
    if(this.queneFront === this.queneBack) {
      this.queneBack = null;
    }

    this.queneFront = this.queneFront.next;
    this.length--;

    return current;
  }

}
