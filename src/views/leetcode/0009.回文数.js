/**
 * 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
   回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if(x<0) {
        return false
    }
    let s = x + ''
    let arr = s.split('').reverse().join('')
    return s === arr ? true : false
};
let x = 1212
console.log(isPalindrome(x))