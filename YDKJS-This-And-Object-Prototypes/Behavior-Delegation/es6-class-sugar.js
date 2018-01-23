/*
*	This code below is the widget class design using ES6 class sugar
*/

class Widget {
	constructor(width, height) {
		this.width = width || 50;
		this.height = height || 50;
		this.$elem = null;
	}
	render($where) {
		if (this.$elem) {
			this.$elem.css( {
				width: this.width + "px",
				height: this.height + "px"
			}).appendTo( $where );
		}
	}

}

class Button extends Widget {
	constructor(width,height,label) {
		super( width, height );
		this.label = label || "Default"
		this.$elem = $( "<button>" ).text( this.lable );
	}
	render($where) {
		super.render( $where );
		this.$elem.click( this.onClick.bind( this ) );
	}
	onClick(evt) {
		console.log( "Button '" + this.label + "' clicked!" );
	}
}

$(document).ready( function() {
	var $body = $(document.body);
	var btn1 = new Button( 125, 30, "Hello" );
	var btn2 = new Button( 150, 40, "World" );
});