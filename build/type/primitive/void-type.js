"use strict";
//某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser() {
    console.log("This is my warning message");
}
;
warnUser();
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable = undefined;
//TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大
// Not much else we can assign to these variables!
let u = undefined;
let n = null;
