"use strict";
// let nameSiteMapping = new Map();
// // 设置 Map 对象
// nameSiteMapping.set("Google", 1);
// nameSiteMapping.set("Runoob", 2);
// nameSiteMapping.set("Taobao", 3);
// // 获取键对应的值
// console.log(nameSiteMapping.get("Runoob"));     // 2
// // 判断 Map 中是否包含键对应的值
// console.log(nameSiteMapping.has("Taobao"));       // true
// console.log(nameSiteMapping.has("Zhihu"));        // false
// // 返回 Map 对象键/值对的数量
// console.log(nameSiteMapping.size);                // 3
// // 删除 Runoob
// console.log(nameSiteMapping.delete("Runoob"));    // true
// console.log(nameSiteMapping);
// // 移除 Map 对象的所有键/值对
// nameSiteMapping.clear();             // 清除 Map
// console.log(nameSiteMapping);
let nameSiteMapping = new Map();
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
// 迭代 Map 中的 key
for (let key of nameSiteMapping.keys()) {
    console.log(key);
}
// 迭代 Map 中的 value
for (let value of nameSiteMapping.values()) {
    console.log(value);
}
// 迭代 Map 中的 key => value
for (let entry of nameSiteMapping.entries()) {
    console.log(entry[0], entry[1]);
}
// 使用对象解析
for (let [key, value] of nameSiteMapping) {
    console.log(key, value);
}
