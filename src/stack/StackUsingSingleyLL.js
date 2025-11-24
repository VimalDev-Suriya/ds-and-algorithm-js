class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/**
 * Since we are using Singly LL, we are using the shift & unshift methods for the stack implementation
 * Because, the stack insert & remove should always be O(1).
 * If we are using Doubly linked list, then we are good to use either push*pop or shift*unsfit.
 */
class StackSinglyLinkedList{
    constructor(){
        this.length = 0;
        this.start = null;
        this.end = null;
    }

    // * Though the name is push, but we are going to add the data at Start of LL, because while doing the pop if we want to pop the last data we should be navifating from the first, that takes O(n).
    // This will not applicable for the Doubly Linked list, because we have tail from where we can pop out
    push(data){
        const newNode = new Node(data);

        if(!this.start){
            this.start = newNode;
            this.end = this.start;
        }else{
            let currentHead = this.start;
            newNode.next = currentHead;
            this.start = newNode;
        }

        // this.length++;

        return ++this.length;
    }

    //* removing the data from top
    pop(){
        if(!this.start) return undefined;

        let oldStartNode = this.start;
        let newStartNode = oldStartNode.next;

        oldStartNode.next = null;
        this.start = newStartNode;

        this.length--;
    }
}

const stk = new StackSinglyLinkedList();

stk.push(1)
stk.push(2)
stk.push(3)
stk.push(4);
stk.pop();
stk.pop();

console.log(stk)