class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

// create the queue
class Queue{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null
    }

    enqueue(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
            this.length++;
            return
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    // * popping out the first data (from teh front) 
    dequeue(){
        if(!this.head) return null;

        let currentNode = this.head;
        let newHead = currentNode.next;

        currentNode.next = null
        this.head = newHead;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }

        return currentNode;
    }
}

class BinarySearchTreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// create the BST
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode = new BinarySearchTreeNode(data);

        if(!this.root) {
            this.root = newNode;
            return this.root
        }

        let currentNode = this.root;

        while(currentNode){
            if(currentNode.value === data) return "already found";

            if(data < currentNode.value){

                if(currentNode.left){
                    currentNode = currentNode.left;
                    continue;
                }

                currentNode.left = newNode;
                break;
            }

            if(data > currentNode.value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                    continue;
                }

                currentNode.right = newNode;
                break;
            }
        }

        return this.root;
    }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(4);
bst.insert(6);
bst.insert(20)
bst.insert(14);

// console.log(JSON.stringify(bst))
// create a traverse function

class BreadthFirstSearch{
    traverse(root){
        let queue = new Queue();
        let visistedNodes = [];
        let currentNode = root

        //* pushing the root data into the queue
        queue.enqueue(currentNode);

        while(queue.length !== 0){
            currentNode = queue.dequeue();

            visistedNodes.push(currentNode);
            if(currentNode.value.left) queue.enqueue(currentNode.value.left);
            if(currentNode.value.right) queue.enqueue(currentNode.value.right)
        }

        visistedNodes.forEach(node => {
            console.log('node', node.value)
        })

        return visistedNodes;
    }
}

const bfs = new BreadthFirstSearch();

bfs.traverse(bst.root);