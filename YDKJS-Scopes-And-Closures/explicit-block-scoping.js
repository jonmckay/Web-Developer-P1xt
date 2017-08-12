/* 
	Explicitly put another pair of brackets inside the if, creating
	an arbitrary block for let. 
*/

var foo = true;

if(foo) {
	{ // <-- explicit block
		let bar = foo * 2;
		bar = something(bar);
		console.log(bar);
	}
}

