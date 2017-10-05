/*
 * Passing 'null' or 'undefined' as a 'this' binding parameter to call, apply, or bind, will effectively
 * ignore those values and instead the default binding rule applies to the invocation.
 */


function foo() {
	console.log( this.a );
}

a = 2;

foo.call( null );  // 2
