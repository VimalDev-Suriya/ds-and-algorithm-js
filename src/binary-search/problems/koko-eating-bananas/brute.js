/**
 * Koko Eating Banana:
 *
 * @description
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 *
 * @example
 * Example 1:
 * Input: piles = [3,6,7,11], h = 8
 * Output: 4
 *
 * Example 2:
 * Input: piles = [30,11,23,4,20], h = 5
 * Output: 30
 *
 * Example 3:
 * Input: piles = [30,11,23,4,20], h = 6
 * Output: 23
 */

/**
 * @requirement_gatherings
 * 1. Piles array, each index will hold the corresponding no of bananas
 * 2. h is the hour
 * 3. Koko can decide the number of bananas that it can eat, i.e K, within H hours
 * 4. if pile[i] < k it can completly eat the bananas in that pile for that hour
 * 5. Determine how many minimum no of banana's (K) can be eaten by Koko within H hours.
 */

/**
 *
 * @param {Array} piles
 * @param {Number} h
 *
 * @intuition
 * let k = 1
 * Taking the first = pile[0] = 3
 * total h = 8;
 *
 */

const find_min_number_of_bananas = (piles, h) => {
  if (!Array.isArray(piles) || piles.length === 0) return -1;

  // * My Consideration here is
  // - Maximum number of banana, Koko can eat was number of banana's present in all the piles.
  const totalBananasInPile = piles.reduce((pile, acc) => pile + acc, 0);
  // * But correct intution was
  // Koko cannot able to eat all banana in all the piles at once. But It can eat all the banana in any of the individual pile per hour. SO if we take the pile that holds maximum banana, that will be the threshold for koko to eat at a hour.

  let temp_h;
  let k;

  for (k = 1; k <= totalBananasInPile; k++) {
    temp_h = h;
    let remaining_banana;
    let pile;

    for (pile = 0; pile < piles.length; pile++) {
      // * If K is greater than the bananas in pile, then Koko can eat them all, within the hour.
      // Else, reducing the pile by K.
      remaining_banana = k > piles[pile] ? 0 : piles[pile] - k;

      // * reducing the hour by one for each consumption
      temp_h--;

      // If there are remaining, then looping to reduce them
      while (remaining_banana > 0 && temp_h >= 0) {
        // * There is the chance we might get -ve here so handling them gracefuly by adding 0 as fallback
        remaining_banana = k > remaining_banana ? 0 : remaining_banana - k;
        temp_h--;
      }

      // * if time exceeds, then breaking
      if (temp_h <= 0) break;
    }

    // * Final solution
    if (temp_h <= h && remaining_banana === 0 && pile === piles.length - 1)
      break;
  }

  return k;
};

console.log(find_min_number_of_bananas([3, 6, 7, 11], 8));
console.log(find_min_number_of_bananas([30, 11, 23, 4, 20], 5));
console.log(find_min_number_of_bananas([30, 11, 23, 4, 20], 6));
