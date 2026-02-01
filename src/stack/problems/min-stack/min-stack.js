/**
 * @fileoverview Implementation of a Min Stack.
 * A Min Stack is a stack that supports push, pop, and retrieving the minimum element in constant time.
 * This implementation uses an auxiliary stack to keep track of the minimum elements.
 * 
 * @version 2.0.0
 * @module stack/problems/min-stack
 * @author Suriya
 * 
 * Data points to be noted:
 * - Stack should support push, pop, top, getMin operations in constant time.
 * - Formula to keep track of minimum element while pushing and popping elements.
 * - while Pushing the data we should use 2*value - currentMin = newValue, under the circumstance when new value is less than prevMin.
 * - While popping the data should be 2*value - newValue = prevMin, under the circumstance when popped value is less than current min.
 * @complexities
 * O(n) -> both time & space complexities
 */

class MinStack {
    constructor() {
        this.stack = [];
        this.length = 0;
        this.min = null;
    }

    push(data) {
        // * If the stack is empty
        if (this.length === 0) {
            this.min = data;
            this.stack.push(data);
            this.length++;
            return;
        }

        // * if the data is greater the min.
        // * No need to validate the min and all are set
        if (data >= this.min) {
            this.stack.push(data);
            this.length++;
            return;
        }

        // We need to add the modified value into stack 
        // Update the min value
        const modifiedValue = (2 * data) - this.min;
        this.min = data; // assigning the data to min
        this.stack.push(modifiedValue);
        this.length++;
        return;
    }

    pop() {
        if (!this.length) return null;

        const topValue = this.stack[this.length - 1];

        // resetting the min value to null, if there no more element going to be in stack
        if (this.length === 1) {
            this.min = null;
        }

        // * We always know that If the modifiedValue is less than the min, then we need to update the min to previousMin.
        if (this.min && topValue < this.min) {
            // * 2* this.min is actually the actual value that we want to push, since we stored the modified value we are using this formula.
            // * determining the previous min
            this.min = (2 * this.min) - topValue; // topValue is actually a modifiedValue
        }

        this.stack.pop();
        this.length--;
    }

    top() {
        if (!this.length) return null;

        // * we know that if the modifiedValue (stack's top) is less than min, then we should return the min value, if not return stack;s top
        const topValue = this.stack[this.length - 1];

        if (topValue < this.min) {
            return this.min;
        } else {
            return topValue;
        }
    }
}

const minStack = new MinStack();

minStack.push(12)
minStack.push(15)
minStack.push(10);
console.log(minStack);
minStack.pop();
console.log('popped the last element');
console.log(minStack);
minStack.push(10);
console.log('pushed the data', minStack)
console.log('top element', minStack.top())
console.log(minStack);
minStack.pop();
minStack.pop();
minStack.pop();
console.log(minStack)