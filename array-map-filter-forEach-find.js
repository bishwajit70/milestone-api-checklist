// array map 
/* 
Array map goes each element of a array and then do something 
to each element and return an array.
*/

// Example:
/* const numbers = [7, 14, 28, 56, 112];
const divideBySeven = (numbers) => numbers /7
const output = numbers.map(divideBySeven);
console.log(output); */

// Array Filter 
/*  
Array filter check each element of an array by a given specific condition then return the result as an array.
*/
// Examples:
/* 
const numbers = [7, 14, 28, 56, 112];
const output = numbers.filter(number => number > 50);
console.log(output); 
*/

// or 

/* 
const numbers = [7, 14, 28, 56, 112];
const output = numbers.filter(number => number < 50);
console.log(output); 
*/

// Array Find 
/* 
Array find will give an element of an array. 
*/
// Example: 

/* const numbers = [7, 14, 28, 56, 112];
const output = numbers.find(number => number == 112);
console.log(output); */


// forEach 
/* 
array forEach gives each element as output. 
*/
// Example :

/* 
const numbers = [7, 14, 28, 56, 112];
numbers.forEach(number => {
    console.log(number);
});
 */