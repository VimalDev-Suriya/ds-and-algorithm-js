# Stack

Stack is the Linear DS, which follows `Last in First Out (LIFO)`. It includes 3 main functionalitues
1. Push - adding the data
2. Pop - removing the data
3. Peek - Getting the first data [not removing] [this actually a top pointer]

In Stack we usually use only 1 pointer called as top. Because we know that we will push data into stack and while popping out we are more concerned to remove the lastly added.

## Why do we need stack?
### vs Array & Linked List:
In Arrays/Linked List can help us to do "random access", means I can manipulate anything inbetween them. But Stacks help us to prevent this since we can push/pop only at top.

#### Logical fit reversal:
When we need to undo/redo, backtracking [accessing the before elements in array] we highly use stack

## Patterns using Stack
1. Monotonic - maintaning the order(ascending/decending) while pushing the data into stack
2. Expression evaluation - basic calculator
3. Stack undo operations
