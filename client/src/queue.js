function createNode(data = null, next = null, prev = null) {
  return {
    data,
    next,
    prev
  };
}
export function swapFirstAndLast(queue) {
  let value = queue.first.data.meaning;
  console.log('VALUE', value);
  queue.dequeue();
  queue.enqueue(value);
  return queue;
}
export function sendBack(queue, num){
    let wrongNode = queue.first;
    let node = queue.first;
    for (let i = 0; i < num; i++) {
      node = node.prev;
      // console.log('STOP HERE ->',node)
    }
    queue.first = queue.first.prev
    queue.first.next = null
    wrongNode.next = node;
    wrongNode.prev = node.prev;
    node.prev = wrongNode
    node.prev.next = wrongNode
    return queue;
}
  
export default class Queue {
  constructor(array) {
    this.first = null;
    this.last = null;

    array.forEach(item => this.enqueue(item))
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
  }


  enqueue(data) {
    const node = createNode(data);

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
