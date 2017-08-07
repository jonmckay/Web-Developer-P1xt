/* Polyfilling example
Since the polyfill definition already exists in ES6 browsers,
there is an 'if' statement to prevents applying that definition
in those browsers.
*/

if (!Number.isNaN) {
	Number.isNaN = function isNaN(x) {
		return x !== x;
	};
}