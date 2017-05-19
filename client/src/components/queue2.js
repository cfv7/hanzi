let queue = new Object({})


import React from 'react';

export default class Queue {
  constructor(array) {
    this.first = null;
    this.last = null;

    array.forEach(item => this.enqueue(item))
  }
createNode(data = null, next = null, prev = null) {
  return {
    data,
    next,
    prev
  };
}
swapFirstAndLast(queue) {
  let value = queue.first.data;
  queue.dequeue();
  queue.enqueue(value);
}

  toArray() {
    const array = []
    let node = this.first

    while (node.prev) {
      array.push(node)
      node = node.prev
    }

    // Last node.
    array.push(node)

    return array
  }

  sendBack(num) {
    let wrongNode = this.first;
    let node = this.first;
    for (let i = 0; i < num; i++) {
      node = node.prev;
      // console.log('STOP HERE ->',node)
    }
    this.first = this.first.prev
    this.first.next = null
    wrongNode.next = node;
    wrongNode.prev = node.prev;
    node.prev = wrongNode
    node.prev.next = wrongNode

    // Original:
    // ====> previous
    // [a, b, c, d, e]

    // Expected:
    // [b, c, d, a, e]
  }

  enqueue(data) {
    const node = this.createNode(data);

    if (this.last) {
      node.next = this.last;
      this.last.prev = node;
    }

    this.last = node;

    if (this.first === null) {
      this.first = node;
    }
  }

  dequeue() {
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = node.prev;

    if (node === this.last) {
      this.last = null;
    }

    return node.data;
  }


  render(){
    return(
      <h1>Hello</h1>
    )
  }




}


// let q = new Queue(['x', 'y', 'z'])
// q.enqueue('a')
// q.enqueue('b')
// q.enqueue('c')
// q.enqueue('d')
// q.enqueue('e')

// q.sendBack(2)
// swapFirstandLast(q);

// Log out the Queue:
// console.log(q.toArray())
