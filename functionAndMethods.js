// Block of code that perform a specific task, can  be invoked  any time
// e.g. console.log() to print data
// () to call the function
// How to   write a function
// 2 steps
// 1. definition of function
/**
 * function functionName(){
 * // do some work
 * }
 */
function myFunction(){
    console.log("Welcome to workshop");
}
// 2. function call/ function invoke
myFunction();
//functions reduce redundancy
// function input is parameter(function definition)/argument (function call)
//  Nan not a number
function sum( a, b){
    //console.log(a+b);
    let s= a+b;
    return s;
    // return only one value
}
sum(154,560);
let val= sum(3,66);
console.log(`sum is ${val}`);