/**
 * @class Queue
 *
 * Queue follows the `FIRST IN FIRST OUT` principle
 * 
 * The Big O will always be O(1) & O(n) -> Based on the way we use to enqueue & dequeus
 * So using arrays to implement the queue is not the nest practice, so always use the linked list
 *
 * @example
 * initial arr = []
 * push(a)
 * result -> arr = [a]
 * push(b)
 * result -> arr = [a, b]
 * push(c)
 * result -> arr = [a, b, c]
 * pop()
 * result -> arr = [b, c]
 */

class QueueArrayImpl {
  constructor() {
    this.queue = [];
  }

  // * Add the data, we can either add the data at first or last position, but we should always remove the data from the first position (FIRST added data) (FIFO).
  enqueue(data){
    this.queue.push(data);
  }

  dequeue(){
    // * since we pushed the data at last, we should remove the data from first.
    return this.queue.shift();
  }
}

module.exports = {
  QueueArrayImpl,
};
