// EVENT=>The change in the state of an object is known as Event.
// Event are fired to notify code of "interesting changes" that may effect code execution.
// Ex-When i do a clich in mouse it get changes,when i click double it got changes ,after 
// submitting the form it also fet changes.In keyboard i am pressing any keyboard it got 
// changes.


/* <button onclick="console.log('Button was clicked!');">Click me!</button>
(onclick is used for giving instructions to the button)

<button ondblclick="console.log('I am doing double click')">Double click</button>
(ondblclick print after the double click)

onmouseover=>Means i am hovering to div after making div
<div onmouseover="console.log('this is a div')";This is a div</div>

onclick,ondblclick,onmouseover are called inline event handling means i am giving it
inside HTML event tag */

// (BUT WHAT WEWROTE ON UP MAKES MORE BULKY.THAT'S WHY WE USE NODE.EVENT WHERE WE GIVE A function
//     AND CALL IT IN HTML EVENT TAG )



// Here i have make a button in HTML and i have made in different way i making arrow function
// let btn=document.querySelector("#btn1");
// btn1.onclick=()=>{
//     console.log("Button1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }


// Here i have make a div and there a box and in HTML and CSS and i have make a CSS statement 
// that if i will hover on it it will give the change
// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("I am hovering on div box");
// }



// If we are doing by inline and node in javascript the priority we that will 
// be is of node and once we handle we are not able to do in another tag on
// the same  we cannot use



// IMPORTANT THINGS:-It is a special object that has details about the event.
// All event handlers have access to the Event object's properties and methods.Like as
// e.target,e.type,e.clintX,e.clientY.Generally we called it an event.
// Node.event=(e)=>{
// }

// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log("Button1 was clicked");
//    };
// Up will print event of all occuring after inserting evt in parentheses


// This will print pointerEvent of all the events happened
// let btn1=document.querySelector("#btn1");
// btn1.onclick=(evt)=>{
//     console.log(evt)
// };



//This will print the event what we need
let btn1=document.querySelector("#btn1");
btn1.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clintX,evt.clintY);
};
//But up is the only for the only one time after declaring in one time i am not able to accessit
// So,Event listeners comes into the concept

// EVENT LISTENERS=>They do many times after declaring of the onclick,ondblclick,onmouseover
// they just make a listen again and again time and they used to do on instanceof.

// CALLBACK=>Callback is a that type of function which works like as an arguments

