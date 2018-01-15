/*
*	Below is some loose pseudo-code for getting the most out of inheritance using the class design pattern
*/

class Task {
	id;

	// constructor 'Task()'
	Task(ID) { id = ID; }
	outputTask() { output( id ); }
}

class XYZ inherits Task {
	label;

	// constructor 'XYZ()'
	XYZ(ID, Label) { super( ID); label = Label; }
	outputTask() { super(); output( label ); }
}

class ABC inherits Task {

}

