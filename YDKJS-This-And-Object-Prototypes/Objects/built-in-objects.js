/*
*	There are several object sub-types. These are actually built-in functions that can be used as a constructor
*	which produces a newly constructed object of the sub-type in question.
*	String, Number, Boolean, Object, Function, Array, Date, RegExp, Error are the built-in objects.
*/

var strPrimitive = "I am a string";
console.log(typeof strPrimitive);	// "string"
console.log(strPrimitive instanceof String);	// false

var strObject = new String( "I am a string ");
console.log(typeof strObject);	// "object"
console.log(strObject instanceof String);	// true

// inspect the object sub-type
Object.prototype.toString.call( strObject );	// [object String]