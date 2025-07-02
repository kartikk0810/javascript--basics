let score = "Hello World";

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score);

//console.log(typeof valueInNumber);

//console.log(valueInNumber);

// "33" = 33 string value converted in number
// "33abc" = NaN it shows nan means not a number this will convert into number but stills it shows not a number
// true = 1 , false = 0 boolean value conversion into number 

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// when we store value 0 that means we stored value in  number and when its converted to boolean it shows false

// and when we stored value 1 that also means we stored value in number and its converted to boolean it shows true

// same we can do in string also convert into boolean data type 


// if we store empty string like this "" it passes false 

// if we store data in string like this "Hello World" it passes the value true 

let someNumber = 33;
let StringNumber = String(someNumber);

//console.log(someNumber);
//console.log(typeof StringNumber);

// converting number into string  example above



// ************** operations *******************************

let value = 3;
let negValue = -value;
//console.log(negValue);

//  this will automatic print value in negative beacuse we stored negvalue as neagtive

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 2);
// console.log(3 % 2);

let str1 = "Hello";
let str2  = " World";
let str3 = (str1 + str2);
// console.log(str3);


console.log("1" + 2 + 2);

console.log(1 + "2" + 2);

console.log(1 + 1 + "2");

// if first value stored in string then it will consider all data into string

// if first value stored into numeric then it will goes to left to right and then print the total value first its solve 1 + 1 =2 then string value is "2"
// output will show 22 






