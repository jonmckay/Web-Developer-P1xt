/*
*	The example below shows ES6s for..of loop which iterates over the values themselves instead
*	of their indices.	
*/

var myArray = [1, 2, 3 ];

for (var v of myArray) {
	console.log( v );
}

// 1
// 2
// 3