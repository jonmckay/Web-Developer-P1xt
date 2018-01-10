/*
*	The code below shows the simplicity of Object.create() in linking two objects. This gives us the power (delegation) of the prototype mechanism without all the complications.
*/

var foo = {
	something: function() {
		console.log( "Tell me something good..." );
	}
};

var bar = Object.create( foo );

bar.something();	// Tell me something good...