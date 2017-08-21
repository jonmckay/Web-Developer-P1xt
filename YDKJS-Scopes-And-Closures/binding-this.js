/*
	An alternative to binding this without using arrow-functions is to use the binding fuction
*/

var obj = {
	count: 0,
	cool: function coolFn() {
		if(this.count < 1) {
			setTimeout(function timer() {
				this.count++;	// 'this' is safe because of 'bind(...)'
				console.log("more awesome");
			}.bind(this), 100);	// look, 'bind()'!
		}
	}
};

obj.cool();		// more awesome

