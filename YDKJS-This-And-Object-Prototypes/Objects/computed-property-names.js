/*
*	ES6 adds computed property names, where you can specify an expression, surrounded by a [] pair, in the key-
*	name position of an object-literal declaration.
*/

var prefix = "foo";

var myObject = {
	[prefix + "bar"]: "hello",
	[prefix + "baz"]: "world"
};

console.log(myObject["foobar"]);	// hello
console.log(myObject["foobaz"]);	// world

