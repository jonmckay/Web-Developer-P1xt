/*
*	This is the cleaner way of implementing prototype reflection
*/

function Foo() {

}

var a = {};


Foo.prototype.isPrototypeOf( a ); // true