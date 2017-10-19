/*
*	ES6 has an object function called assign. Assign allows a shallow
*	copy of an object to be made.
*/

function anotherFunction() { /*..*/ }

var anotherObject = {
	c: true
};

var anotherArray = [];

var myObject = {
	a: 2,
	b: anotherObject,	// reference, not a copy!
	c: anotherArray,	// another reference!
	d: anotherFunction
};

anotherArray.push( anotherObject, myObject );

var newObj = Object.assign( {}, myObject );

console.log(newObj.a);
console.log(newObj.b === anotherObject);
console.log(newObj.c === anotherArray);
console.log(newObj.d === anotherFunction);