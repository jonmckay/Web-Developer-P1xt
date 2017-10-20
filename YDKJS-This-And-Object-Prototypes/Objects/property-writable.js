/*
*	The ability for you to change the value of a property is controlled by writable/
*/

var myObject = {};

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: false,	// not writable!
	configurable: true,
	enumerable: true
} );

myObject.a = 3;

console.log(myObject.a);	// 2