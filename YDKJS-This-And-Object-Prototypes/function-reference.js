/* 
	A function has to be a "named function" in order for it to reference itself
*/

function foo() {
	foo.count = 4;	// 'foo' refers to itself'
}

setTimeout(function() {
	// anonymous function (no name), cannot
	// refer to itself
});

