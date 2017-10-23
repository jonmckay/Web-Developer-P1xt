/*
*	If a properties configurable descriptor is set to false, the ability to use the delete operator to remove
*	an existing property is prevented.
*/	

var myObject = {
	a: 2
};

console.log(myObject.a);	// 2
delete myObject.a;
console.log(myObject.a);	// undefined

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: true,
	configurable: false,
	enumerable: true
} );

console.log(myObject.a);	// 2
delete myObject.a;
console.log(myObject.a);	// 2