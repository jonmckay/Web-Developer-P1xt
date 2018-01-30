/*
*	The code below uses instanceOf for introspecting on an object(a1) to infer its capability
*/

function Foo() {
	// ...
}
Foo.prototype.something = function(){
	// ...
};

var a1 = new Foo();

// later

if (a1 instanceof Foo) {
	a1.something();
}