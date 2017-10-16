/*
*	Property names in objects are always strings. Any non string propety will
* be converted to a string.
*/

var myObject = { };

myObject[true] = "foo";
myObject[3] = "bar";
myObject[myObject] = "baz";

console.log(myObject["true"]);	// "foo"
console.log(myObject["3"]);	// "bar"
console.log(myObject["[object Object]"]);	// "baz"

