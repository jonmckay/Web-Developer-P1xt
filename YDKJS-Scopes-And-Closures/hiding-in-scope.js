/*

function doSomething(a) {
	b = a + doSomethingElse(a * 2);

	console.log(b * 3);
}

function doSomethingElse(a) {
	return a - 1;
}

var b;

doSomething(2);		// 15


The above example is not hiding doSomethingElse or the variable b. This
could potentially cause problems.

The example BELOW is how a more "proper" design is done.

*/

function doSomething(a) {
	function doSomethingElse(a) {
		return a - 1;
	}

	var b;

	b = a + doSomethingElse(a * 2);

	console.log(b * 3);
}

doSomething(2);		// 15

