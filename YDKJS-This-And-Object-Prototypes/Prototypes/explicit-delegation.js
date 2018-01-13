/*
*	The example below calls myObject.doCool() which is a method that actually exists on myObjects, which makes the API
*	design more explicit. This implementation also follows the delegation design pattern which takes advantage of
*	[[prototype]] delegation to anotherObject.cool()
*/

var anotherObject = {
	cool: function() {
		console.log( "cool!" );
	}
};

var myObject = Object.create( anotherObject );

myObject.doCool = function() {
	this.cool();	// internal delegation
};

myObject.doCool();	// "cool!"