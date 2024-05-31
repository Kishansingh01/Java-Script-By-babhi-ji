// This is used by using Backetics tempelates literals

// let special_string=`This is a tempalate literals`;
// console.log(special_string);
// console.log(typeof(special_string));






let obj={
    item:"Pen",
    Price:100,
}
let output=`The cost of ${obj.item} is ${obj.Price} rupees`;
let input=`This  ${obj.item} is ${obj.Price} Years old`;
console.log(output)
console.log(input)





// Below One is the Other things

// let obj={
//     item:"Pen",
//     Price:10};
// console.log("The cost of",obj.item, "is ",obj.Price,"rupees.")


// `string text $(expression) string text`==>To create strings by doing substitutions of placeholders
//  thios phenomenonon is called string interpolation.

let specialstring=`This is a tempelate literals ${1+2+3+4}`;
console.log(specialstring);

console.log("I am kishan \n i will be a great man")
console.log("I am a man\tyou are a \t \t good\tman")