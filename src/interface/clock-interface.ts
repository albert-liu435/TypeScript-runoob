// // // // var object_name = { 
// // // //     key1: "value1", // 标量
// // // //     key2: "value",  
// // // //     key3: function() {
// // // //         // 函数
// // // //     }, 
// // // //     key4:["content1", "content2"] //集合
// // // // }

// // // var sites = { 
// // //    site1:"Runoob", 
// // //    site2:"Google" 
// // // }; 
// // // // 访问对象的值
// // // console.log(sites.site1) 
// // // console.log(sites.site2)


// // var sites = {
// //     site1: "Runoob",
// //     site2: "Google",
// //     sayHello: function () { } // 类型模板
// // };
// // sites.sayHello = function () {
// //     console.log("hello " + sites.site1);
// // };
// // sites.sayHello();

// var sites = { 
//     site1:"Runoob", 
//     site2:"Google",
// }; 
// var invokesites = function(obj: { site1:string, site2 :string }) { 
//     console.log("site1 :"+obj.site1) 
//     console.log("site2 :"+obj.site2) 
// } 
// invokesites(sites)


interface IPoint { 
    x:number 
    y:number 
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
} 
 
// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1})  
 
// 错误 
// var newPoint2 = addPoints({x:1},{x:4,y:3})