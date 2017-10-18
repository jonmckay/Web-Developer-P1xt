/*
*	Arrays are considered objects, so properties can be added onto the array.
*/

var myArray = [ "foo", 42, "bar" ];

myArray.baz = "baz";

console.log(myArray);

console.log(myArray.length);	// 3

console.log(myArray.baz);	// "baz"

// If adding a property to an array and the property name looks like a number it will end up as a numeric index
myArray["3"] = "baz";

console.log(myArray.length);	// 4

console.log(myArray[3]);	// "baz"