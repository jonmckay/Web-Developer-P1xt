/* Below is an example of an immediately invoked function expression (IIFE). The first
pair of () makes the function an expression and the second () executes the function */


var a = 2;

(function IIFE() {

	var a = 3;
	console.log( a );	// 3
})();

console.log( a );	// 2