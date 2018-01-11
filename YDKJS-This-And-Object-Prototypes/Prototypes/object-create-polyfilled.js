/*
*	For pre ES5 environments Object.create() will have to be polyfilled (since it was added in ES5). The
*	example below is doing just that.
*/

if(!Object.create) {
	Object.create = function(o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

// This polyfill works by using a throw-away F function and overriding its .prototype property to point
// to the object we want to link to. Then we use new F() construction to make a new object that will be
// linked as we specified.