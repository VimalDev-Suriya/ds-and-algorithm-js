// * I am using the Adjaceny list to store the graph.
// * No error hanlding was done
// * we are implementing the undirected graph
class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(this.adjacencyList[vertex]) return;

        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);

        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(v1, v2){
        if(this.adjacencyList[v1]){
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(city => city !== v2);
        }
        if(this.adjacencyList[v2]){
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(city => city !== v1);
        }
    }

    removeVertex(vertex){
        //* Picking up the edges of the vertex that to be deleted,
        //* because, there is a high chance in the graph can have multiple nodes, if we loop over all the vetrex, we are not guranteed that the node that we are going to delete will beadjacent to all the one.
        let vertexToBeRemoved = this.adjacencyList[vertex];

        while(vertexToBeRemoved.length){
            const adjacencyVertex = vertexToBeRemoved.pop();

            this.removeEdge(vertex, adjacencyVertex);
        }
    }

    // * Traversal using DFS
    // * From the graph standpoint, DFS is not going within the children, instead, its going within the adjacents, instead of completing all the adjacents of the current vertex. 
    dfs_recursive(startVertex){
        const visitedVertex = {}; // * to track the visisted vertex
        const result = []; // * to staore the final value
        let adjacencyList = this.adjacencyList;
        
        //* IIF
        (function dfs(vertex){
            // * setting the vertex as visited
            visitedVertex[vertex] = true;
            // * pushing the vertex
            result.push(vertex);

            // * iterating over all the adjacency vertices
            adjacencyList[vertex].forEach(node => {
                // * if not visisted, then calling recursively
                if(!visitedVertex[node]) dfs(node)
            })
        })(startVertex);

        return result
    }

    dfs_iterative(startVertex){
        const stack = [startVertex];
        const results = [];
        const visitedVertex = {};

        visitedVertex[startVertex] = true;

        while(stack.length){
            let currentVertex = stack.pop();
            results.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visitedVertex[neighbor]){
                    visitedVertex[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }

        return results
    }
}

const g1 = new Graph();

g1.addVertex("A")
g1.addVertex("B")
g1.addVertex("C")
g1.addVertex("D")
g1.addVertex("E")
g1.addVertex("F")

g1.addEdge("A", "B")
g1.addEdge("A", "C")
g1.addEdge("B", "D")
g1.addEdge("C", "E")
g1.addEdge("D", "E")
g1.addEdge("D", "F")
g1.addEdge("E", "F");

console.log('recursive DFS', g1.dfs_recursive('A'))
console.log('recursive DFS', g1.dfs_iterative('A'))

//     A
//   /   \
//  B     C
//  |     |
//  D --- E 
//  \     /
//     F
//
//
