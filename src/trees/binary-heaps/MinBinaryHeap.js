class MinBinaryHeap{
    constructor(){
        this.values = [];
    }

    insert(data){
        this.values.push(data);

        if(this.values.length === 1) return;

        let currentIdx = this.values.length - 1;
        let currentParentIdx = Math.floor((currentIdx - 1) / 2);

        while(this.values[currentParentIdx] > data){
            [this.values[currentParentIdx], this.values[currentIdx]] = [this.values[currentIdx], this.values[currentParentIdx]];
            currentIdx = currentParentIdx;
            currentParentIdx = Math.floor((currentIdx - 1)/2);
        }

        return this.values;
    }

    extractMin(){
        //* Empty array
        if(!this.values.length) return null;
        if(this.values.length === 1) this.values.pop();

        let minValue = this.values[0];
        let endValue = this.values.pop();

        this.values[0] = endValue;
        //*  fix the heap;
        this.bubbleDown()
        return minValue;
    }

    bubbleDown(){
        let currentElementIdx = 0;
        let currentElementValue = this.values[currentElementIdx];
        const heapLength = this.values.length - 1;

        while(true){
            let leftChildIdx = (2 * currentElementIdx) + 1;
            let rightChildIdx = (2 * currentElementIdx) + 2;
            let swapIdx = null;

            if(leftChildIdx < heapLength){
                let leftChildValue = this.values[leftChildIdx];

                if(leftChildValue < currentElementValue){
                    swapIdx = leftChildIdx
                }
            }

            if(rightChildIdx < heapLength){
                let rightChildValue = this.values[rightChildIdx];
                if(
                    (swapIdx === null && rightChildValue < currentElementValue) ||
                    (swapIdx !== null && rightChildValue < this.values[swapIdx])
                ){
                    swapIdx = rightChildIdx
                }
            }

            if(swapIdx === null) break;

            this.values[currentElementIdx] = this.values[swapIdx];
            this.values[swapIdx] = currentElementValue;

            currentElementIdx = swapIdx;
        }
    }
}

const minBinaryHeap = new MinBinaryHeap();

minBinaryHeap.insert(41);
minBinaryHeap.insert(39);
minBinaryHeap.insert(12);
minBinaryHeap.insert(55);
minBinaryHeap.insert(18);
minBinaryHeap.insert(27);

// Final response: [ 12, 18, 27, 55, 41, 39 ]

console.log(minBinaryHeap.values);
console.log("Min value = ",minBinaryHeap.extractMin())
console.log(minBinaryHeap.values);