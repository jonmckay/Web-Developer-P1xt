/*
*	To access a value at a location in an object, either the . operator or the [ ] operator is used.
*	Property access requires an identifier compatible property name after it whereas the key syntax can
*	take basically any compatible string.
*/

var myObject = {
	a: 2
};

// Property access
console.log( myObject.a);	// 2

// Key access
console.log( myObject["a"]);	// 2