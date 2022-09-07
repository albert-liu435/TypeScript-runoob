//代码
var name1: string='bob';
name1='smith';
console.log(name1);
//使用模板字符串

let name2: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name2 }. I'll be ${age + 1} years old next month.`;
console.log(sentence);