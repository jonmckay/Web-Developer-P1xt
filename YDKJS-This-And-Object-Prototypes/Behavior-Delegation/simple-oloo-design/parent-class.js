/*
*	An example that illustrates how OLOO simplifies overall design
*/

// Parent class
function Controller() {
	this.errors = [];
}
Controller.prototype.showDialog = function(title,msg) {
	// display title & message to user in dialog
};

Controller.prototype.success = function(msg) {
	this.showDialog( "Sucess", msg );
};

Controller.prototype.failure = function(err) {
	this.error.push( err );
	this.showDialog( "Error", err );
};

