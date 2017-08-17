/* 
	IIFEs (Immediately Invoked Function Expression) create scope by declaring a function and immediately executing it.
*/

// Just declaring an IIFE will not give each function call its own closure over (i). The timer function still has closure
// over its own per iteration scope.
for (var i=1; i<=5; i++) {
	(function() {
		setTimeout( function timer() { 
			console.log( i );
		}, i*1000 );
	})();
}

// In this case it will work since the IIFE isn't empty and saves a copy of that variable
for (var k=1; k<=5; k++) {
	(function() {
		var l = k;
		setTimeout( function timer() {
			console.log( l );
		}, l*1000 );
	})();
}


// Simplified version of the code above
for (var j=1; j<=5; j++) {
	(function(k) {
		setTimeout( function timer() {
			console.log( k );
		}, j*1000 );
	})( j );
}