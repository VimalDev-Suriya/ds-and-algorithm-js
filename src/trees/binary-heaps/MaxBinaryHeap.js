// * Parent node is always greater that child nodes.
// Max 2 childs since a name binary
class MaxBinaryHeap{
    constructor(){
        // Storing the flattened tree in a array, as the heap is always be balanced unlike the binary sreach tree.
        this.values = [];
    }

    insert(data){
        // Pushing the data into the array
        this.values.push(data);

        if(this.values.length === 1) return;

        let currentNodeIndex = this.values.length - 1;

        // * (n-1)/2 to determine the correspodning parent to the newly added node.
        let parentIndex = Math.floor((currentNodeIndex - 1) /2);

        while(parentIndex >= 0 && this.values[parentIndex] < data){
            [this.values[currentNodeIndex], this.values[parentIndex]] = [this.values[parentIndex], this.values[currentNodeIndex]]
            currentNodeIndex = parentIndex; // assiging the previous parentIndex to currentNode index
            parentIndex = Math.floor((parentIndex - 1) /2); // assigning the new parentIndex 
        }

        return this.values;
    }

    extractMax(){
        // * when heap is empty
        if(!this.values.length){
            return null;
        }

        // * if heap has only one element;
        if(this.values.length === 1){
            return this.values.pop();
        }

        let maxValue = this.values[0];
        let lastValue = this.values.pop();

        // * fixing the MAX heap structure
        this.values[0] = lastValue;
        this.bubbleDown();

        return maxValue;
    }

    bubbleDown(){
        // * Here we are going to compare the parent node to its children 
        // * making sure the parent node is always greater than both of its children (Max Binary heap)

        let currentIdx = 0;
        let currentElement = this.values[currentIdx];
        let length = this.values.length;
        
        while(true){
            let leftChildIdx = (2 * currentIdx) + 1; // to determine the child - 2n + 1 (left child)
            let rightChildIdx = (2 * currentIdx) + 2; //  to determine the child - 2n + 2 (right child)
            let swap = null;

            // * determining whether the leftChildIdx is going beyond the arrays lenghth
            if(leftChildIdx < length){
                let leftChildValue = this.values[leftChildIdx];

                // * comparing value with first left children, if it is greater, then assigning leftChildIdx to swap (a intermediate local variable) 
                if(leftChildValue > currentElement){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                let rightChildValue = this.values[rightChildIdx];

                // 2 Checks
                // (1) If there is no swap (means null), which means current element is greater than leftChildValue so comparing the current Element with rightchild
                // (2) if there is swap (means leftchild is greater than current), then we are comparing it to rightchild, because we should make sure the greatest one.
                if(
                    (swap === null && rightChildValue > currentElement) ||
                    (swap !== null && rightChildValue > this.values[swap])
                ){
                    swap = rightChildIdx;
                }
            }

            // if there is no swap, which means current is greater than both left & right child
            if(swap === null) break;

            // swapping the parent & child with max values
            this.values[currentIdx] = this.values[swap];
            this.values[swap] = currentElement;

            // post swapping the swap idx will hold the position of newly updated node.
            currentIdx = swap;
        }
    }
}

const maxBinaryHeap = new MaxBinaryHeap();

maxBinaryHeap.insert(41);
maxBinaryHeap.insert(39);
maxBinaryHeap.insert(12);
maxBinaryHeap.insert(55);
maxBinaryHeap.insert(18);
maxBinaryHeap.insert(27);

console.log("FINAL",maxBinaryHeap.values)
console.log(maxBinaryHeap.extractMax())
console.log("FINAL",maxBinaryHeap.values)
