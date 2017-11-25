/*
*	When using a for..in loop to find a property on an object, the in will look through the entire [[Prototype]] chain.
*	The default [[Get]] operation proceeds to follow the [[Prototype]] link of the object if it cannot find the requested
*   property on the object directly.
*/

var anotherObject = {
	a: 2
};

// create an object linked to 'anotherObject'
var myObject = Object.create( anotherObject );

for(var k in myObject) {
	console.log("found: " + k);
}

// found: a

console.log(("a" in myObject));	// true