// Here is an example of explicit coercion:
var a = "42";

var b = Number(a);

a;		// "42"
b;		// 42 -- the number!

// Here is an example of implicit coercion:
var x = "42";

var y = x * 1;  // "42" implicitly coerced to 42 here

x;		// "42"
y;		// 42 -- the number!
