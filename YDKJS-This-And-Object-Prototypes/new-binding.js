/*
	New is a way that a function call's 'this' can be bound
*/

function foo(a) {
	this.a = a;
}

var bar = new foo(2);
console.log(bar.a);	// 2

