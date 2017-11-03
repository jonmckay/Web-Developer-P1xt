/*
*	There are a couple ways of verifying that an object has a specific property
*/

var myObject = {
	a:2
};

("a" in myObject);	// true
("b" in myObject);	// false

myObject.hasOwnProperty( "a" );	// true
myObject.hasOwnProperty( "b" );	// false

