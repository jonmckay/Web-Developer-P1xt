/* 
	The code below will not print out 1, 2, ..., 5. It will instead print out the number 6 five times.
	This is because the timer callback wont execute until the loop has completed. Since i<=5 is the condition for the loop to complete,
	the callback is called when i = 6. All 5 functions have closure over the same variable (i). Since they all share the same variable,
	6 gets printed out every iteration of the loop.
*/

for (var i = 1; i<=5; i++) {
	setTimeout(function timer () {
		console.log(i);
	}, i * 1000);
}

