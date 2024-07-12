/** Array is a collection of objects/items
 * if we want to store information of same type 
 * Linear method to store any information
 * In JS we can add different datatypes in a single array but not prefered
 */
let heros=["Maha", "Zainab", "IK", "QA","AI"];
console.log(heros);
console.log(typeof heros);
let marks=[56,84,21,56,34,84];
console.log(marks);
console.log(typeof marks);
let student1=["Asad",24,85];
console.log(student1);
console.log(typeof student1);
// Property of length
console.log("Length of marks: ", marks.length);
// it is also an object.
// it works like key-value pair, however keys are indicies
console.log("",typeof marks);
// Array Indices
// arr[0], arr[1], arr[2]
// the index that does not exist in an array ,  answer would be undefined
// can change in array
//Means strings are immutable(cannot change) and arrays are mutable(can change)
marks[2]=66;
// loops an array
// iterable(strings, arrays, objects)
// for loop we use length prop
for(let i=0; i<marks.length; i++){
    console.log(marks[i]);
}
// prefer for of loop but also can use for in loop
for(let mark of marks){
    console.log(mark);
}
for(let mark in marks){
    console.log(mark);
}
// Example 
// average of marks
let sum=0;
for(let mark of marks){
    sum+=mark;
}
let avg=sum/marks.length;
console.log(`Average marks of class: ${avg}`);
// Another example to give offer on items
let items= [250, 645, 300, 900, 50];
//using for of loop
let i=0
for (let item of items){
    let offer= item/10;
    items[i]=items[i]-offer;
    console.log(`Value after offer: ${items[i]}`);
    i++;
}
for(let i=0; i<items.length; i++){
    let offer= items[i]/10;
    items[i] -= offer;
    console.log(`Value after offer: ${items[i]}`);
}
// Array methods
//push( ) add to end
// pop() delete from the end and return
// toString(): converts array to string 
//2 types of methods. 1 make changes 1 cannnot

let fruits=["Apple", "Bnanas", "Guava", "lichi", "Peach"];
console.log(fruits);
fruits.push("Mangoes");// change in orignal array
console.log(fruits);
fruits.pop();
fruits.pop();
console.log(fruits);
