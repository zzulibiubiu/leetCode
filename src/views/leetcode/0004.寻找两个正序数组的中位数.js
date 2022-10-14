/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let arr = []
    arr = arr.concat(nums1, nums2).sort(function(a, b){return a - b})
    console.log(arr)
    if(arr.length%2) {
        return arr[Math.floor(arr.length / 2)]
    }
    
    return  (arr[arr.length / 2] + arr[arr.length/2 -1])/2
};
let nums1 = [3]
let nums2 = [-2, -1]
console.log(findMedianSortedArrays(nums1, nums2))