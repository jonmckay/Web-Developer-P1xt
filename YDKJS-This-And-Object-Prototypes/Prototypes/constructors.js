/*
*	Foo.prototype gets a .constructor which is a reference back to the function that the
*	object is associated with.
*/

function Foo() {
	// ...
}

console.log(Foo.prototype.constructor === Foo);	// true

var a = new Foo();
console.log(a.constructor === Foo);	// true