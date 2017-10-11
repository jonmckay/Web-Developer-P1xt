/*
*	Since arrow functions disable the traditional 'this' mechanism, there is a Pre-ES^ alternative.
*/

function foo() {
	var self = this; // lexical capture of 'this'
	setTimeout( function() {
		console.log( self.a );
	}, 100);
}

var obj = {
	a: 2
};

foo.call( obj );  // 2

