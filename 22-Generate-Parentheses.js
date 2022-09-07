// 22. Generate Parentheses [Medium]
// https://leetcode.com/problems/generate-parentheses/
// 22. Generate Parentheses
// Medium

// 11863

// 465

// Add to List

// Share
// Given n pairs of parentheses, write a function to generate all combinations of 
// well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const result = [];

    const helper = (currentString, openTypeLength, closeTypeLength) => {
        if (openTypeLength > closeTypeLength) return;
        if (!openTypeLength && !closeTypeLength) {
            result.push(currentString);
            return;
        }
        if (openTypeLength > 0) 
		helper(`${currentString}(`, openTypeLength - 1, closeTypeLength);
        if (closeTypeLength > 0)
		 helper(`${currentString})`, openTypeLength, closeTypeLength - 1);
    };

    helper('', n, n);
    return result;
};
