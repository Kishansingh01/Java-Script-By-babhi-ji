// Create a new button element and write a click me background color red ,color white .Insert 
// the buttom as the first element inside the body tag.

// Create a p tag in html give it a class or some styling ,now create a new clas in css 
// and try to append this class to the p element Solve the problem using class list.


let newBtn=document.createElement("button");
newBtn.innerText="click me!";
newBtn.style.color="White";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);
