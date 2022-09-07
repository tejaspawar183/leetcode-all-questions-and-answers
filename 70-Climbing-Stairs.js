/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let arr = [0,1,2,3];
    for(let i = 4; i <= n; i++){
        arr[i] = arr[ i - 1] + arr[i - 2];
    }
    return arr[n];
};