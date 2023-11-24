/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 * 如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。
 * 假设环境不允许存储 64 位整数（有符号或无符号）
 */
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    if(x === 0) {
        return 0
    }
    let max = Math.pow(2, 31) - 1
    let min = -Math.pow(2, 31)
    if(x > 0) {
      x = x + ''
      let s = x.split('').reverse().join('')
      return s > max ? 0 : s
    } else {
      x = -x
      console.log(x);
      x = x + ''
    }
};
let x = -2147483648
console.log(reverse(x))