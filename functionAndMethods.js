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
welcom();
function myFunction(){
    console.log("Welcome to workshop");
}
// 2. function call/ function invoke
myFunction();
let sum=40;
let updatedValue=welcom(sum);
console.log(updatedValue);
// //functions reduce redundancy
// // function input is parameter(function definition)/argument (function call)
// //  Nan not a number
// function sum( a, b){
//     // local variable block scope
//     //console.log(a+b);
//     let s= a+b;
//     return s;
//     // return only one value
// }
// sum(154,560);
// let val= sum(3,66);
// console.log(`sum is ${val}`);
// /** Arrow funciton
//  * compact for
//  * 
//  */
const val= (sum) =>{
    console.log(sum);
    sum+=3;
    console.log("Hello, Welcome to this workshop");
    return sum;
}

const arrowSum= (a,b)=>{
    console.log(a,b);
}
// // console.log(arrowSum(2,4));
// map, reduce, arrow, foreach loop