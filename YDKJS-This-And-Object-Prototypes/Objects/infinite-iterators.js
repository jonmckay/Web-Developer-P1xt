/*
*	Infinite iterators which never finish and always return a new value can be generated. In the example below, iterators will be generated
*	forever. So in this case we stop at 100
*/

var randoms = {
	[Symbol.iterator]: function() {
		return {
			next: function() {
				return { value: Math.random() };
			}
		};
	}
};

var randoms_pool = [];
for (var n of randoms) {
	randoms_pool.push( n );

	// don't proceed unbounded!
	if (randoms_pool.length == 100) break;

}