// //块作用域
// // 当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
//
// function f(input: boolean) {
//     let a = 100;
//
//     if (input) {
//         // Still okay to reference 'a'
//         let b = a + 1;
//         return b;
//     }
//
//     // Error: 'b' doesn't exist here
//     return b;
// }
//
//

// let x = 10;
// let x = 20; // 错误，不能在1个作用域里多次声明`x`
// 并不是要求两个均是块级作用域的声明TypeScript才会给出一个错误的警告。