/*
	ES6 Arrow-functions take on 'this' value of their immediate lexical enclosing scope.
*/

var obj = {
	count : 0,
	cool: function coolFn() {
		if (this.count < 1) {
			setTimeout( () => { // arrow-function ftw? 
				this.count++;
				console.log("awesome?");
			}, 100);
		}
	}
};

obj.cool(); // awesome?