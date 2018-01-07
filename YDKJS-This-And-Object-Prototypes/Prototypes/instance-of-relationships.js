/*
*	This example below shows the ridiculousness of trying to reason about
*	relationships between two objects using class semantics and instanceof
*/

// helper utility to see if 'o1' is
// related to (delegates to) 'o2'
function isRelatedTo(o1, o2) {
	function F() {}
	F.prototype = o2;
	return o1 instanceof F;
}

var a = {};
var b = Object.create( a );

console.log(isRelatedTo( b, a ));	// true
