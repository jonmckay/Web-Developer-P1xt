/*
*	You can add .constructor back to the Foo.prototype object manually to pepetuate the misconception
*	that "constructor" means "was constructed by".
*/

function Foo() { /* .. */ }

Foo.prototype = { /* .. */ };	// create a new prototype object

// Need to properly "fix" the missing '.constructor'
// property on the new object serving as 'Foo.prototype'
// See Chapter 3 for 'defineProperty(..)'
Object.defineProperty( Foo.prototype, "constructor" , { 
	enumerable: false,
	writable: true,
	configurable: true,
	value: Foo	// point '.constructor' at 'Foo'
} );