// function CountVowels(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
//             count++;}
//     }
//    console.log(count)}
// let l=CountVowels("hello");
// console.log(l)


// BY arrow method

let CountVowel=(str)=>{
    let count=0;
    for(const i of str){
        if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
            count++;}
    }
    return count;

};
let l=CountVowel("Hello");
console.log(l)



// second method

// function CountVowels(str){
//     let count=0;
//     for(const i of str){
//         if(
//         i==="a"||
//         i==="e"||
//         i==="i"||
//         i==="o"||
//         i==="u"){
//             count++;}
//     }
//    return count;
// }
// let l=CountVowels("hellooooooo");
// console.log(l)




