// If we change the value of primitive like

let str = "Rohit";
console.log(str[0]);

str[0] = "M";
console.log(str);
console.log(str[0]);

//This is happen because the Primitive data types are immutable (the value does not change if written onetime) 

let a = 10;
a = 20;
console.log(a);

//In this the value of a is mot change the new memory is store the new value of a and a is now indicating the new value.
//There is also not any address operator in js otherwise we have one more way to prove it.

//Non- primitive data types are mutable

let arr = [10, 20, 30, 40];

arr.push(90);

console.log(arr);   

//primitive follows copy by value or pass by value
let obj = {
    name:"Mohan",
    age:18
}
let obj1 = obj;

obj1.name = "Rohan";

console.log(obj);

//Non - primitive follows the pass by reference
//it is for memory efficient because the indicating the same thing which is stored in onetime in memory