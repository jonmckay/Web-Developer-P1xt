/* 
	let in these cases binds i to the for-loop body and re-binds it to
	each iteration of the loop.
*/

for(let i = 0; i < 10; i++) {
	console.log(i);
}

console.log(i);		// reference error

// Here is another way of illustrating the per-iteration binding

{
	let j;
	for(j = 0; j < 10; j++) {
		let i = j;		// re-bound for each iteration!
		console.log(i);
	}
}

