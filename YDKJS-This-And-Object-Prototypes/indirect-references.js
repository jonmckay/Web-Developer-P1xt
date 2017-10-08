/*
 *	Indirect references to functions cause the default binding to apply when that function reference is invoked
 */

function foo() {
	console.log( this.a );
}

a = 2;
var o = { a: 3, foo: foo };
var p = { a: 4};

o.foo();	// 3
(p.foo = o.foo)();	// 2

