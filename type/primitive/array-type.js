//可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
let list = [1, 2, 3];
//遍历
list.forEach(ele => {
    console.log(ele);
});
//第二种方式是使用数组泛型，Array<元素类型>：
let list1 = [1, 2, 3];
list1.forEach(ele => {
    console.log(ele);
});
let a = [1, true, 'free'];
a.forEach(element => {
    console.log(element);
});
a[1] = 2;
a[2] = 3;
a[3] = 4;
a.forEach(element => {
    console.log(element);
});
