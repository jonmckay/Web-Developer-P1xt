/*
*	Arrays are considered objects, so properties can be added onto the array.
*/

var myArray = [ "foo", 42, "bar" ];

myArray.baz = "baz";

console.log(myArray);

console.log(myArray.length);	// 3

console.log(myArray.baz);	// "baz"

