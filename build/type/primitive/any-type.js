"use strict";
// // // // // // // // //有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：
// // // // // // // // let notSure: any = 4;
// // // // // // // // notSure = "maybe a string instead";
// // // // // // // // //notSure = false; // okay, definitely a boolean
// // // // // // // // console.log(notSure)
Object.defineProperty(exports, "__esModule", { value: true });
// // // // // // // var uname:string = "Runoob";
// // // // // // // var score1:number = 50;
// // // // // // // var score2:number = 42.50
// // // // // // // var sum = score1 + score2
// // // // // // // console.log("名字: "+uname)
// // // // // // // console.log("第一个科目成绩: "+score1)
// // // // // // // console.log("第二个科目成绩: "+score2)
// // // // // // // console.log("总成绩: "+sum)
// // // // // // var global_num = 12          // 全局变量
// // // // // // class Numbers { 
// // // // // //    num_val = 13;             // 实例变量
// // // // // //    static sval = 10;         // 静态变量
// // // // // //    storeNum():void { 
// // // // // //       var local_num = 14;    // 局部变量
// // // // // //    } 
// // // // // // } 
// // // // // // console.log("全局变量为: "+global_num)  
// // // // // // console.log(Numbers.sval)   // 静态变量
// // // // // // var obj = new Numbers(); 
// // // // // // console.log("实例变量: "+obj.num_val)
// // // // // var num:number = 5; 
// // // // // var i:number; 
// // // // // var factorial = 1; 
// // // // // for(i = num;i>=1;i--) {
// // // // //    factorial *= i;
// // // // // }
// // // // // console.log(factorial)
// // // // var j:any; 
// // // // var nn:any = "a b c" 
// // // // for(j in nn) {
// // // //     console.log(nn[j])  
// // // // }
// // // let someArray = [1, "string", false];
// // // for (let entry of someArray) {
// // //     console.log(entry); // 1, "string", false
// // // }
// // let list = [4, 5, 6];
// // list.forEach((val, idx, array) => {
// //     // val: 当前值
// //     // idx：当前index
// //     // array: Array
// //     console.log(val);
// //     console.log(idx);
// //     console.log(array);
// // });
// let list = [4, 5, 6];
// list.every((val, idx, array) => {
//     // val: 当前值
//     // idx：当前index
//     // array: Array
//     return true; // Continues
//     // Return false will quit the iteration
// });
function test() {
    console.log("调用函数");
}
test(); // 调用函数
exports.default = {};
