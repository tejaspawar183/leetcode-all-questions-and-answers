
const longestCommonPrefix = (strs) => {
    if (strs.length === 0) return '';

    const sortedByLength = strs.sort((a, b) => b.length - a.length);
    const maxlen = sortedByLength[0].length;

    let longestCommonSubString = '';

    for (let i = 0; i < maxlen; i++) {
        const char = strs[0][i];
        const statement = strs.every((el) => el[i] === char);

        if (statement) {
            longestCommonSubString += char;
        } else {
            break;
        }
    }

    return longestCommonSubString;
};
  
// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.