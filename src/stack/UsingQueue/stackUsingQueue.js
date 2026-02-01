class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0;
  }

  push(data){
    const newNode = new Node(data);

    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.length++;
    return this.head;
  }

  pop(){
    if(!this.head){
      return null;
    }

    const currentNode = this.head;
    const newHead = currentNode.next;

    currentNode.next = null;
    this.head = newHead;
    this.length--;

    if(this.length === 0){
      this.tail = this.head;
    }

    return currentNode;
  }
}

class StackUsingQueue{
  constructor(){
    this.queue = new Queue();
    this.length = 0;
  }

  push(data){
    if(this.length === 0){
      this.queue.push(data);
      this.length++;
      return this.queue;
    }

    this.queue.push(data);
    this.length++;

    // * Here I am simply iterating through the existing queue
    // * Popping the element and adding them again into the Queue
    // * So it act as the Stack
    // Eg -> consider the queue [1, 2]; If this want to act as stack, while popping out we need to remove the 2, but to remove '2' we need to remove 1.
    // So we are looping into this queue, picking up the 1 and adding at the back of queue.
    // [2, 1], so while popping out, we will get 2 out (which was recently added)
    for(let i=0; i<this.length-1; i++){
      const node = this.queue.pop();
      this.queue.push(node.value);
    }

    return this.queue;
  }

  pop(){
    if(this.length === 0) return null;

    this.length--;
    return this.queue.pop();
  }
}
