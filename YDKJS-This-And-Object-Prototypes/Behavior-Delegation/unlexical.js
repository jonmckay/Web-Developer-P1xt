/*
*	The one minor drawback to concise method declarations is that the method becomes an anonymous function expression.
*	Bar() is an example of one of those expressions.
*/

var Foo = {
	bar() {/*..*/}
	baz: function baz() { /*..*/}
};

// Here's the syntactic de-sugaring that expresses how that code will operate:
var Foo = {
	bar: function() { /*..*/ }
	baz: function baz() { /*..*/ }
};

