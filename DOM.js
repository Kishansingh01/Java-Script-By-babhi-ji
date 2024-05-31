// DOM=> stands for document object model
//    When a web page is loaded ,the browser creates a document object model(DOM) of the page

// Other words-what we writes inside the html can be access in the javascript in the form of an 
// object and that special object is called documents and this documents avaliable in the window
// object and inside that window object one object also come which we called subobject 
// from there we can access the whole ConvolverNode.

// console.dir=>It is used to print the properties and methods of document objects
//DOM basically for the dynamic changes in the webpages

//When we  load script before the body ,DOMS do not get asseccible there.

//When there no exist any id element there show null value.

//When there no exist any class value there shows emptyvalue.

//Tagname=>Return tags for element nodes

Body->Div or script->(Div->img,h1,p,Div)->ChildNodes
Parents->child->Siblings


Node=Inside DOMS tree all indivisual things are called Node.
Ex=>Window-Document-HTML(head,body)->MediaMetadata,title,link,div, script,img,h1,p,

Child of body id DIV AND DIV child child is img,h1.

DOM tree has three NodeList
1)Text Node
2)comment Node
3)Elements Node(SEARCH ABOUT IT AND MAKE A EXPLORE FORM TOY YOURSELF)

inner taxt and innerHTML the difference is the only that only text information comes there and in html 
inside tag,h1,p,div all are there

div.innerText="abcd";
//Isme hm div inside what writes there it will print only abcd

innerHTML=>Returns the plain text or HTML contents in the Element

textContent:returns textual content even for hidden elements
//Iska use hm style inside hidden what i have written used to filter


//I have to conconate Hello JavaScript ! + from apna college students in console dirctly
//So, I use 
let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText +"from apna college students"

//To go into all three DIV (All will come under Nodes)
let divs=document.querySelectorAll(".box");
console.log(divs)
divs[0]
divs[1]
divs[2]
(If i write all three it will return only in the last div)

//If i have to change the text inside div what i have writte then do
let divs=document.querySelectorAll(".box");
divs[0].innerText="new unique value 1"
divs[1].innerText="new unique value 2"

//To print all three Divs
let divs=document.querySelectorAll(".box");
for(div of divs){
    console.log(div)
}
//If i have to add a number in every div by +1 so, i have to use loop because in loop 
//we have to handle with 100000 that types of div So,We have to use loop for this i have to ma
//make many divs inside HTML and by going to console i can change insid the div by using loop
let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}

// Inside div i am giving some attributes like id  or class , So it is called attributes
// to get the attributes of div in id name whose name i have given is the Ram(38-40 lines)
//In div after id after name there is attribute So it prints the attribute
let div=document.querySelector("div");
console.log(div);
let id=div.getAttribute("id");
console.log(id)
let name=div.getAttribute("name");
console.log(name)
//For get the Paragraph as an attribute
let para=document.querySelector("p");
console.log(para.getAttribute("class"));

//TO SET A NEW ATTRIBUTES (like i have given a class in attribute but i am changing it now)
let para=document.querySelector("p");
console.log(para.setAttribute("class","New class"));

//For the attribute styles(It changes the color )
let div=document.querySelector("div");
div
div.style
div.style.backgroundColor="Green";//(By changing color)
div.style.fontSize="26px";(To change the size of font )
div.innerText="Hello";(It will change the text and convert it into Hello)

div.style.visibility="hidden"



//For creating a button in console and writing its name click me!To show in our screen 
//have to use .append after this it will show to our front(click button will be come at the 
//ending of the node add at the end of the node)
let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn)
let div=document.querySelector("div");
div.append(newBtn);//(It add elements from the end)
div.prepend(newBtn);//(It add elements from the starting )
div.before(newBtn);//(//It add elements just before the div)
div.after(newBtw);//(//It add elements just after the div)

let p=document.querySelector("p");
p.after(newBtn);(To add buttom from the p )

//Creating new element in h1 and giving it up a hi, i am new name.
let newheading=document.createElement("h1");
newheading.innerHTML="<i>Hi,I am new!</i>";
document.querySelector("body").prepend(newheading)


//I have assined to my paragraph to remove it
let para=document.querySelector("p");
para.remove();



// Question: Create a new buttom element give it a text "click me",background color of red &
// text color of white. Insert the buttom at the first element inside the body tag.

let newBtn=document.createElement("button");
newBtn.innerText="click me";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);


// Create a <p> tag in html,give it a class and some styling. Now create a new class in
// CSS and try to append this class to the <p> element .Did u notice,how to overwrite 
// the class name when u add a new one ?Solve this problem using classList.
para.setAttribute("class","newClass");


// If i have already declare a paragraph and i am making another paragraph in console through
// inspect then first paragraph will be get delete i think style to avoid this we use class list
// it has class attributes  to add a new aragraph
para.classList.add("newclass");

We can also remove new class by-
para.classList.remove("newclass");


