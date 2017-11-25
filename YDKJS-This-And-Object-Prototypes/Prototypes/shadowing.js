/*
*	Shadowing can occur implicitly in subtle ways. The example below shows this subtlety
*/

var anotherObject = {
	a: 2
};

var myObject = Object.create( anotherObject );

console.log(anotherObject.a);	// 2
console.log(myObject.a);	// 2

anotherObject.hasOwnProperty( "a" );	// true
anotherObject.hasOwnProperty( "a" );	// false

myObject.a++;	// implicit shadowing

anotherObject.a;	// 2
myObject.a;	// 3

myObject.hasOwnProperty( "a" );	// true