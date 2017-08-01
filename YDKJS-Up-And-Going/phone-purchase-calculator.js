const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 19.99;
const spendingThreshold = 200.00;

var accountBalance = 10.00;
var totalPrice = 0.0;

// Compare account balance against amount inputted
function CheckAccountBalance(amount) {
	if(amount < accountBalance) {
		return true;
	}
	return false;
}

// Calculate the total price of all phones/accessories
function CalculatePhonePrice() {
	while(CheckAccountBalance(phonePrice)) {
		totalPrice += phonePrice;
	}
}

function CalculateTax() {
	totalPrice += (totalPrice * taxRate);
}

function DisplayPrice() {
	CalculatePhonePrice();
	console.log("Your total comes to $" + totalPrice.toFixed(2));
}

DisplayPrice();

