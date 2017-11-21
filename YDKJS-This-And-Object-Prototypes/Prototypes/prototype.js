/*
*	The default [[Get]] operation proceeds to follow the [[Prototype]] link of the object if it cannot fit the
*	requested property on the object directly
*/

var anotherObject = {
	a: 2
};

// create an object linked to 'anotherObject'
var myObject = Object.create( anotherObject );

console.log(myObject.a);	// 2