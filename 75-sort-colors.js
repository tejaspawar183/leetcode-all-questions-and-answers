// 75. Sort Colors
// Difficulty:
// Medium
// Related Topics:
// ArrayTwo PointersSort
// Similar Questions:
// Sort ListWiggle SortWiggle Sort II
// Problem
// Given an array with n objects colored red, white or blue, sort them **in-place **so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:

// A rather straight forward solution is a two-pass algorithm using counting sort. First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one-pass algorithm using only constant space?
// Solution 1
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  var counts = [0, 0, 0];
  var len = nums.length;
  for (var i = 0; i < len; i++) {
    counts[nums[i]]++;
  }
  for (var j = 0; j < len; j++) {
    nums[j] = j < counts[0] ? 0 : (j < counts[0] + counts[1] ? 1 : 2);
  }
};