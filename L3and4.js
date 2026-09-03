//THE CODE AND INSTRUCTION FIRST GO TO THE RAM AND THEN GO AND COMEBACK FROM THE CPU
//In heap if we store data then we have to store its address in the stack
//Stack is similar which follow the Li-Fo
//stack store in structured way while heap in unstructured way anywhere in the code
// like if i want to store numbers so i store the number in stack
//And the dynamic data (string, objects, array) so we have to store in heap
// Same for primitive data type we have allocate the primitive value in heap and its address in stack
  
// let a = 10;
// let b = 30;

// a = 20;

// console.log(a, b);

// that way the a value is updated because in stack it is store address and value in heap we can change the address in heap 

//In the starting of the program memory is allocated to null, undefined, true, false in heap for memory efficient the no need to declare again and again
// garbage collector remove the value in heap which does not have the pointer from the stack

// for(let i = 0; i < 100; i++){
// console.log(i);
// }
//For the loops if we store the values in the heap there is lots of memory they take which make the system work slower
//So we use the (base+index*8)
//by the help of this we find the values
//there is way in 32 bit if the last (31th) bit is 0 then it is pointing to the number and if the 31th bit is 1 then we have to check which data is store
//also if the first bit is 0 then the value is positive else negative
//At end mean we store the value in the form of address stack that time






// Lecture 4

//if we want to convert datatype to another datatype
let z = "10";
let c = Number(z);
//let a = "121ac";
//output is  : NaN - not a number , it is datatype of number
console.log(c);
//for proof
console.log(typeof c);
//When we compare the number with the string {JavaScript convert the string into number}
//console.log(x===y) it is the method to compare the strick check before the program run is they are same datatype or not
 
//number --> string
//boolean --> number 
//null --> 0  -- type of
//undefined --> NaN  --type of
//boolean --> string
//number --> boolean -- if the number is non - zero the value is true otherwise false
//string --> boolean -- empty string is false otherwise all are true


//Challenge in Computer Science

let x = 0.1;
let y = 0.2;

let q = x + y;
console.log(q);

// null is loosely equal to undefined only

console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null == "");
console.log(null ==  false);
console.log(null == true);


----- 39:45;