"use strict";
// // // // // // // // // // // // // 函数定义
// // // // // // // // // // // // function greet():string { // 返回一个字符串
// // // // // // // // // // // //     return "Hello World" 
// // // // // // // // // // // // } 
Object.defineProperty(exports, "__esModule", { value: true });
// // // // // // // // // // // // function caller() { 
// // // // // // // // // // // //     var msg = greet() // 调用 greet() 函数 
// // // // // // // // // // // //     console.log(msg) 
// // // // // // // // // // // // } 
// // // // // // // // // // // // // 调用函数
// // // // // // // // // // // // caller()
// // // // // // // // // // // function add(x: number, y: number): number {
// // // // // // // // // // //     return x + y;
// // // // // // // // // // // }
// // // // // // // // // // // console.log(add(1,2))
// // // // // // // // // // function buildName(firstName: string, lastName: string) {
// // // // // // // // // //     return firstName + " " + lastName;
// // // // // // // // // // }
// // // // // // // // // // // let result1 = buildName("Bob");                  // 错误，缺少参数
// // // // // // // // // // // let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
// // // // // // // // // // let result3 = buildName("Bob", "Adams");         // 正确
// // // // // // // // // function calculate_discount(price:number,rate:number = 0.50) { 
// // // // // // // // //     var discount = price * rate; 
// // // // // // // // //     console.log("计算结果: ",discount); 
// // // // // // // // // } 
// // // // // // // // // calculate_discount(1000) 
// // // // // // // // // calculate_discount(1000,0.30)
// // // // // // // // //剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入。
// // // // // // // // function buildName(firstName: string, ...restOfName: string[]) {
// // // // // // // //     return firstName + " " + restOfName.join(" ");
// // // // // // // // }
// // // // // // // // let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// // // // // // // function addNumbers(...nums:number[]) {  
// // // // // // //     var i;   
// // // // // // //     var sum:number = 0; 
// // // // // // //     for(i = 0;i<nums.length;i++) { 
// // // // // // //        sum = sum + nums[i]; 
// // // // // // //     } 
// // // // // // //     console.log("和为：",sum) 
// // // // // // //  } 
// // // // // // //  addNumbers(1,2,3) 
// // // // // // //  addNumbers(10,10,10,10,10)
// // // // // // //不带参数匿名函数：
// // // // // // var msg = function() { 
// // // // // //     return "hello world";  
// // // // // // } 
// // // // // // console.log(msg())
// // // // // //带参数匿名函数：
// // // // // var res = function(a:number,b:number) { 
// // // // //     return a*b;  
// // // // // }; 
// // // // // console.log(res(12,2))
// // // // //匿名函数自调用
// // // // (function () { 
// // // //     var x = "Hello!!";   
// // // //     console.log(x)     
// // // //  })()
// // // //构造函数
// // // var myFunction = new Function("a", "b", "return a * b"); 
// // // var x = myFunction(4, 3); 
// // // console.log(x);
// // var foo = (x:number)=>10 + x 
// // console.log(foo(100))      //输出结果为 110
// var foo = (x:number)=> {    
//     x = 10 + x 
//     console.log(x)  
// } 
// foo(100)
exports.default = {};
