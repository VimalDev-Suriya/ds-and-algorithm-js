class MyCustomArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(idx) {
    // O(1)
    return this.data[idx];
  }

  push(item) {
    // O(1)
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    // O(1)
    const lastElement = this.data[this.length - 1];
    // * in strict mode we can't able to delete the quantifier (Variables) like var, let and const. If we do so it will throw below syntacx error.
    // * Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  /*
    Existing: {0: a, 1: 2} and length = 2
    Requirement - Going to add the element at the fisrt index. that will increase the key value by 1;

    Steps:
    1. Incresed the length by +1
    2. Setting the limit of the object to 3 elements
    3. So we can set (i = length -1 && i>=0) because at the end we w
    4. Now we pointed the i to the last element - so now we are transfering the data from last previous element to last elemnet (this is the logic)
    5. we are setting the (i = length -1 && i>=0) because at the end we wont have any value to the 0 position
    6. output will be {0: null, 1: a, 2: b}
    7. now adding the value directly to the first node

    Output will be {0: c, 1: a, 2: b} and length = 3
  */
  // O(n)
  // Shifting the elements (shift and unshift)
  shift(item) {
    // Space Complexity = No change
    this.length++;

    // * Shifting the element left to right
    // O(n)
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    // O(1)
    this.data[0] = item;
    return item;
  }

  // O(n)
  // Shifting the elements (shift and unshift)
  unshift() {
    this.data[0] = null;

    // * Shifting the element right to left
    for (let i = 1; i <= this.length; i++) {
      this.data[i - 1] = this.data[i];
    }

    this.pop();
  }

  // * Yet to update - 70% completed (Brute force )
  splice(idx, numberOfElements, itemTobeAReplaced) {
    const itemTobeDeleted = this.data[idx];
    let flag = 0,
      elementsTobeDeleted = numberOfElements;

    // * Replace the value in the index
    if (numberOfElements === 0) {
      const itemReplaced = this.data[idx];
      this.data[idx] = itemTobeAReplaced;
      return itemReplaced;
    }

    for (let key in this.data) {
      if (+key === idx) {
        flag = numberOfElements;
      }
      this.data[key] = this.data[+key + flag];
    }

    do {
      this.pop();
      elementsTobeDeleted--;
      console.log(elementsTobeDeleted);
    } while (elementsTobeDeleted > 0);
  }

  /*
    Delete the element, by prviding the index

    [0,1,2], length=3, need to delete element in position 1;

    1. first get the lement to be deleted O(1) since we have the idx
    2. Shifting the element starts now
      a. the idx of the element to be deleted will be the start 
      b. From that index we will be navigating +1 index, which will transfer the data from right to left
      c. Similar to unshifting
  */
  //O(n)
  delete(idx) {
    const ele = this.data[idx];

    for (let i = idx; i <= this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.pop();
    return ele;
  }
}

module.exports = {
  MyCustomArray,
};
