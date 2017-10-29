/*
*	Either through object-literal syntax with get a() {..} or through explicit definition with defineProperty{...},
*	in both cases we created a property on the object that actually doesn't hold a value, but whose access automatically
*	results in a hidden function call to the getter function, with whatever value it returns being the result of the
*	property access.
*/

var myObject = {
	// define a getter for 'a'
	get a() {
		return 2;
	}
};

Object.defineProperty(
	myObject,	// target
	"b",	// property name
	{
		// define a getter for 'b'
		get: function() { return this.a * 2; },

		// make sure 'b' shows up as an object property
		enumerable: true
	}
);

console.log(myObject.a);	// 2

console.log(myObject.b);	// 4
