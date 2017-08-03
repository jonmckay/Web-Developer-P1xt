const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

amount = amount * 2;

// can we afford the extra purchase?
if ( amount === bank_balance) 
{
	console.log("Ill take the accessory!");
	amount = amount + ACCESSORY_PRICE;
}
// otherwise:
else {
	console.log("No, Thanks.");
}

