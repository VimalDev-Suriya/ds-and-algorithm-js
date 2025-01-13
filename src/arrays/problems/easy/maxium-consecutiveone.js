/**
 * Maximum consecutive ones
 * @param {*} arr
 * @return {num} maxium consecutive ones.
 *
 * @example
 * arr = [1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1]
 * Returns = 3
 *
 * ALgorithm:
 * Consider maximumContinuity and continuity to 0 initially
 * Loop through the items of array
 * If we found any non 1s elements then reset continuity to 0 and compare that with maxiumcontinuty if it is greater the assign continuty to maximumContinuity;
 * if we not found 1s simply increase the continuty
 */

const maximumConsecutiveOnes = (arr = []) => {
  let maxiumcontinuty = 0;
  let continuity = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      continuity++;
    } else {
      continuity = 0;
    }

    maxiumcontinuty = Math.max(continuity, maxiumcontinuty);
  }

  return maxiumcontinuty;
};

module.exports = {
  maximumConsecutiveOnes,
};
