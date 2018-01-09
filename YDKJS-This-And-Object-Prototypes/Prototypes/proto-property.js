/*
*	Below is an example of __proto__ implemented. Proto looks like a property but it is better to think of it as more of a getter/setter.
*	This __proto__ magically retrieves the internal [[prototype]] of an object as a reference.
*/

Object.defineProperty( Object.prototype, "__proto__", {
	get: function() {
		return Object.getPrototypeOf( this );
	},
	set: function(o) {
		// setPrototypeOf(..) as of ES6
		Object.setPrototypeOf( this, o );
		return o;
	}
} );