/*
*	Another way that enumerable and non-enumerable properties can be distinguished:
*/

var myObject = {};

Object.defineProperty(
	myObject,
	"a",
	// make 'a' enumerable, as normal
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject,
	"b",
	// make 'b' non-enumerable
	{ enumerable: false, value: 3 }
);

console.log(myObject.propertyIsEnumerable( "a" ));	// true
console.log(myObject.propertyIsEnumerable( "b" ));	// false

console.log(Object.keys( myObject ));	// ["a"]
console.log(Object.getOwnPropertyNames( myObject ));	// ["a", "b"]



