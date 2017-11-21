/*
*	Implicit mixins are closely related to explicit pseudo-polymorphism as explained previously. As such, they come with the same caveats and warnings.
*/

var Something = {
	cool: function() {
		this.greeting = "Hello World";
		this.count = this.count ? this.count + 1 : 1;
	}
};

Something.cool();
console.log(Something.greeting);	// "Hello World"
console.log(Something.count);	// 1

var Another = {
	cool: function() {
		// implicit mixin of 'Something' to 'Another'
		Something.cool.call( this );
	}
};

console.log(Another.cool());
console.log(Another.greeting);	// "Hello World"
console.log(Another.count);	// 1 (not shared state with 'Something')