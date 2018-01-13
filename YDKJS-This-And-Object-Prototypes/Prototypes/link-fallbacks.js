/*
*	With the code below, you could write it so anotherObject could be a fallback incase myObject doesn't have a method or a property.
*	This is however not appropriate in most cases when designing a program.
*/

var anotherObject = {
	cool: function() {
		console.log( "cool!" );
	}
};

var myObject = Object.create( anotherObject );

myObject.cool();	// "cool!"


