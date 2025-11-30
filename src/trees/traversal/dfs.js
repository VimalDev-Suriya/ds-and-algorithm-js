class BinarySearchTreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.frequency = 0;
    }
}

// create the BST
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new BinarySearchTreeNode(value);

        if(!this.root) {
            this.root = newNode;
            return this.root;
        }

        let currentNode = this.root;

        while(currentNode){
            if(currentNode.value === value) {
                //* we dont need a new node, since node is already present;
                currentNode.frequency++;
                return "already presented"
            }

            if(value < currentNode.value){
                if(currentNode.left) {
                    currentNode = currentNode.left;
                    continue;
                }

                currentNode.left = newNode;
                break
            }

            if(value > currentNode.value){
                if(currentNode.right){
                    currentNode = currentNode.right;
                    continue;
                }

                currentNode.right = newNode;
                break
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

//       10
//    5      15
//  4   6  14  20

// console.log('bst', JSON.stringify(bst))

class DepthFirstSearchPreOrder{
    dfsPreOrder(root){
        let currentNode = root;
        const visitedNodeValues = [];

        const traverse = (node) => {
            visitedNodeValues.push(node.value);

            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }

        traverse(currentNode);
        return visitedNodeValues;
    }
}

const preorderdfs = new DepthFirstSearchPreOrder();

console.log('DFS Pre order', preorderdfs.dfsPreOrder(bst.root));

class DepthFirstSearchPostOrder{
    dfsPostOrder(root){
        let currentNode = root;
        const visitedArray = [];

        const traverse = node => {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visitedArray.push(node.value);
        }

        traverse(currentNode);
        return visitedArray
    }
}

const postorderdfs = new DepthFirstSearchPostOrder();

console.log('DFS post order', postorderdfs.dfsPostOrder(bst.root));

class DepthFirstSearchInOrder{
    dfsinOrder(root){
        let currentNode = root;
        const visitedArray = [];

        const traverse = node => {
            if(node.left) traverse(node.left);
            visitedArray.push(node.value);
            if(node.right) traverse(node.right);
        }

        traverse(currentNode);
        return visitedArray
    }
}

const inorderdfs = new DepthFirstSearchInOrder();

console.log('DFS in order', inorderdfs.dfsinOrder(bst.root));