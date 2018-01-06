/*
*	Consider the example below when determining the ancestry (delegation linkage) of 'a'
*/

function Foo() {
	// ...
}

Foo.prototype.blah = ...;

var a = new Foo();

a instanceof Foo; // true