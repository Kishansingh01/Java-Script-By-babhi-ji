/* <Script>alert("Hello")!</Script>=>This tag will return an alert when we do live server in 
HTML if we do ok its after it will allow to watch our work  */



// WINDOW Object=>Represents an open window in a browser .It is browser's object (not javascript's)
// and is automatically created by the browser. Ex->If we write window.console.log("Hello")
// it will print hello because window always is a global define for the alert,console.log,prompt.

// console.log("I am kishan Kumar Singh");
// alert("I am DON and here i am");
// console.dir(window.document);//All information inside it.
// console.dir(document);
// console.log(document.body);//Objects in the body
// console.dir(document.body.childNodes);
// document.body.style.background="Green";
// document.body.childNotes[3].innerText="abcd";//Sayad abcd print karega in h3

// Upperand belows  all these functions are for go to console(inspect) and do there.

let ID1=document.getElementById("heading");//It returns h1 heading
console.dir(ID1);(slecting with ID)What we are writing inside like "Heading" should be same as in the HtMl

let class1=document.getElementsByClassName("heading-class");
console.dir(class1);//It returns html collection(slecting with class)

let paraghs=document.getElementsByTagName("p");
console.dir(paraghs);(slecting with tags like Paragraph)


let firstEl=document.querytSelector("p");
console.dir(firstEl);//(This method is used for all ID,Class,Tags. It only prints the first of them but below;-)
//Query selectors return node list

let AllEle=document.querySelectorAll("p");(for paragraph)
console.log(AllEle)
console.dir(AllEle);//(This method is used for all ID,Class,Tags. It prints all of them)We have to go
// inspect and console


//For class we have to use (DOT)(.)
let firstEl1=document.querySelector(".myclass");
console.dir(firstEl1)

let allEl1=document.querySelectorAll(".myclass");
console.dir(allEl1)

//For id use(#)
let firstid=document.querySelector("#heading");
console.dir(firstid)

let Allid=document.querySelector("#heading");
console.dir(Allid)

//To know which type of tag is it
let tag=document.querySelector("p");
console.log(tag.tagName);

console.dir(document.body.firstChild);
//(IT brings the text in the DOM)

document.querySelector("div").children;
//It gives the HTML collection

let div=document.querySelector("div");
console.dir(div);

div.innerText//Prints the fruits name which i have taken in the div
(Here inside div has 2 ul and has three li)

HTMLHeadingElement.textContent=>Old heading which is in the hidden it shows








