var isMatch = function (s, p) {
         var row = s.length;
         var column = p.length;
         if(row === 0 && colum === 0){
             return true;
         }
         if(column === 0){
             return false
         }
         const dp = Array.from({length: s.length+1}, () => [false]);
         dp[0][0] = true
         for(let i = 0; i <column + 1; i++){
            if(p[i - 1] === "*"){
                dp[0][i] = dp[0][i-2]
            }else {
                dp[0][i] = false
            }
         }
    // For remaining characters
     for(let i = 0; i<row + 1; i++){
         for(let j = 0; j < column + 1; j++){
             if(p[j -1] === '*'){
                 if(p[j - 2] === s[i-1] || p[j-2] === '.'){
                     dp[i][j] = dp[i][j-2] || dp[i-1][j]
                 }else {
                     dp[i][j] = dp[i][j-2]
                 }
             }else if(p[j-1]===s[i-1]||p[j-1]==='.'){
                 dp[i][j]=dp[i-1][j-1];
             }else {
                 dp[i][j] = false
             }
         }
     }
     return dp[row][column]
};