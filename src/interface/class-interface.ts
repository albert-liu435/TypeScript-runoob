// // // // // // // // class Person{

// // // // // // // // }

// // // // // // // class Car{
// // // // // // //     //字段
// // // // // // //     engine:String;

// // // // // // //     //构造函数
// // // // // // //     constructor(engine:string){
// // // // // // //         this.engine=engine;
// // // // // // //     }

// // // // // // //     //方法
// // // // // // //     disp():void{
// // // // // // //         console.log("发动机为："+ this.engine);
// // // // // // //     }
// // // // // // // }


// // // // // // // // 创建一个对象
// // // // // // // var obj = new Car("XXSY1")
 
// // // // // // // // 访问字段
// // // // // // // console.log("读取发动机型号 :  "+obj.engine)  
 
// // // // // // // // 访问方法
// // // // // // // obj.disp()


// // // // // // class Shape { 
// // // // // //    Area:number 
   
// // // // // //    constructor(a:number) { 
// // // // // //       this.Area = a 
// // // // // //    } 
// // // // // // } 
 
// // // // // // class Circle extends Shape { 
// // // // // //    disp():void { 
// // // // // //       console.log("圆的面积:  "+this.Area) 
// // // // // //    } 
// // // // // // }
  
// // // // // // var obj = new Circle(223); 
// // // // // // obj.disp()



// // // // // class Root { 
// // // // //    str:string; 

// // // // //    constructor(str:string){
// // // // //     this.str=str;
// // // // //    }
// // // // // } 
 
// // // // // class Child extends Root {} 
// // // // // class Leaf extends Child {} // 多重继承，继承了 Child 和 Root 类
 
// // // // // var obj = new Leaf(); 
// // // // // obj.str ="hello" 
// // // // // console.log(obj.str)

// // // // // export default{

// // // // // }


// // // // class PrinterClass { 
// // // //    doPrint():void {
// // // //       console.log("父类的 doPrint() 方法。") 
// // // //    } 
// // // // } 
 
// // // // class StringPrinter extends PrinterClass { 
// // // //    doPrint():void { 
// // // //       super.doPrint() // 调用父类的函数
// // // //       console.log("子类的 doPrint()方法。")
// // // //    } 
// // // // }

// // // // var a=new StringPrinter();
// // // // a.doPrint();


// // // class StaticMem {  
// // //    static num:number; 
   
// // //    static disp():void { 
// // //       console.log("num 值为 "+ StaticMem.num) 
// // //    } 
// // // } 
 
// // // StaticMem.num = 12     // 初始化静态变量
// // // StaticMem.disp()       // 调用静态方法


// // class Person{ } 
// // var obj = new Person() 
// // var isPerson = obj instanceof Person; 
// // console.log("obj 对象是 Person 类实例化来的吗？ " + isPerson);


// class Encapsulate { 
//    str1:string = "hello" 
//    private str2:string = "world" 
// }
 
// var obj = new Encapsulate() 
// console.log(obj.str1)     // 可访问 
// console.log(obj.str2)   // 编译错误， str2 是私有的


interface ILoan { 
   interest:number 
} 
 
class AgriLoan implements ILoan { 
   interest:number 
   rebate:number 
   
   constructor(interest:number,rebate:number) { 
      this.interest = interest 
      this.rebate = rebate 
   } 
} 
 
var obj = new AgriLoan(10,1) 
console.log("利润为 : "+obj.interest+"，抽成为 : "+obj.rebate )
