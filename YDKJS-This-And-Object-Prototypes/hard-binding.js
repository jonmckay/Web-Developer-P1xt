/*
	In this example bar manually calls foo.call(obj). This invokes foo with the obj binding for 'this'
	Note: Run in chrome console debugger not node.js (window doesn't exist)
*/

function foo() {
	console.log(this.a);
}

var obj = {
	a:2
};

var bar = function() {
	foo.call(obj);
};

bar();	// 2
setTimeout(bar, 100);	// 2

// `bar` hard binds `foo`'s `this` to `obj`
// so that it cannot be overriden
bar.call( window );	// 2