class Stack{
    constructor(){
        // * the top pointer always points to the last element that was pushed, becaue the stacks are the DS that supports Last In First Out (LIFO)
        this.top = 0;
        this.stack = [];
    }

    push(data){
        // * Below approch wont work, because the top should always point at the last element that was pushed,
        //  but the below one will make the top to point the next index (future index)
        // this.stack[this.top] = data;
        // this.top++;
        // return this.top;

        this.top++;

        this.stack.push(data);
        // OR
        // this.stack[this.top - 1] = data;
        // OR
        // this.stack[this.stack.length - 1] = data;
    }

    pop(){
        this.top--;

        // this.stack.length = this.top;
        // OR
        this.stack.pop();
    }
}

const stackl = new Stack();

stackl.push(10)
stackl.push(20)
stackl.push(30)
stackl.push(40);
stackl.pop()
console.log(stackl);