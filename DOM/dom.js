// DOM 
/** 3 Musketeers of web development
 * HTML, CSS, JS
 * Structure, style, Logic
 * Basic struture
 * to link html with css we use link tag
 * to link html with js we use script tag
*/
console.log("Hello");
//alert("Hey");
/**
 * Benefits to write js in a seperate file
 * readibility
 * modularity
 * browers loading will be fast 
 */
/**
 * Window object represent an open window in browser.  It is browser's object(not JavaScript's)
 * and it is automatically created by the browser.
 * it is a global object with alot of propertise and methods
 */
console.log(window);
window.console.log("Hello again")
// alert and prompt are part of window object
// Document object model
/** All HTML tags convert to object(document) in JS code */
// When we load the page html page is converted into object named document in window object.
// print window.object
// console.log print dom elements
// console.dir print document object // print documents propertise and methods
//console.dir(window); // print methods and propertise
console.log(window.document);
console.dir(window.document);
// the method to access html into js is actually a dom
console.dir(document.body.childNodes[3].innerText="abcd");
// js will make dynamic changes
//document.body.childNodes[3].innerText="abc";
// when we do not want to change our html or css but want to make changes it is called dynamic change
// those dynamic changes are possible because of DOM
// dynamic changes means when a user do some thing we make changes
//document.body.style.background="green";

// DOM Manipulation
// If we add script tag in the start it will not be null. this is why we add it at the end
// Now we will learn how to select an element
// id is represented by  #
/**
 * 1. Select by ID
 * document.getElementbyID("heading");
 * wrong ID name will return null
 * 2. document.getElementsByClassName("myClass")
 * If we will not pass a correct class name then our HTMLCollectuib will be empty
 * return html collection. similar to an array 
 * 3. document.getElementsByTagName("p")
 * 4.document.querySelector("myID/myClass/tag")
 * It will return first element
 * 5. document.querySelectorAll("myId/myClass/tag")
 * return a NodeList 
 *  */
let heading = document.getElementById("heading");
console.dir(heading);
let firstElement=document.querySelector("p");
console.dir(firstElement);
let allElements= document.querySelectorAll("p");
console.dir(allElements);
let firstElement=document.querySelector("p");
console.dir(firstElement);
let allElements= document.querySelectorAll("p");
console.dir(allElements);