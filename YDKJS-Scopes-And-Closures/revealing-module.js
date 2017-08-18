/* 
	The revealing module pattern shown below has two characteristics. The first being the inner functions need an outer function that is
	invoked at least once. The second characteristic is the outer function needs to return at least one of the inner functions to give that inner
	function closure over the private scope.
*/


function CoolModule() {
	var something = "cool";
	var another = [1, 2, 3];

	function doSomething() {
		console.log(something);
	}

	function doAnother() {
		console.log(another.join(" ! "));
	}

	return { 
		doSomething : doSomething,
		doAnother: doAnother
	};

}

var foo = CoolModule();

foo.doSomething();	// cool
foo.doAnother();	// 1 ! 2 ! 3