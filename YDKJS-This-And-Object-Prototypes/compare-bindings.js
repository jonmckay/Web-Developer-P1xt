/*
	Compare precedence of hard binding and new binding.
	using new on bar(3) didn't override the hard binding that was bound previously.
*/

function foo(something) {
	this.a = something;
}

var obj1 = {};

var bar = foo.bind(obj1);
bar(2);
console.log(obj1.a);	// 2

var baz = new bar(3);
console.log(obj1.a);	// 2
console.log(baz.a);		// 3