/*
*	The additional set of functionality that Object.create() provides is not polyfillable by pre
*	ES5. This additional set of functionality is provided by via declaring the new objects property descriptor.
*/

var anotherObject = {
	a: 2
};

var myObject = Object.create( anotherObject, {
	b: {
		enumerable: false,
		writable: true,
		configurable: false,
		value: 3
	},
	c: {
		enumerable: true,
		writable: false,
		configurable: false,
		value: 4
	}
});

console.log(myObject.hasOwnProperty( "a" ));	// false
console.log(myObject.hasOwnProperty( "b" ));	// true
console.log(myObject.hasOwnProperty( "c" ));	// true

console.log(myObject.a);	// 2
console.log(myObject.b);	// 3
console.log(myObject.c);	// 4
