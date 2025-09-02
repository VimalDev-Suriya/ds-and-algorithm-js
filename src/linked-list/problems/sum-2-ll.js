const { DLNode } = require('../DLNode');

/**
 * Add 2 LL
 * LL 1 = 1 -> 2 -> 3
 * LL 2 = 6 -> 7 -> 8
 * Result = 7 -> 9 -> 1 -> 1 (a new LL)
 *
 * Explanation
 * considering the LL1 as 321 & LL2 as 876 by reversing them => so sum of LL1 & LL2 is 1197 (reversing them),
 *
 * Programatically
 * We are going to add the each corresponding node from Head
 */
function sumLL(ll1, ll2) {
  let temp1 = ll1;
  let temp2 = ll2;
  let sumLL = new DLNode(-1, null, null); // a dummay node to create the summed ll
  let current = sumLL;
  let carry = 0;

  while (temp1 !== null || temp2 !== null) {
    // Adding the carry + temp1.data + temp2.data
    let sum = carry;
    if (temp1) sum += temp1.data;
    if (temp2) sum += temp2.data;

    // creating the node for the carry (setting the reminder in th new node)
    let newNode = new DLNode(sum % 10, null, null);
    carry = Math.floor(sum / 10); // (setting the carry)

    newNode.prev = current;
    current.next = newNode;

    // * moving the current
    current = current.next;

    // * Iterating condition for LL
    if (temp1) temp1 = temp1.next;
    if (temp2) temp2 = temp2.next;
  }

  // * If any carry over ie > 0
  if (carry) {
    let newNode = new DLNode(carry);
    newNode.prev = current;
    current.next = newNode;
  }

  return sumLL.next;
}

module.exports = {
  sumLL,
};
