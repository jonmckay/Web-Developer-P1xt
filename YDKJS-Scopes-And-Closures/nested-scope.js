/*
 The Engine looks for b inside of the scope of foo. Since b is not defined
 in the scope of foo, the engine then looks inside the scope outside of foo (in this case global).
 
*/

function foo(a) {
	console.log(a + b);
}

var b = 2;

foo(2);		// 4