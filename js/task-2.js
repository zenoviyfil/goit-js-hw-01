function getShippingMessage(country, price, deliveryFee) {
    console.log(`Shipping to ${country} will cost ${price + deliveryFee} credits`);
}

console.log(getShippingMessage('Australia', 120, 50));
console.log(getShippingMessage('Germany', 80, 20));
console.log(getShippingMessage('Sweden', 100, 20));