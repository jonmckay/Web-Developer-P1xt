/* Functions in javascript can be nested and the inner functions
scope encompasses both inner and outer function variables. The outer
function can only access the outer scope variables */

function outer() {
	var a = 1;

	function inner() {
		var b = 2;

		// we can access both 'a' and 'b' here
		console.log(a + b); // 3
	}

	inner();

	// we can only access 'a' here
	console.log(a); // 1
}

outer();