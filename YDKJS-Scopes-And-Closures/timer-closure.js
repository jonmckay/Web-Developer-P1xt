/* 
	Normally wait's inner scope would be gone 1000 milliseconds after executing, but timer has closure on the method.
	When the engine goes to execute setTimeout, timer gets exectued as well.
*/

function wait(message) {

	setTimeout( function timer() {
		console.log( message );
	}, 1000 );

}

wait( "Hello, closure!" );