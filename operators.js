// single line comments
/* 
Multiline comment
*/
// Operators in JS
//Arithmetic operators +-*/ 
/**
 * Modulus % value of remainder 5%2= 1
 * Exponentiation a**b
 * Increment Unary operator ++
 * decrement --
 * To comment all  ctrl+/ and same for uncomment
 * a++ post increment
 * ++a pre increment
 * 
 
*/
let a =5;
let b=10;
console.log("a+b: ", a+b);
console.log("a-b: ", a-b);
console.log("a*b: ", a*b);
console.log("a/b: ", a/b);
console.log("a%b: ", a%b);
console.log("a**b: ", a**b);
console.log("++a: ", ++a);//6
console.log("a++: ", a++);//6 7


// Assignment Operators
/**
 * =
 * += a=a+4
 * -= a=a-4
 * In class all arithmetic operators will be used to as a assignment operators
 */
a=a+4;
a += 4;
a+=4;
console.log(a);
//Comparison Operators
/**
 * return true or false
 * == equal to 
 * != not equal to
 * strict version
 * === equal to and type
 * !== 
 * greater than 5 >
 * >=
 * <
 * <=
 * 
 */
console.log("a==b: ", a==b);
console.log("a!=b: ", a!=b);
console.log("a===b: ", a===b);
console.log("a!==b: ", a!==b);

let x=5;
let y="5";
console.log("x==y", x===y);
// Logical operators
/**
 * Logical and && single & is bitwise operators
 * logical OR ||
 * Logical not !
 *  
 */
// let a =6;
// let b=5;
let cond1= a>b; //true
let cond2= a===6; // true
console.log(cond1 && cond2);

// conditional statement
/**
 * 3 type
 * examples 
 * if (){}
 * if(){} else{} else cannot be declared without if
 * else if statement
 * if(){} else if(){} else{}
 */
let age=25;
if(age>18){
    console.log("You can vote");
}
//let age=19;
let decision= age>18? "You can vote":"you cannot vote";
console.log(decision)
//let age=19;
age>18? console.log("You can vote"):console.log("you cannot vote");
//Ternary operators
/**
 * condition ? true output: false output
 * age >18 ? "adult": "not adult"
 */
let result =age >18 ? "adult": "not adult"// simple and compact if else
console.log(result);
//important MDN docs
//switch statement
switch(age){
    case 18:
        console.log("adult");
        break;
    case 60:
}
// let fruit= prompt("Enter fruit name: ");
//console.log(fruit);
// alert("Hello"); // sinle time popup
// let username= prompt("Enter username");
// console.log("username", username);