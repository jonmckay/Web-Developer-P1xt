/*
*	As long as a property is currently configurable, its descriptor definition can be modified using
*	the defineProperty() utility. Trying to redefine the property will not work if its configurable
*	definition is false.
*/

var myObject = {
	a: 2
};

myObject.a = 3;
console.log(myObject.a);	// 3

Object.defineProperty( myObject, "a", {
	value: 4,
	writable: true,
	configurable: false,	// not configurable!
	enumerable: true
} );

console.log(myObject.a);	// 4
myObject.a = 5;
console.log(myObject.a);	// 5

Object.defineProperty( myObject, "a", {
	value: 6,
	writable: true,
	configurable: true,
	enumerable: true
} );	// TypeError
