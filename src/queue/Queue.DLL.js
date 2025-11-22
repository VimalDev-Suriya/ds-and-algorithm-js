class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class Queue{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    // * we can use the combination of push & shift or pop & unshift when we are using DLL
    // we can use push & shift whle we use SLL.
    enqueue(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            let oldHead = this.head;

            newNode.next = oldHead;
            oldHead.prev = newNode;

            this.head = newNode;
        }

        this.length++;
        return this.head;
    }

    // * pop function, removing from the last (THIS IS NOT GOOD APPRCH FOR SLL)
    dequeue(){
        if(!this.head) return undefined;

        if(this.length === 1) {
            this.length = 0;
            this.head = null;
            this.tail = null;
            return
        }

        let oldTail = this.tail;
        let newTail = oldTail.prev;

        newTail.next = null;
        oldTail.prev = null;
        
        this.tail = newTail;
        this.length--;

        return oldTail;
    }
}

const q = new Queue();

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)

// console.log(q);

q.dequeue()
console.log(q);
q.dequeue()
console.log(q);
q.dequeue()
console.log(q);