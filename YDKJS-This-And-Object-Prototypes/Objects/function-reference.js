/*
*	Accessing a property on an object is called property access. Even if the property references a function it still
*	keeps the name of property access.
*/

function foo() {
	console.log( "foo" );
}

var someFoo = foo;	// variable reference to 'foo'

var myObject = {
	someFoo: foo
};

console.log(foo);				// function foo(){...}

console.log(someFoo);			// function foo(){...}

console.log(myObject.someFoo);	// function foo(){...}