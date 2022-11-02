/**
 * 给你一个字符串 s，找到 s 中最长的回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */

//中心扩展法 ---每一个点都可能是回文字符串的中心
var longestPalindrome1 = function (s) {
  let max = ''
  for(let i=0; i<s.length; i++) {
    palindrome(i,i)
    palindrome(i,i+1)
  }
  return max
  function palindrome(left, right) {
    while(left>=0 && s.length && s[left] === s[right]) {
      left--
      right++
    }
    const maxStr = s.slice(left+1, right)
    if(maxStr.length>max.length) {
      max=maxStr
    }

  }
};
let s = "babad";
console.log(longestPalindrome1(s));
