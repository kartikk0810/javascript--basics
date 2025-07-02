const accountId = 14453;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;

// accountId = 2    this will not execute in browser because we can not change the constant value

 accountEmail = "xyz@gmail.com";
 accountPassword = "67890";
 accountCity = "Bengaluru";
/*
we dont use var 
beacuse of issue in block scope and functional scope in js
*/

// console.log(accountPassword);
 // there is another way to console out all variable variable in a single function using square brackets mention below using console.table 

 console.table([accountEmail , accountPassword , accountCity , accountState]);