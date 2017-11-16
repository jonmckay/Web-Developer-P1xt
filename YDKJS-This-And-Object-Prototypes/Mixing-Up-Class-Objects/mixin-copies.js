/*
*	The example below is used to examine how mixin(..) works. In this example it is iterating over the properties
*	of sourceObj and if there's no matching proper of that name in targetObj, it makes a copy. The copy is made
*	after the initial object exists. This prevents it from copying over a target property.
*/

// vastly simplified 'mixin()' example:
function mixin( sourceObj, targetObj ) {
	for(var key in sourceObj) {
		// only copy if not already present
		if(!(key in targetObj)) {
			targetObj[key] = sourceObj[key];
		}
	}

	return targetObj;
}
