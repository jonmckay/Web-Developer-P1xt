/*
	Most functions in newer versions of Javascrip provide a built in alternative to using bind(). That alternative
	is an optional parameter, usually called context.
*/

function foo(el) {
	console.log(el, this.id);
}

var obj = {
	id: "awesome"
};

// use 'obj' as 'this' for 'foo(...)' calls
[1, 2, 3].forEach(foo, obj);