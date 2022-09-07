/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
    const folders = path.split('/').filter((el) => /\.\.|[^\s.]/.test(el));
    const stack = [];

    for (const current of folders) {
        if (current === '..') {
            stack.pop();
        } else {
            stack.push(current);
        }
    }

    return '/' + stack.join('/');
};

   const folders = path.split('/').filter((el) => /\.\.|[^/s.]/.test(el));
    const stack = [];
    for(const current of folders){
        if(current === '..'){
            stack.pop();
        }
        else {
            stack.push('/');
        }
        return '/' + stack.join('/');
    }
// Input: path = "/home/"
// Output: "/home"
// Explanation: Note that there is no trailing slash after the last directory name.