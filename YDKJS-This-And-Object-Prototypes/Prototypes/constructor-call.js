/*
*	In Javascript, functions are not constructors. If a function is called with new then it makes a constructor call.
*	New hijacks a function and calls it in a fashion that constructs and object in addition to whatever else the function does.
*/

function NothingSpecial() {
	console.log( "Dont mind me!" );
}

var a = new NothingSpecial();
// Dont mind me!

a;	// {}

// In javascript its appropriate to say that a constructor is any function with new infront of it