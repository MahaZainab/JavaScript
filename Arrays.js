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

