var foo = {
	a : 42,
	c : 13
};

// create 'bar' and link it to 'foo'
// bar is a prototype linked to foo
var bar = Object.create(foo);

bar.b = "hello world";

bar.b;		// "hello world"
bar.a;		// 42 <-- delegated to 'foo'
console.log(bar.c);