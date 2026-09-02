// Variable declaration 
let name = "Rohit";
let age = 20;
// not a complicated language simply the last value is assign is printed
age = 30;
console.log(name, age);

// one more way
const account = 1234;
// account = 234;
//error in this
console.log(account);


//older way

var a = 10;
var a = 20;
// var allows to declare the variable many times


console.log(a);

if(true){
    var b = 40;
}
console.log(b);

// it works out of the scope range also
//it only respects the function scope and global scope

// data types

// 2 types

//primitive data types

//in - primitive
//number, string, boolean, undefined, null, bigint, symbol

//Non - primitive data types

//in  Non - primitive
//array, object, function


//number
let e = 20;
let g = 2.3;
console.log(e,g);
//string
let c = "String is coming";
let d = 'Anjali';
console.log(c , d);

//boolean
let login = true;
let f = false;
console.log(login , f);

//undefined
let user;
console.log(user);

//bigint
let num = 156106246652545256226525625n;
console.log(num);

//null
let Weather = null;
console.log(Weather);

//symobol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id2 == id1);


//Non - primitive data type
//array
let arr=[10,20,30,"Rohit",true];
console.log(arr);

//object 
//Rohit 12312 18 gen {No meaning}
//object give a meaningful in key value pair
let person = {
name: "Rohit",
account: 12312,
age: 18,
category: "gen" 
}

//function

function add(){
    console.log("Hello");
}
add();
 
// We can store the function in the variable
let s = function sub(){
    console.log("Hello");
}
s();
//also call

//to check the element which type --

console.log(typeof s);

// there is big bug in js that typeof give the null data type to object not null  
//also array is given to object but there is not a bug array is object in the js
// All non - primitive are object
//but in function they so function but it is also a object