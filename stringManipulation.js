//String sequence of character use to represent text
let userName="Maha";
let user2='Zainab';
console.log(user2.length);
//strings have in built propertise and functions
/**
 * Propertise
 * str.length
 * behave like object
 * string indices
 * console.log(user2[0]);
 * Template literals
 * 
 */
//Template Literals
let product={
    item:"pen",
    price:10
};
console.log("the cost of ", product.item , "is ", product.price, " rupees");
//product.price is converted to string
output=`the cost of ${product.item} is ${product.price} rupees`;
//called string interpolation
console.log(output);
// Escape character \n for next  line \t for tab
// count as a single character

/**
 * String methods/ functions
 * builtin functions  to manipulate the  string
 * str.toUpperCase()
 * str.toLowerCase()
 * str.trim()// remove white spaces
 * do  not change in  original string.  create a new  string
 */
userName.toUpperCase();
console.log(userName.toUpperCase());
// String are immutable and we cannot change in orignal 
//trim remove extra spaces from  start and end
let str="          hello   world         ";
console.log(str.trim()); 
/**
 * str.slice(start, end?)//return part of a string and end is not inclusive
 * concatination str.concat(str2); //str1+str2
 * str.replace(searchval, newVal);// only replace on time in the start
 * str.replaceAll(searchVal, newVal);
 * str.charAt(0);
 * 
 * 
 *  */ 
userName="Maha Zainab";
let updatedUserName= "@"+ userName.replace(" ", "") + userName.length;
console.log(updatedUserName);