/* 
	Foo() doesn't get garbage collected after execution. Since bar has closure
	on foo and is still in use by bar itself
*/

function foo() {
	var a = 2;

	function bar() {
		console.log(a);
	}

	return bar;
}

var baz = foo();

baz();   // 2 -- closure 

