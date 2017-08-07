// Example of default parameter values. Only available in ES6

function foo(a = 2) {
	console.log(a);
}

foo();		// 2
foo(42);	// 42

// Here is the code transpiled to work in older JS versions

function fooTranspiled() {
	var a = arguments[0] !== void 0 ? arguments[0] : 2;
	console.log(a);
}

fooTranspiled();

