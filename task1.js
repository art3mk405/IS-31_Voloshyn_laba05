let country = prompt('Введіть країну доставки');
let price = Number(prompt('Введіть загальну вартість товару'));
let deliveryFee = Number(prompt('Введіть вартість доставки товару'));

if (isNaN(price) || isNaN(deliveryFee)) {
    console.log('price або deliveryFee не є числами');
} else {
    console.log(getShippingMessage(country, price, deliveryFee));
}

function getShippingMessage(country, price, deliveryFee) {

    const totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits.`;
}
