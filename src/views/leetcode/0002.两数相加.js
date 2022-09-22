/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */
/**
 * 
 * 链表 用指针实现, 在内存中不连续, 空间利用率高
 * 链表就是将一系列不连续的内存联系起来，将那种碎片内存进行合理的利用，解决空间的问题
 * 
 * 链表与数组的区别
 *  链表是链式的存储结构；数组是顺序的存储结构。
 *  链表通过指针来连接元素与元素，数组则是把所有元素按次序依次存储。
 */

 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }

// 模拟
 var addTwoNumbers1 = function(l1, l2) {
     let sum = new ListNode('0') // 创建也一个头链表用于保存结果返回
     let head = sum // 保存头链表的位置
     let addOne = 0
     while (addOne || l1 || l2) {
        let val1 = l1 !=null ? l1.val : 0
        let val2 = l2 !=null ? l2.val : 0
        let r1 = val1 + val2 + addOne
        addOne =  r1 >= 10 ? 1 : 0 //求和进位
        sum.next = new ListNode(r1 % 10)
        sum = sum.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return head.next
}

//递归
var addTwoNumbers2 = function(l1, l2) {
    let arr = []
    let i = 0
    while(l1 || l2) {
       let num
    }
}
const l1 = {
    val : 9,
    next: {
        val: 9,
        next: {
            val: 9,
            next: {
                val: 9,
                next: {
                    val: 9,
                    next: {
                        val: 9,
                        next: { 
                            val: 9
                        }
                    }
                }

            }
        } 
    }
}
const l2 = {
    val : 9,
    next: {
        val: 9,
        next: {
            val : 9,
            next: {
                val: 9
            }
        } 
    }
} // 342+465 = 807 7>0>8
console.log(addTwoNumbers1(l1, l2))
// console.log(addTwoNumbers2(l1, l2))