/*
*	Using defineProperty(), the default values for the property descriptor characteristics can be set when defining
*	a property.
*/

var myObject = {};

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: true,
	configurable: true,
	enumerable: true
} );

console.log(myObject.a);	// 2

