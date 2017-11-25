/*
*	All functions by default get public, non-enumerable property on them called prototype
*/

function Foo() {
	//...
}

var a = new Foo();

console.log(Object.getPrototypeOf( a ) === Foo.prototype);	// true