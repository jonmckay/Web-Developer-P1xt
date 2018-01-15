/*
*	This code shows how to use behavior delegation instead of classes. First an object is defined called Task
*	and it will have concrete behavior on it that includes utility methods that various tasks can use. Then
*	for each task, we define an object to hold that task-specific data/behavior. The task-specific object(s) are linked
*	to the Task utility object, allowing them to delegate to it when they need to.
*/

var Task = {
	setID: function(ID) { this.id = ID; },
	outputID: function() { console.log( this.id ); }
};

// make 'XYZ' delegate to 'Task'
var XYZ = Object.create( Task );

XYZ.prepareTask = function(ID, Label) {
	this.setID(ID);
	this.label = Label;
};

XYZ.outputTaskDetails = function() {
	this.outputID();
	console.log( this.label );
};

// ABC = Object.create( Task );
// ABC ... = ...

XYZ.outputTaskDetails();