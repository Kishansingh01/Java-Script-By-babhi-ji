// These are built in functions to manipulate a string

// let m="ram is a good boy he is a great student";
// console.log(m.toUpperCase())
// console.log(m)



// let l="RAM IS A BAD BOY he plays CRICket ";
// console.log(l.toLowerCase())
// console.log(l.length)


// let n="    He is a GOOD BOy    ";
// console.log(n.trim())
// // It removes spaces from starting and last only


// // #Doing slicing
// let str="Almond12345";
// console.log(str.slice(0,6))

// let str1="Almond12345";
// console.log(str1.slice(1))



// // To concocate numbers
// let ram="Ram Ram";
// let shyam="  Shyam Shyam";
// let Sita=ram.concat(shyam)
// let Man=ram+shyam;
// console.log(Man)
// console.log(Sita)


// // To replace the value
// let me="You are playing  cricket";
// console.log(me.replace("You","They"))

// let Ram="Rahman is a boy";
// console.log(Ram.replace("Rahman","Aaryan"))



// // To find the  Index of the character of the given string
// let TinaDabi="She is an IAS officer";
// console.log(TinaDabi.charAt(2))


// String is Immutable

// let str2="I love JS";
// str2[0]="S";
// console.log(str2)
// console.log(str2.replace("I","S"))




// let username=prompt("Enter your name");
// Concating="@"+username+username.length;
// console.log(Concating)


// To add any items in the last we have to do pushing
// let foodItems=["Potato","Tomato","Peas","Chilly"];
// foodItems.push("chips","Mango");
// console.log(foodItems);



//  To remove items in the last
// let colour=["White","Yellow","Green","Red"];
// colour.pop("Red");
// console.log(colour)



// To convert array into an string
// let array=["Ram","Mohan","Shyam","Rahman",233,45,56];
// console.log(array.toString());


// Adding two arrays
// arr1=[1,2,3,4,5,"Spider"];
// arr2=[6,7,8,9,10,"Dwell"];
// add1=arr1+arr2;
// console.log(add1)


// arr1=[1,2,3,4,5,"Spider"];
// arr2=[6,7,8,9,10,"Dwell"];
// let add=arr1.concat(arr2);
// console.log(add)


// To add elements in the first(Unshift)
// let demon=["Marble","Thor","Spiderman"];
// demon.unshift("Ram");
// console.log(demon)



//To delete from the last
// let name=["Kishan","Didi","Mummy","Papa","Babli"];
// name.shift();
// console.log(name)


//Slicing method in array It does not change in an real array
// let marvelHeroes=["Thor","Spiderman","Ironman","antman"];
// console.log(marvelHeroes.slice(0,3))
// console.log(marvelHeroes.slice())
// console.log(marvelHeroes.slice(2))



//Splice methods => It changes original array (add,remove,replace)

//  let array=[1,2,3,4,5,6,7,8,9];
//  array.splice(3,2,"Mohan","Sohan");
//  console.log(array)

// To add any number in next to the index
// let arr1=[1,2,3,4,7,8,9];
// arr1.splice(1,0,101);
// console.log(arr1)


// //To remove an element in an array

// let arr=[1,2,3,4,5,6,7];
// arr.splice(2,1);
// console.log(arr)

// To replace an element
let arr=[1,2,3,4,5,6];
arr.splice(3,1,102);
console.log(arr)
arr.splice(2);
console.log(arr)
arr.splice();
console.log(arr)
