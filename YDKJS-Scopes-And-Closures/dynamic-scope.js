/* Dynamic scope doesn't concern itself with how and where functions and scopes are declared,
* but rather where they are called from. With dynamic scope, the code below will print 3 */

function foo() {
	console.log( a ); // 3  (not 2!)
}

function bar() {
	var a = 3;
	foo();
}

var a = 2;

bar();
