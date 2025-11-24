class Node {
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubllyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return true;
        }

        // * Since DLL have both prev & next pointer in the single node, its easy to push & pop
        // * we can directly take the last element and pop it out
        let oldTail = this.tail;
        let newTail = oldTail.prev;

        newTail.next = null;
        oldTail.prev = null;

        this.tail = newTail;

        this.length--;

        // * Consider a scenario where DLL has already have 2 element, afetr removing, it will have only one so assigning the tail & head as same.  
        if(this.length === 1){
            this.tail = this.head;
        }

        return true
    }

    // Shift -> removing the data from beginning
    shift(){
        if(!this.head){
            return null
        }

        if(this.length === 1){
            this.head = this.tail = null;
            this.length--;
            return;
        }

        let currentHead = this.head;
        let newHead = currentHead.next;

        currentHead.next = null;
        newHead.prev = null;

        this.head = newHead;
        this.length--;

        return newHead;
    }

    // unshift -> Adding the data from beginning
    unshift(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            let currentHead = this.head;
            newNode.next = currentHead;
            currentHead.prev = newNode;

            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(pos){
        if(pos < 0 || pos >= this.length) return undefined;

        let counter = 0;
        let currentNode = this.head;

        while(currentNode.next){
            if(pos === counter){
                break;
            }

            counter++;
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    set(pos, data){
        if(pos < 0 || pos >= this.length) return false;

        const getNode = this.get(pos);
        getNode.value = data;

        return true
    }

    insert(pos, data){
        if(pos < 0 || pos > this.length) return undefined;

        if(pos === 0){
            return this.unshift(data);
        }

        if(pos === this.length){
            return this.push(data);
        }

        let newNode = new Node(data);
        let pivotNode = this.get(pos - 1);
        let prevCurrentNode = pivotNode.next;

        prevCurrentNode.prev = newNode;
        newNode.next = prevCurrentNode;
        newNode.prev = pivotNode;
        pivotNode.next = newNode;

        this.length++;
        return newNode;
    }
}

const dll = new DoubllyLinkedList();

dll.push(1).push(2);
// console.log(dll);
// dll.pop();
// dll.shift()
// dll.unshift(0);
// dll.set(0, 'test')
dll.insert(1, 'test')
console.log(dll);

