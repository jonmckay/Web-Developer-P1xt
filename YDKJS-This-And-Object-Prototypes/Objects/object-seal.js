/*
*	Object.seal(..) creates a "sealed" object, which means it takes an existing object and essentially calls
*	Object.preventExtensions(..) on it, but also marks all its existing properties as configurable:false.
*/

var myObject = {
	a: 2
};

Object.seal( myObject );
