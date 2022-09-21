/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案.
 */

function twoSum1(nums, target) {
  for (let i = 0; i < nums.length -1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
function twoSum2(nums, target) {
    for(let i = 0; i <  nums.length; i++) {
        const n = target - nums[i]
        if(nums.indexOf(n, i + 1) !== -1){
            return [i, nums.indexOf(n, i + 1)]
        }
    }
}
console.time()
let nums = [2, 3,1,1,1,1,1,1,1, 4]
let target = 6;
// console.log(twoSum1(nums, target))
console.log(twoSum2(nums,target))
console.timeEnd()

