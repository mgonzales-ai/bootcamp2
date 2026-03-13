//Exercise 3 Functional programming applications
//1.-Create an array method call that takes an array of strings and returns an array 
// containing the capitalized version of each string.
//Hint: Use a map method.
//Hint 2: You can use str => str.charAt(0).toUpperCase() + str.slice(1) as arrow function to do this.

const originalvalues=['perro','gato','elefante'];
const capitalized=originalvalues.map(str=>str.charAt(0).toUpperCase()+str.slice(1));

console.log(capitalized);

//2.-Create an array method call that takes an array of numbers and only returns the ones 
// that are between 50 and 75.
//Hint 1: Use a filter method.
//Hint 2: You can use a condition similar to the ones we learned in the conditionals session.
const numbers=[5,10,20,30,40,50,55,60,65,70,75];
const selectnumber=numbers.filter(n=> n>=50 && n<=75);
console.log(selectnumber);
