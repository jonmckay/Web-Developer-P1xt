/*
*	If you want to prevent an object from having new properties added to it, but otherwise leave the rest of
*	the object's properties alone, call Object.preventExtensions(..)
*/

var myObject = {
	a: 2
};

Object.preventExtensions( myObject );

myObject.b = 3;
console.log(myObject.b);	// undefined

