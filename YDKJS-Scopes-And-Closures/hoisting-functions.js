/* 
	Functions are hoisted so that the call can be executed. This however does nothing for the order of operations inside the function itself.
	In the case below, foo will execute even though the declaration is after the call.
*/

foo();

function foo() {
	console.log(a);		// undefined

	var a = 2;
}