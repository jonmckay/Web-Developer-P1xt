/*
	Since 'this' applies to the function call, this.a resolves to the global variable a
*/

var a = 2;

function foo() {
	console.log( this.a );
}



foo();	// 2