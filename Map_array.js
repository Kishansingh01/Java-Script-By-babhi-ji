// Map creates a new array with the results of some operations. The value 
// its callback returns are used to form new array.It is similar like foeEach 
//but the difference is only in map we can create a new array


let arr=[1,2,3,4,"Ram","Mohan"];
arr.map((val)=>{
    console.log(val);
});



//   By making new array
let nums=[12,3,45,85];
let newarray=nums.map((val)=>{
    return val;
});
console.log(newarray)



//Square of array.Js
let nums1=[12,3,45,85];
let newarray1=nums.map((val)=>{
    return val*val;
});
console.log(newarray1)

