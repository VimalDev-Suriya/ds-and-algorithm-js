/**
 * @fileoverview Implementation of a Min Stack.
 * The stack supports push, pop, top, and retrieving the minimum element in constant time.
 * @module stack/problems/min-stack
 * @author Suriya
 * @version 1.0.0
 * 
 * possible approch to solve the problem
 * Create a stack (going to use array)
 * 1. Iterating over the stack elements and determine the min => O(n)
 * 2. Storing the object which holds the value & min in Stack => Good, but storing the min for each node that we are storing has the SC
 * 3. 
 * 
 * @example
 * const minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * console.log(minStack.getMin()); // Returns -3
 * minStack.pop();
 * console.log(minStack.top());    // Returns 0
 * console.log(minStack.getMin()); // Returns -2
 */

class Stack {
    constructor() {
        this.stack = [];
        this.length = 0;
        this.min = null; // while initiating the stack, we should make all the values as base. It should no include Infinity.
    }

    push(data) {
        if(!this.length){
            this.min = data;
        }else{
            this.min = Math.min(data, this.min);
        }

        this.stack.push({data, min: this.min});

        this.length++;

        return this.length;
    }

    pop() {
        if(!this.length) return null;

        this.length--;
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.length - 1];
    }

    // O(n) - APproch 1
    // getMin() {
    //     let min = Infinity;

    //     for (let i = 0; i < this.length; i++) {
    //         let ele = this.stack[i];

    //         min = Math.min(ele, min);
    //     }

    //     return min;
    // }

    getMin(){
        return this.peek().min;
    }
}

const stack = new Stack();

stack.push(2);
stack.push(3)
stack.push(1)
stack.push(4);
stack.push(-1);

console.log('stack', stack.peek());
stack.pop()
console.log('stack', stack.peek());
stack.pop()
console.log('get Min', stack.getMin())
console.log('stack', stack.peek());
stack.pop()
console.log('get Min', stack.getMin())
