/* 
	Functions are always hoisted first, then variables.

	In the code below, the engine will interpret it as such:

	function foo() {
		console.log(1);
	}

	foo();

	foo = function() {
		console.log(2);
	}

	Declaring the variable foo first doesn't matter because the function is always hoisted first. The variable overwrites the function when it gets executed.
*/

foo();		// 1

var foo;

function foo() {
	console.log(1);
}

foo = function() {
	console.log(2);
};