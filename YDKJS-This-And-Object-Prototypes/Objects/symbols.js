/*
*	The most common usage of computed property names will be for ES6 symbols. 
*/

var myObject = {
	[Symbol.Something]: "hello world"
};

console.log(myObject[Symbol.Something]);	// "hello world"

