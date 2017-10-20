/*
*	As of ES5, all properties are described in terms of a property descriptor.
*/

var myObject = {
	a: 2
};

Object.getOwnPropertyDescriptor( myObject, "a" );
// {
//		value: 2,
//		writable: true,
//		enumerable: true,
//		configurable: true
//}

