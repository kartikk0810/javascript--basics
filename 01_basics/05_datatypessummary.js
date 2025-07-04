// primitve data types 

// 7 types : string , number , bigInt , boolean , null , undefined , symbol

// these are exmaples of primitive data types 

let name = "Hello World"
let score = 100.3;
let bigInt = 123456789000000000n;
let isLoggedIn = true;
let outsideTemprature = null;
let place = undefined;
console.table([name , score ,bigInt , isLoggedIn , outsideTemprature , place]);

// symbol data type

const num = Symbol('1234');
const numBig = Symbol('1234')
console.log(num === numBig);

// in symbol if we pass same value they stored diiferently beacuse we have given a special symbol and browser know with the help of symbol these data are not same



// reference datatype / non primitive data types


// arrays , objects , functions

const heroes = ["shaktiman" , "saibaba"];
console.log(typeof heroes);

// this is the example of arrays it stored in square brackets and its output becomes an object 

let  myObj = {
    myname: "Hello World" ,
    age: 27

}
console.log(myObj);

// this is the example of object it is written in curly brackets and output is given as object 


let myFunction = function(){
    console.log("Hello World");
}
console.log(myFunction);

// function returns in function

// arrays return in object object returns in object function returns in function