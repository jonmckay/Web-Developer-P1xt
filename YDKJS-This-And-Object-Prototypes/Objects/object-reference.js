/*
*	Some example code showing that assigning properties in an object isn't duplicating that object and is instead
*	referencing it.
*/

function anotherFunction() { /* */}

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


