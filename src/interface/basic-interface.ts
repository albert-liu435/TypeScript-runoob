// // // // // //类型检查器会查看printLabel的调用。 printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配

// // // // // function printLabel(labelledObj: { label: string }) {
// // // // //     console.log(labelledObj.label);
// // // // // }

// // // // // let myObj = { size: 10, label: "Size 10 Object" };
// // // // // printLabel(myObj);


// // // // // export {};


// // // // interface IPerson { 
// // // //     firstName:string, 
// // // //     lastName:string, 
// // // //     sayHi: ()=>string 
// // // // } 
 
// // // // var customer:IPerson = { 
// // // //     firstName:"Tom",
// // // //     lastName:"Hanks", 
// // // //     sayHi: ():string =>{return "Hi there"} 
// // // // } 
 
// // // // console.log("Customer 对象 ") 
// // // // console.log(customer.firstName) 
// // // // console.log(customer.lastName) 
// // // // console.log(customer.sayHi())  
 
// // // // var employee:IPerson = { 
// // // //     firstName:"Jim",
// // // //     lastName:"Blakes", 
// // // //     sayHi: ():string =>{return "Hello!!!"} 
// // // // } 
 
// // // // console.log("Employee  对象 ") 
// // // // console.log(employee.firstName) 
// // // // console.log(employee.lastName)


// // // interface RunOptions { 
// // //     program:string; 
// // //     commandline:string[]|string|(()=>string); 
// // // } 
 
// // // // commandline 是字符串
// // // var options:RunOptions = {program:"test1",commandline:"Hello"}; 
// // // console.log(options.commandline)  
 
// // // // commandline 是字符串数组
// // // options = {program:"test1",commandline:["Hello","World"]}; 
// // // // console.log(options.commandline[0]); 
// // // // console.log(options.commandline[1]);  
 
// // // // commandline 是一个函数表达式
// // // options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
// // // var fn:any = options.commandline; 
// // // console.log(fn());

// // // export default{};



// // interface namelist { 
// //    [index:number]:string 
// // } 
 
// // // 类型一致，正确
// // var list2:namelist = ["Google","Runoob","Taobao"]
// // // 错误元素 1 不是 string 类型
// // // var list2:namelist = ["Runoob",1,"Taobao"]



// //单继承实例
// interface Person { 
//    age:number 
// } 
 
// interface Musician extends Person { 
//    instrument:string 
// } 
 
// var drummer = <Musician>{}; 
// drummer.age = 27 
// drummer.instrument = "Drums" 
// console.log("年龄:  "+drummer.age)
// console.log("喜欢的乐器:  "+drummer.instrument)



interface IParent1 { 
    v1:number 
} 
 
interface IParent2 { 
    v2:number 
} 
 
interface Child extends IParent1, IParent2 { } 
var Iobj:Child = { v1:12, v2:23} 
console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)