//Creates a new array of elements that give true for a condition/filter.
//Ex-All even elements

// let arr=[1,2,3,4,5,6,7,8,9];
// let evenArr=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenArr);


// //All even elements
// let arr1=[1,2,3,4,5,6,7,8,9];
// let evenArr1=arr.filter((val)=>{
//     return val%2===0;
// });
// console.log(evenArr1);



//value greater than 3
// let arr=[1,2,3,4,5,6,7,6,9,8];
// let newarray=arr.filter((val)=>{
//     return val>3;
// });
// console.log(newarray);

//Marks Greater than 70
// let marks=[12,89,45,90,93,23,96,77];
// let output=marks.filter((val)=>{
//     return val>70;
// });
// console.log(output)



//Take a number n as input from the UserActivation.create an array of numbers from 1 to N
let n=prompt("Enter any number:");
for(let i=1;i<=n;i++){
    console.log(i);
}


//by doing in a good way 

let m=prompt("Enter any number:");
let arr=[];
for(let i=1;i<=m;i++){
    arr[i-1]=i;
}
console.log(arr);