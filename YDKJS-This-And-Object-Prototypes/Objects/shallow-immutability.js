/*
*	When creating immutable properties for an object, all approaches create shallow immutability.
*	That is, they affect only the object and its direct property characteristics.
*/

var myImmutableObject = {
};

Object.defineProperty( myImmutableObject, "foo", {
	value: [1, 2, 3],
	writable: false,
	configurable: false
} );



myImmutableObject.foo;	// [1, 2, 3]
myImmutableObject.foo.push( 4 );
console.log(myImmutableObject.foo);	// [1, 2, 3, 4]

// In this case foo is not immutable even though myImmutableObject is