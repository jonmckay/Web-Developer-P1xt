/*
*	Lack of a name idnetifier on an anonymous function makes self-referencing(recursion, event (un)binding, etc) harder which is
*	unfortunately still a drawback to concise methods. They will not have a lexical identifier to use as a self-reference.
*/

var Foo = {
	bar: function(x) {
		if(x < 10) {
			return Foo.bar( x * 2 );
		}
		return x;
	},
	baz: function baz(x) {
		if(x < 10) {
			return baz( x * 2 );
		}
		return x;
	}
};