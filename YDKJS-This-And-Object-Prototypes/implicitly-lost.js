/* 
	The below example is when an implicitly bound function loses
	its binding and will fall back to the default binding.
	In this case, bar will be a reference to foo itself not obj.foo.
	This causes it to point to the global scope of 'a'.
*/

function foo() {
	console.log(this.a);
}

var obj = {
	a: 2,
	foo: foo
};

var bar = obj.foo;	// function reference/alias!

var a = "oops, global";	// 'a' also property on global object

bar();	// "oops, global"

