class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class StackUsingSLL{
    constructor(){
        this.start = null;
        this.end = null;
        this.top = 0;
    }

    // * adding at the top;
    push(data){
        const newNode = new Node(data);

        if(!this.start){
            this.start = newNode;
            this.end = this.start;
            this.top++;
            return this;
        }

        let currentNode = this.start;
        newNode.next = currentNode;
        this.start = newNode;

        this.top++;
        return this;
    }

    // * removing from the top
    pop(){
        if(!this.start) return null;

        let currentNode = this.start;
        let newStart = currentNode.next;

        currentNode.next = null;
        this.start = newStart;
        this.top--;

        return currentNode;
    }
}

/**
 * Balanced Paranthesis
 * We will get the str of paranthesis, we need to find whether all the opening paranthesis getting the matched closing paranthesis.
 * 
 * @description
 * Here we will use the Stack DS to solve this problem. Why?.
 * Because, we know Stack is LIFO. We can pop out the last element which we pushed into the stack. By keeping this in mind, if we look into the problem.
 * - Whenever we are encountering the closing paranthesis, We are actually validating the corresponding **last** open paranthesis. 
 * - So somehow we need to **get last possible element that was pushed into the array**, so that we can compare that last element to our closing bracket.
 * So we need Stack to get the last element to identify the match.
 * 
 * @param {String} str - A string of paranthesis
 * @returns {Boolean} isBalanced - A a result whether the paranthesis is balanced.
 * 
 * @example
 * ```javascript
 * isBalancedParanthesis("{{}}") // * returns true
 * isBalancedParanthesis("{[]{}}") // * returns true
 * isBalancedParanthesis("[{]}") // * returns false
 * isBalancedParanthesis("{[}") // * returns false
 * isBalancedParanthesis("{[({}([]){})]}") // * returns true
 * ```
 */
const isBalancedParanthesis = str => {
    // * The balanced means everything should have a pair, if not then its already not balanced
    if(!str || str.length % 2 !== 0) return false;

    const stack = new StackUsingSLL();

    for(let i = 0; i < str.length; i++){
        // * Pushing all the opening paranthesis
        if(str[i] === "(" || str[i] === "{" || str[i] === "["){
            stack.push(str[i]);
        }else{
            // * Encountered the closing paranthesise

            //* if stack is empty - return false;
            if(stack.top === 0) return false;

            // * Getting the last pushed opening paranthesis
            const {value: ch} = stack.pop(); // pop return the node.
            
            // Validating the last pushed paranthesis & opening paranthessis
            if((ch === '(' && str[i] !== ")") || (ch=== "{" && str[i] !== "}") || (ch=== "[" && str[i] !== "]")) return false;

            // if((ch === '(' && str[i] === ")") || (ch=== "{" && str[i] === "}") || (ch=== "[" && str[i] === "]")) {
            //    continue;
            // }else{
            //     return false;
            // }
        }
    }

    return true;
}

console.log(`{()} is Balanced? `, isBalancedParanthesis('{()}'))
console.log(`{}() is Balanced? `, isBalancedParanthesis('(){}'))
console.log(`{[])} is Balanced? `, isBalancedParanthesis('{[])}'))
console.log(`{ is Balanced? `, isBalancedParanthesis('{'))
console.log(`{{{()}()}} is Balanced? `, isBalancedParanthesis('{{{()}()}}'))

module.exports = {
    isBalancedParanthesis
}