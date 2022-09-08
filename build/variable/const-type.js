"use strict";
//const 声明
// const 声明是声明变量的另一种方式。
//
// const numLivesForCat = 9;
// 它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。
//let vs. const
// 现在我们有两种作用域相似的声明方式，我们自然会问到底应该使用哪个。 与大多数泛泛的问题一样，答案是：依情况而定。
//
// 使用最小特权原则，所有变量除了你计划去修改的都应该使用const。 基本原则就是如果一个变量不需要对它写入，那么其它使用这些代码的人也不能够写入它们，并且要思考为什么会需要对这些变量重新赋值。 使用 const也可以让我们更容易的推测数据的流动。
//最简单的解构莫过于数组的解构赋值了：
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2
// //作用于函数参数：
// function f([first, second]: [number, number]) {
//     console.log(first);
//     console.log(second);
// }
// f(input);
