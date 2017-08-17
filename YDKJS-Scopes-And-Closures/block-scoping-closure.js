/* 
	Using let we are able to create a per instance block-scope we can close over.
	Let highjacks the block and declares the variable in the block.
*/


for (var i=1; i<=5; i++) {
	let j = i; // yay, block-scope for closure!
	setTimeout( function timer() {
		console.log( j );
	}, j*1000 );
}