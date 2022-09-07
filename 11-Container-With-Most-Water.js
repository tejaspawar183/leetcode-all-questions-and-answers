/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    let max = 0;
    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        const w = end - start;
        const h = Math.min(height[start], height[end]);
        max = Math.max(max, w * h);
        height[start] > height[end] ? end-- : start++;
    }

    return max;
};

        const value = maxArea
/**
 * @param {number[]} height
 * @return {number}
 */
const maxAreaSlow = (height) => {
    let max = 0;

    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            const w = j - i;
            const h = Math.min(height[i], height[j]);
            max = Math.max(max, w * h);
        }
    }

    return max;
};


// 11. Container With Most Water
// Medium

// 14526

// 874

// Add to List

// Share
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104
// Accepted
// 1,314,131
// Submissions
// 2,461,513