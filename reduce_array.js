// Reduce =>Perform some operations and reduce its value to single .Like as array is given but 
// we add them and a single value will come



//Sum of array in reduce method
// let arr1=[1,2,3,4,5,6,7,8,9];
// const output1=arr1.reduce((result,current)=>{
//     return result+current;
// });
// console.log(output1);


// //Average of an array
// let arr=[1,2,3,4,5,6,7,8,9];
// const output=arr.reduce((result,current)=>{ 
//    let ram= (result+current)/arr.length;
//    return ram;
// });
// console.log(output);

//Maximum of an array

// let arr=[1,2,3,4,5,6,7,8,9];
// const output=arr.reduce((prev,curr)=>{
//     if(prev>curr){
//         return prev;
//     }
//     else{
//         return curr;
//     }
// })
// console.log(output)


//To sum the numbers in an array

// let number=[1,2,3,4,5,5,6];
// const output1=number.reduce((result,current)=>{
//     return result+current;
// });
// console.log(output1)




//To multiply an array
let number=[1,2,3,4,5,5,6];
const output1=number.reduce((result,current)=>{
    return result*current;
});
console.log(output1)


//Factorial of n(Down one is wrong answer is not coming)
let arr=[];
let n=prompt("Enter a number");
let factorial=arr.reduce((result,current)=>{
    return result*current;
});
console.log(factorial);

