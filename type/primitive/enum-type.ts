//定义一个枚举类型，默认情况下，从0开始为元素编号
// enum Color {Red,Green,Blue};
// let c:Color=Color.Blue;
// console.log(c);

// //手动指定成员的数值
// enum Color {Red=1,Green,Blue};
// let c:Color=Color.Blue;
// console.log(c);

//采用全部手动赋值
enum Color {Red=1,Green=3,Blue};
let c:Color=Color.Blue;
console.log(c);

let colorName:string=Color[3];
console.log(colorName);