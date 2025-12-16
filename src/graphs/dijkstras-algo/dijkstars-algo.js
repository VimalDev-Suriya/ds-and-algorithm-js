class Node{
    constructor({value, priority}){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    enqueue(data){
        this.values.push(data);

        if(this.values.length === 1) return;

        // * bubbling up the data.
        let currentElementIdx = this.values.length - 1;
        let currentElementValue = this.values[currentElementIdx];
        let currentElementParentIdx = Math.floor((currentElementIdx - 1 ) / 2);

        // logic
        // if parent is greater than child , i need to swap
        // For current Element => idx will change - value wont change
        // For parent => both idx & value will change
        while(currentElementParentIdx >= 0 && currentElementValue.priority < this.values[currentElementParentIdx].priority){
            [this.values[currentElementParentIdx], this.values[currentElementIdx]] = [this.values[currentElementIdx], this.values[currentElementParentIdx]];
            currentElementIdx = currentElementParentIdx;
            currentElementParentIdx = Math.floor((currentElementIdx - 1 ) / 2); // math.floor(-1/2) return -1 (to restrict this I added the gurad to have parentindex greater than & equal to 0)
        }
    }

    dequeue(){
        if(this.values.length === 0) return null;

        if(this.values.length === 1) return this.values.pop();

        const highestPriority = this.values[0];
        const lastElement = this.values.pop();

        this.values[0] = lastElement;

        this.bubbleDown();

        return highestPriority;
    }

    bubbleDown(){
        let currentElementIdx = 0;
        let currentElementValue = this.values[currentElementIdx];
        let len = this.values.length;

        while(true){
            let currentElementLeftChildIdx = (2 * currentElementIdx) + 1;
            let currentElementRightChildIdx = (2 * currentElementIdx) + 2;
            let swapIdx = null;

            if(len > currentElementLeftChildIdx){
                let leftChildValue = this.values[currentElementLeftChildIdx];

                if(leftChildValue.priority < currentElementValue.priority){
                    swapIdx = currentElementLeftChildIdx
                }
            }

            if(len > currentElementRightChildIdx){
                let rightChildValue = this.values[currentElementRightChildIdx];

                if(
                    (swapIdx === null && rightChildValue.priority < currentElementValue.priority) ||
                    (swapIdx !== null && rightChildValue.priority < this.values[swapIdx].priority )
                ){
                    swapIdx = currentElementRightChildIdx
                }
            }

            if(swapIdx === null) return;

            this.values[currentElementIdx] = this.values[swapIdx];
            this.values[swapIdx] = currentElementValue;

            currentElementIdx = swapIdx;
        }
    }
}

// const pq = new PriorityQueue();
// pq.enqueue({value: 41, priority: 3})
// pq.enqueue({value: 79, priority: 2})
// pq.enqueue({value: 90, priority: 1})
// pq.enqueue({value: 65, priority: 5})
// pq.enqueue({value: 37, priority: 4})
// console.log(pq.values)

// console.log("popped value",pq.dequeue())
// console.log(pq.values)
// console.log("popped value",pq.dequeue())
// console.log(pq.values)
// pq.enqueue({value: 90, priority: 1})
// pq.enqueue({value: 90, priority: 1})
// console.log(pq.values)


class wightedGraph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({
            node:vertex2,
            weight
        });
        this.adjacencyList[vertex2].push({
            node:vertex1,
            weight
        });
    }

    shortestPath(start, end){
        const pq = new PriorityQueue();
        const distances = {};
        const previous = {};
        const finalPath = [];

        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                pq.enqueue({value: vertex, priority: 0})
            }else{
                distances[vertex] = Infinity;
                pq.enqueue({value:vertex, priority:Infinity})
            }

            previous[vertex] = null;
        }

        while(pq.values.length){
            const smallestVertex = pq.dequeue().value;

            if(smallestVertex === end){
                let currentvertexx = smallestVertex;

                while(currentvertexx){
                    finalPath.push(currentvertexx);
                    currentvertexx = previous[currentvertexx]
                }

                console.log('Final result',finalPath);
                console.log('distances', distances)
                console.log('previous',previous)
                break;
            }

            let smallestVertexNeighbors = this.adjacencyList[smallestVertex];

            for(let neighborIdx in smallestVertexNeighbors){
                // * for-in retruns the idx of the each element
                let neighbor = smallestVertexNeighbors[neighborIdx];

                // Aggregating the distance.
                // distance['A'] stores the 0, neighbor "B" weight is "4" => total (0 + 4) = 4
                let newSum = distances[smallestVertex] + neighbor.weight;

                if(distances[neighbor.node] > newSum){
                    // * updating the distance from A -> B as 4, since '4' is smmaler than infinity
                    distances[neighbor.node] = newSum; // updating the shortest distance
                    previous[neighbor.node] = smallestVertex; // shortest way to reach the neighbor

                    pq.enqueue({value:neighbor.node, priority:newSum})
                }
            }
        }
    }
}

const graph = new wightedGraph();

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("D", "C", 2)
graph.addEdge("F", "C", 4)
graph.addEdge("B", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("D", "E", 3)
graph.addEdge("E", "F", 1)

graph.shortestPath("A", "E")