/*
*	When accessing properties, it doesn't just look in myObject for a property of the name 'a'.
*	A [[Get]] operation is performed. If the [[Get]] operation cannot through any means come up with a
*	value for the requrested property, it will instead return a undefined value.
*/

var myObject = {
	a:2
};

myObject.b;		// undefined

