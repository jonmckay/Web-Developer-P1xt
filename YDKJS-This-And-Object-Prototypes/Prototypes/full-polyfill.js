/*
*	There is another mindset, which is that no fuction should be polyfilled unless it can be fully polyfilled.
*	Insted of using Object.create() you define your own utility like the example below.
*/

function createAndLinkObject(o) {
	function F() {}
	F.prototype = o;
	return new F();
}

var anotherObject = {
	a: 2
};

var myObject = createAndLinkObject( anotherObject );

myObject.a;	// 2