/**
 * Odd Even node arranging
 *
 * input 1 -> 2 -> 3 -> 4 -> 5 -> 6
 * output 1 -> 3 -> 5 -> 2 -> 4 -> 6
 *
 * Solution 1 (Brute force solution)
 * Crate a empty list
 * 1. iterate over the odd elements alone & store those values in the list
 * 2. iterate over the even elements alone & store those values in the list
 * 3. iterate over the entire ll & set the values from list in ll.
 *
 * SC -> O(n) (new list)
 * TC -> O(n/2) + O(n/2) + O(n) -> O(2n)
 *
 * Solution 2
 * - below solution
 */

const oddEvenNodes = (ll) => {
  let oddHead = ll;
  let evenHead = ll.next;
  // * Storing the even head for future reference (1)
  let evenHeadMemoized = ll.next;

  // * here considering only the even not the odd, because
  // * if even is not null, them obviously odd also cannot be null,
  // * as the odd will always be prev to even.
  while (evenHead !== null && evenHead.next !== null) {
    oddHead.next = oddHead.next.next;
    evenHead.next = evenHead.next.next;

    // Incresing the odd/even for the next node
    evenHead = evenHead.next;
    oddHead = oddHead.next;
  }

  // (1) Using the memoized here
  // *  here the oddHead will hold the last element of the odd ,
  // we are assining the even head as the next of odd last node
  oddHead.next = evenHeadMemoized;

  return ll;
};

module.exports = {
  oddEvenNodes,
};
