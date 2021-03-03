module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }
    let b1 = [];
    let b2 = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        b1.push(bracketsConfig[i][0]);
        b2.push(bracketsConfig[i][1]);
    }
    let stack = [];
    for (let j = 0; j < str.length; j++) {
        if (b1.indexOf(str[j]) !== -1) {
            if (
                b1.indexOf(str[j]) === b2.indexOf(str[j]) &&
                str[j] === stack[stack.length - 1]
            ) {
                stack.pop();
            } else {
                stack.push(str[j]);
            }
        } else if (
            b2.indexOf(str[j]) !== -1 &&
            b2.indexOf(str[j]) === b1.indexOf(stack[stack.length - 1])
        ) {
            stack.pop();
        } else {
            return false;
        }
    }
    if (stack.length > 0) {
        return false;
    } else {
        return true;
    }
};
