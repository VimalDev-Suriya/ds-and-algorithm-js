class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Binary Search Tree
 * 
 * A Binary tree, where each parent should have max 2 children. The left node's value should always be less that the parent node value and the right node's value should be always greater that parent node's value.
 */
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        const newNode = new Node(data);

        if(!this.root){
            this.root = newNode;
            return this.root
        }

        let currentNode = this.root;

        // * here while loop is just for looping, the condition we pass doesnot have any impact.
        // * the loop was controlled by the break & continue we used.
        while(currentNode){
            // * we can update the below equality logic, as considering a new property in the node as frequency, based on the repetition of data we can increase the frequncy. 
            if(data === currentNode.value) return "already existed";

            if(data < currentNode.value){
                // * left side logic

                // * If there is already a left in here, then we are continuing the loop by assigning the left node as current node.
                // * Why we are not checking the right? Because we know the element is alredy less that the root node, so we dont want to worry about right. This part is just going into the existing left node, not creating.
                if(currentNode.left){
                    currentNode = currentNode.left;
                    continue;
                }

                // * we are creating the new node in left, since the data is less than parent node's value 
                currentNode.left = newNode;
                break;
            }else if(data > currentNode.value){
                // * right side logic;
                if(currentNode.right){
                    currentNode = currentNode.right;
                    continue;
                }

                currentNode.right = newNode;
                break;
            }
        }

        return this;
    }

    // * Very similar to insert.
    find(data){
        if(!this.root) return false;

        let currentNode = this.root;

        while(currentNode){
            if(currentNode.value === data) return currentNode;

            if(data < currentNode.value){
                //* left side

                if(currentNode.left){
                    currentNode = currentNode.left;
                    continue;
                }

                break
            }else if(data > currentNode.value){

                if(currentNode.right){
                    currentNode = currentNode.right;
                    continue
                }

                break
            }
        }

        return false;
    }

    // remove()
}

//       10
//    5     13
// 2   7  11   15

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(2);
// console.log(JSON.stringify(bst));
console.log(bst.find(10))
console.log(bst.find(2));
console.log(bst.find(5));
console.log(bst.find(17));
