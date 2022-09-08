"use strict";
// // // // // // // var sites:string[]; 
// // // // // // // sites = ["Google","Runoob","Taobao"] 
// // // // // // // console.log(sites[0]); 
// // // // // // // console.log(sites[1]);
// // // // // // var nums:number[] = [1,2,3,4] 
// // // // // // console.log(nums[0]); 
// // // // // // console.log(nums[1]); 
// // // // // // console.log(nums[2]); 
// // // // // // console.log(nums[3]);
// // // // // var arr_names:number[] = new Array(4)  
// // // // // for(var i = 0; i<arr_names.length; i++) { 
// // // // //         arr_names[i] = i * 2 
// // // // //         console.log(arr_names[i]) 
// // // // // }
// // // // var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 
// // // // for(var i = 0;i<sites.length;i++) { 
// // // //         console.log(sites[i]) 
// // // // }
// // // var j:any; 
// // // var nums:number[] = [1001,1002,1003,1004] 
// // // for(j in nums) { 
// // //     console.log(nums[j]) 
// // // }
// // var multi:number[][] = [[1,2,3],[23,24,25]]  
// // console.log(multi[0][0]) 
// // console.log(multi[0][1]) 
// // console.log(multi[0][2]) 
// // console.log(multi[1][0]) 
// // console.log(multi[1][1]) 
// // console.log(multi[1][2])
// var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 
// function disp(arr_sites:string[]) {
//         for(var i = 0;i<arr_sites.length;i++) { 
//                 console.log(arr_sites[i]) 
//         }  
// }  
// disp(sites);
function disp() {
    return new Array("Google", "Runoob", "Taobao", "Facebook");
}
var sites = disp();
for (var i in sites) {
    console.log(sites[i]);
}
