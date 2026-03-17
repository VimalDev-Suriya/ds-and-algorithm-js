/**
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
 *
 * @intution
 * How I can neglect the corresponding half here?
 * Here is the intution, [F=> False, T-True]
 * [F, F, F, F, T, T, T]
 * If you see above, the possibility of Koko to complete all banana (k) within h hours
 * With having the example [3, 6, 7, 11];
 * Here the K might be within [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; As 11 will be the maxium that koo can eat within hour.
 * Here we can neglct the left or right once we find exact k is T/F
 *
 */

const getMaxBananaInPile = (piles) => {
  if (!Array.isArray(piles) || !piles.length) return 0;

  let max = -Infinity;

  for (let i = 0; i < piles.length; i++) {
    max = Math.max(max, piles[i]);
  }

  return max;
};

const can_eat = (piles, totalHours, k) => {
  if (!Array.isArray(piles) || piles.length === 0) return false;

  let consumedHours = 0;

  for (let i = 0; i < piles.length; i++) {
    if (piles[i] < k) {
      consumedHours++;
      continue;
    }

    // * I used the / here because, we know we need determine how much k can go in the pile[i].
    // eg if 11/7 then here will be 1.52 times of 7
    // similarly 11 banana in pile, and koko can eat 7 banana per h. Then how much banana koko can eat can be found as
    // 1h = 7b
    // 11h = 7 * 11b
    // 11/7 h = 11b
    // 2h = 11b [here I am using ceil so it becomes 2]
    consumedHours += Math.ceil(piles[i] / k);
  }

  if (consumedHours <= totalHours) return true;

  return false;
};

const find_min_number_of_bananas = (piles, h) => {
  if (!Array.isArray(piles) || piles.length === 0) return -1;

  // * Fetching the Maxium number of banana present in the pile.
  const maxBananaInPile = getMaxBananaInPile(piles);

  let start = 1;
  let end = maxBananaInPile;
  let mid;
  let min_banana = Infinity;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    const canEatBananas = can_eat(piles, h, mid);

    if (canEatBananas) {
      min_banana = Math.min(min_banana, mid);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return min_banana;
};

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(find_min_number_of_bananas([3, 6, 7, 11], 8)); // 4
console.log(find_min_number_of_bananas([30, 11, 23, 4, 20], 5)); // 30
console.log(find_min_number_of_bananas([30, 11, 23, 4, 20], 6)); // 23

// console.log(can_eat([30, 11, 23, 4, 20], 20, 25));
// console.log(can_eat([30, 11, 23, 4, 20], 20, 26));
// console.log(can_eat([30, 11, 23, 4, 20], 20, 27));
// console.log(can_eat([30, 11, 23, 4, 20], 20, 28));
