class Node{
    constructor({value, priority}){
        this.value = value;
        this.priority = priority;
    }
}

// * Nothing but the Min Binary heap implementation
// * The root data was serverd with maximum priority (i.e removing the root element and fixing the heap )
class PriorityQueue {
    constructor() {
        // the values array stores the node, instead of flat values.
        this.values = [];
    }

    // * enqueue - pushing the data into the heap
    enqueue(node){
        this.values.push(node);

        // * if length is 1, then already a root
        if(this.values.length === 1) return;

        let currentElementIdx = this.values.length - 1;
        let currentElementParentIdx = Math.floor((currentElementIdx - 1) / 2);

        // Iterating to determine if the parent is less priority than the data
        while(currentElementParentIdx >= 0 && currentElementParentIdx < this.values.length && this.values[currentElementParentIdx].priority > node.priority){
            // Swap
            [this.values[currentElementIdx], this.values[currentElementParentIdx]] = [this.values[currentElementParentIdx], this.values[currentElementIdx]]
            currentElementIdx = currentElementParentIdx;
            currentElementParentIdx = Math.floor((currentElementIdx - 1) / 2);
        }
    }

    dequeue(){
        if(this.values.length === 0) return null;
        if(this.values.length === 1) {
            return this.values.pop()
        }

        let highPriorityNode = this.values[0];
        let endNode = this.values.pop();

        this.values[0] = endNode;

        this.bubbleDown();
        return highPriorityNode;
    }

    bubbleDown(){
        let currentIdx = 0;
        let currentElementValue = this.values[currentIdx];
        let length = this.values.length;
        
        while(true){
            let leftChildIdx = (2 * currentIdx) + 1;
            let rightChildIdx = (2 * currentIdx) + 2;
            let swapIdx = null;

            if(leftChildIdx < length){
                let leftChildValue = this.values[leftChildIdx];

                if(leftChildValue.priority < currentElementValue.priority){
                    swapIdx = leftChildIdx
                }
            }

            if(rightChildIdx < length){
                let rightChildValue = this.values[rightChildIdx];

                if(
                    (swapIdx === null && rightChildValue.priority < currentElementValue.priority) ||
                    (swapIdx !== null && rightChildValue.priority < this.values[swapIdx].priority)
                ){
                    swapIdx = rightChildIdx
                }
            }

            if(swapIdx === null) break;

            this.values[currentIdx] = this.values[swapIdx];
            this.values[swapIdx] = currentElementValue;

            currentIdx = swapIdx;
        }
    }
}

const pq = new PriorityQueue();

// minBinaryHeap.insert(27);

//  [
//   { value: 41, priority: 3 },
//   { value: 37, priority: 4 },
//   { value: 65, priority: 5 }
// ]
// [ { value: 65, priority: 5 }, { value: 37, priority: 4 } ]

pq.enqueue({value: 41, priority: 3})
pq.enqueue({value: 79, priority: 2})
pq.enqueue({value: 90, priority: 1})
pq.enqueue({value: 37, priority: 4})
pq.enqueue({value: 65, priority: 5})

console.log(pq.values)
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.dequeue())
console.log(pq.values)