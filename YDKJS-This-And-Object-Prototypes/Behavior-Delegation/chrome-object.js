/*
*	If you dont use a constructor to make your objects, then you'll get objects that Chrome does not track an internal
*	constructor name for, and such objects will correctly only be outputted as Object(), meaning object generated from
*	Object() construction. Chrome will display object{} in the example below.
*/

var Foo = {};

var a1 = Object.create( Foo );

console.log(a1);	// Object {}

Object.defineProperty( Foo, "constructor", {
	enumerable: false,
	value: function Gotcha() {}
});

console.log(a1);	// Gotcha {}