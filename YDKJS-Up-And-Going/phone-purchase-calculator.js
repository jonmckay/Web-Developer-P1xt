const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200.00;

var accountBalance = 303.91;
var totalPrice = 0;

// Compare phone price with accessories against account balance and mental spending threshold
function CheckSpendingThreshold() {
	if(totalPrice + ACCESSORY_PRICE < SPENDING_THRESHOLD) {
		return true;
	}
	return false;
}

function CheckAccountBalance() {
	if(totalPrice < accountBalance) {
		return true;
	}
	return false;
}

// Calculate the total price of all phones/accessories
function CalculatePHONE_PRICE() {
	while(CheckAccountBalance()) {
		totalPrice += PHONE_PRICE;
		if (CheckSpendingThreshold()) {
			totalPrice += ACCESSORY_PRICE;
		}
	}
	CalculateTax();
}

// Calculate and add tax to the total price of all phones/accessories
function CalculateTax() {
	totalPrice += totalPrice * TAX_RATE;
}


function DisplayPrice() {
	CalculatePHONE_PRICE();
	console.log("Your total comes to $" + totalPrice.toFixed(2));
	if (CheckAccountBalance()) {
		console.log("You have enough money!");
	}
	else {
		console.log("Sorry you don't have enough money");
	}
}

DisplayPrice();

