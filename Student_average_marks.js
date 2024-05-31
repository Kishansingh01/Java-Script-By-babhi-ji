let marks=[1,2,3,4,4,3,2];
let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i]/7;
// }
for(let value of marks){
    sum+=value/marks.length
}
console.log(sum);

