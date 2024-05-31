// function myfunction(){
//     console.log("Welcome to the function");
//     console.log("We are learning java script");
// }
// myfunction();
// myfunction();

// function myfunction(msg){//Parameters we called inside function definition
//     console.log(msg);
// }
// myfunction("I love JavaScript");//Arguments we called inside function call

// function sum(m,n,o){
//     console.log(m*n*o);
// }
// sum(2,9,2);



// Variables inside function parameters are local till the blocks of the function definition
function Sum(x,y){
    console.log(x+y);
    // s=x+y;
    // return s;
    return x+y;
    console.log("After return");}
 let Ram=Sum(2,400);
console.log(Ram)
