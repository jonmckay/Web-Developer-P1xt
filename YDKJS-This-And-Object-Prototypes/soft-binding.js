/*
*	Soft binding provides a different default for default binding ( not global or undefined), while still leaving
*	the function able to be manually 'this' bound via implicit binding or explicit binding techniques.
*/

function foo() {
	console.log("name: " + this.name);
}

var obj = { name: "obj" },
	obj2 = {name: "obj2" },
	obj3 = {name: "obj3" };

var fooObj = foo.softBind( obj );

fooObj();	// name: Obj

obj2.foo = foo.softBind(obj);
obj2.foo();	// name: obj2 <----- look!!

fooObj.call( obj3 );	// name: obj3

setTimeout( obj2.foo, 10 );	// name: obj <--- falls back to soft-binding

