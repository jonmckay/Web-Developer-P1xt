/* 
	This object "owns" or "contains" the function reference at the time the function is called
*/

function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo
};

obj.foo();	// 2