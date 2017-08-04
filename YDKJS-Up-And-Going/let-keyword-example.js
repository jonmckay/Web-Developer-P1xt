// Let keyword declares that variable in the scope of a block
// In this example b is declared only in the if block


function foo() {
	var a = 1;

	if (a >= 1) {
		let b = 2;

		while (b < 5) {
			let c = b * 2;
			b++;

			console.log(a + c);
		}
	}
}

foo();
// 5 7 9
