class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

/**
 * Big O Notation
 * 
 * push O(1)
 * pop O(n)
 * shift O(1)
 * unshift O(1)
 */

// https://visualgo.net/en/list?slide=1
class SinglyLinkedList {
    constructor(){
        this.head = null;
        // Tail to track the last element in the LL. (We will highly use this only in DLL)
        this.tail = null
        this.length = 0;
    }

    // * Push should not iterate over the loop, the big ) should be O(1)
    push(data) {
        // * Create a new node with the data;
        const newNode = new Node(data);

        //* IF there is no head or empty LL, then assign the head & tail as the new node
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            //* ELSE, assign the tail.next to newNode and assign the newNode as tail.
            this.tail.next = newNode; //* adding the newNode next to the tail
            this.tail = newNode; // assigning the new node as tail
        }

        this.length++;
        return this;
    }

    // * Good Solution
    // pop(){
    //     // No Head
    //     if(!this.head) return undefined;

    //     // * Only head
    //     if(this.head.next === null){
    //         this.head = null;
    //         this.tail = null;
    //         this.length = 0
    //         return this;
    //     }

    //     let current = this.head;

    //     // * Finding one before last element
    //     while(current.next.next !== null){
    //         current = current.next;
    //     }

    //     current.next = null;
    //     this.tail = current;
    //     this.length--;
    // }

    //* Better Solution; (O(n) - 2 pointers)
    pop(){
        // * If there is no head
        if(!this.head) return undefined;

        if(this.head.next === null){
            this.head = null;
            this.tail = null;
            this.length = 0
            return this;
        }

        let current = this.head; // Current node 
        let newTail = current; // Initially setting the newTail as the first element

        //* Need to find the last before element
        while(current.next){
            newTail = current;
            current = current.next;
        }

        //* Assigining the last before element as new tail
        this.tail = newTail;
        //* assiging null to the tail.next
        this.tail.next = null
        //* decresing the length by 1
        this.length--;
    }

    // * removing the first element (O(1))
    shift(){
        if(!this.head) return undefined;

        let currentHead = this.head; // Getting the current head
        const newHead = currentHead.next; // Getting the new Head

        this.head = newHead; // assign the new Head to the original head
        this.length--;

        //* If length is 0, then removing the tail
        if(!this.length){
            this.tail = null
        }
        return currentHead;
    }

    // * Adding the element at the first. (O(1))
    unshift(data){
        const newNode = new Node(data);

        if(!this.head) {
            this.head = this.tail = newNode;
            this.length++;
            return;
        }

        let current = this.head;

        newNode.next = current;
        this.head = newNode;
        this.length++;

        return this;
    }

    // * get the node for the position passed
    get(pos){
        if(!this.head) return undefined;

        if(pos < 0 || pos > this.length){
            return undefined
        }

        let current = this.head;
        let count = 0;

        while(current.next){
            if(count === pos){
                break
            }

            count++;
            current = current.next;
        }

        return current;
    }

    set(pos, data){
        // position validation
        if(pos < 0 || pos >= this.length){
            return null
        }

        // data validation
        if(data === null || data === undefined){
            return null
        }

        const node = this.get(pos);

        if(node){
            node.value = data;
            return true
        }

        return false;
    }

    insert(pos, data){
        if(pos > this.length || pos < 0){
            return null
        }

        const newNode = new Node(data);

        // * Adding the data at front
        if(pos === 0){
            return this.unshift(data);
        }

        if(pos === this.length){
            return this.push(data);
        }

        //* Find the previous node position where the new data to be inserted
        const previousPosNode = this.get(pos - 1);
        
        newNode.next = previousPosNode.next;
        previousPosNode.next = newNode;
        this.length++;

        return this.head;
    }

    remove(pos){
        // Guard for invalid inputs
        if(pos < 0 || pos > this.length){
            return undefined
        }
        // logic for 1st and last node removal
        if(pos === 0){
            return this.shift()
        }

        if(pos === this.length){
            return this.pop()
        }

        let current = this.head;
        let counter = 0;
        let prevNode = current;

        while(current.next){
            if(pos === counter){
                break;
            }

            counter++;
            prevNode = current;
            current = current.next;
        }
        
        prevNode.next = current.next;
        current.next = null;
        this.length--;
    }

    reverse(){
        // Eg
        // 1 -> 2 -> 3 -> 4
        // 1 <- 2 <- 3 <- 4
        // We are just rerouting the nextNodes

        // * 3 Main pointers
        // 1. currentNode -> holds the node where we need to perform the operation
        // 2. next -> to hold the next Node of the currentNode, to navigate after the re-routing
        // 3. prev -> a new next node of the reversed LL. 
        
        let currentNode = this.head;

        //* Swapping the head and tail of the LL
        this.head = this.tail;
        this.tail = currentNode;

        // * As we know the last node of LL will always be null, since the prevNode will be the last node so I am assigning to null.
        let prevNode = null; // * this will be the next for the reversed LL
        let nextNode; // * this is the next of the original LL.

        // * looping through the LL till the curentNode becomes null, i.e last node.
        while(currentNode){
            // Moving the next node of the current node in nextNode variable.
            // * here we are simply storing the currentNode's reference to the nextNode, so that we can moveon through the LL, even after tampering the next value of current node.
            nextNode = currentNode.next;

            // **Routing** the currentNode.next to the prevNode (Tampering of next node)
            // Initially it will be null, since the last node's next is always null
            // When the loop goes through, it will actual next of the reversed LL.
            currentNode.next = prevNode;

            // Moving the prevNode pointer to the current node 
            prevNode = currentNode;

            // Moving the currentNode to the nextNode, which we stored at the first.
            currentNode = nextNode;
        }
    }
}

const sl1 = new SinglyLinkedList();

sl1.push('hello');
sl1.push('there');
sl1.push('!');
// console.log('ll', JSON.stringify(sl1))
// sl1.pop();
// sl1.shift();
// sl1.shift();
// sl1.shift();
// sl1.unshift('Hi')
// console.log(sl1.get(0))
// console.log(sl1.get(1))
// console.log(sl1.get(2))
// console.log('length', sl1.length)
// sl1.insert(3, 'dude')
// console.log('ll', JSON.stringify(sl1));
// sl1.insert(0, 'dude')
// sl1.remove(0);
sl1.reverse();
console.log('ll', JSON.stringify(sl1));