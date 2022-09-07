// 15. 3Sum [Medium]
// https://leetcode.com/problems/3sum/

/**
 * 15. 3Sum
Medium
16204
1551
Add to List

Share
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    return kSum(nums, 0, 3);
};

function twoSum(nums, target) {
    if (!nums.length) return [];
    let left = 0;
    let right = nums.length - 1;
    const result = [];

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            left += 1;
        } else if (nums[left] + nums[right] > target) {
            right -= 1;
        } else {
            result.push([nums[left], nums[right]]);
            left += 1;
            right -= 1;
        }
    }

    return result;
}



// the value of nums[i] = -4 -1 -1 0
function kSum(nums, target, k) {
    if (!nums.length) return [];

    const result = [];
    const hashMap = {};

    for (let i = 0; i < nums.length - k + 1; i++) {
        if (k === 2) return twoSum(nums, target);

        const arr = kSum(nums.slice(i + 1), target - nums[i], k - 1);

        if (arr.length) {
            for (const candidate of arr) {
                candidate.push(nums[i]);
                const str = candidate.join('<>');

                if (!hashMap[str]) {
                    hashMap[str] = true;
                    result.push(candidate);
                }
            }
        }
    }

    return result;
}
