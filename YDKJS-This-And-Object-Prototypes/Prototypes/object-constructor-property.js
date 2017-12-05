/*
*	A misconception developers have is thinking a constructor means was constructed by. This is not the case.
*	The example below shows a1 going up the prototype chain looking for .constructor. It first looks at
*	Foo.prototype which doesn't have one. It keeps delegating until it gets to Object.prototype at the top of the
*	delegation chain. That object has a .constructor on it, which points to the built-in Object(..) function.
*/

function Foo() { /* .. */ }

Foo.prototype = { /* .. */ };	// create a new prototype object

var a1 = new Foo();
console.log(a1.constructor === Foo);	// false!
console.log(a1.constructor === Object);	// true!