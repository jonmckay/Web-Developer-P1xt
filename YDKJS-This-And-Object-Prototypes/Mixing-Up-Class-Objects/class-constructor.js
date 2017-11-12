/*
*	This methods explicit job is to initialize any information (state) the instance will need.
*/

class CoolGuy {
	specialTrick = "nothing";

	CoolGuy ( trick ) {
		specialTrick = trick;
	}

	showOff() {
		console.log( "Here's my trick: " + specialTrick );
	}
}

// To make a CoolGuy instance, we would call the class constructor:

Joe = new CoolGuy( "jumping rope" )

Joe.showOff()	// Here's my trick: jumping rope