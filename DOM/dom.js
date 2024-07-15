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
// When we load the page html page is converted to object
//console.dir(window); // print methods and propertise
console.log(window.document);
console.dir(window.document);
// the method to access html into js is actually a dom
console.dir(document.body.childNodes[3].innerText="abc");
// js will make dynamic changes
//document.body.childNodes[3].innerText="abc";
// when we do not want to change our html or css but want to make changes it is called dynamic change
// those dynamic changes are possible because of DOM


// DOM Manipulation
// If we add script tag in the start it will not be null. this is why we add it at the end