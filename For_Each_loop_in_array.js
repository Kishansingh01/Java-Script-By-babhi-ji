// Higher order functions(for each) Either It takes another function as a parameter
//inside them or return other  function as an output is higher order functions



// Array.forEach(callbackFunction) Uzed for loop in arrays

// A callback is a function passed as an argument to another function





// let arr1=[1,2,3,4,5];
// arr1.forEach((val)=>{
// console.log(val)});


// let arr2=[1,2,3,4,"Mohan","Sohan"];
// arr2.forEach((val)=>{
// console.log(val)});


// //With aii in capital letter
// let arr3=["ram","Mohan","Sohan"];
// arr3.forEach((val)=>{
// console.log(val.toUpperCase)});
        

//With indexing and values(It is only used for array things)
let arr=[1,2,3,"Ram","hanuman"];
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr)
})


const num=[1,2,3,4,5];
let sum=0;
num.forEach((num)=>{
    sum+=num;});
    console.log(sum);

        
    


