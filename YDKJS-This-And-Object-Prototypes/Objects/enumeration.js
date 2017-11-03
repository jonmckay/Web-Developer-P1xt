/*
*	Enumerable basically means "will be included if the objects properties are iterated through."
*	In the example below myObject.b in face exists and has an accessible valuem but it doesn't show up in a for..in
*	loop
*/

var myObject = {

};

Object.defineProperty(
	myObject,
	"a",
	// make 'a' enumerable, as normal
	{ enumerable: true, value: 2 }
);

Object.defineProperty(
	myObject,
	"b",
	// make 'b' NON-enumerable
	{ enumerable: false, value: 3}

);

myObject.b;	// 3
("b" in myObject);	// true
myObject.hasOwnProperty( "b" );	// true

// ....

for (var k in myObject) {
	console.log( k, myObject[k] );
}

// "a" 2

