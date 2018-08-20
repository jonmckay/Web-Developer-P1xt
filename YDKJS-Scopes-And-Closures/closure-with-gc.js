/* 
	Foo() doesn't get garbage collected after execution. Since bar has closure
	on foo and is still in use by bar itself
*/

function foo() {
	var a = 2;

	function bar() {
		console.log(a);
	}

	return bar;
}

var baz = foo();

baz();   // 2 -- closure 


// Garbage collection is another useful reason for block-scoping. In the example below, the click event does not
// need 'someReallBigData' so a block scope can be placed around it so the GC will take care of it after execution.

function process(data) {
	// do something interesting
}

// anything declared inside this block can go away after!
//{ <-- add these
	let someReallyBigData = { .. };

	process( someReallyBigData );
//} <-- for GC

var btn = document.getElementById( "my_button" );

btn.addEventListener( "click", function click(evt){
	console.log("button clicked");
}, /*capturingPhase=*/false );
