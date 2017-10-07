/*
*	A DMZ (de-militarized zone) object is nothing more special than a completely empty, non-delegated object.
*	This example uses ø (empty set) as the DMZ object.
*/

function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

// our DMZ empty object
var ø = Object.create( null );

// spreading out array as parameters
foo.apply( ø, [2, 3] );	// a:2, b:3

// currying with 'bind()'
var bar = foo.bind( ø, 2);
bar( 3 );	// a:2, b:3



