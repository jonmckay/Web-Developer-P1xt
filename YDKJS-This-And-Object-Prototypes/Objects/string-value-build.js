/*
*	[ ] syntax uses a strings value to specify the location. The program can programmatically build
*	up the value of the string.
*/

var wantA = true;
var myObject = {
	a: 2
};

var idx;

if (wantA) {
	idx = "a";
}

// later

console.log( myObject[idx] );