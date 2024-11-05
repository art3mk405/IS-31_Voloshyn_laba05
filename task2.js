let pricePerDroid = Number(prompt("Введіть ціну за кожен дрон"));
let quantity = Number(prompt("Введіть кількість замовлених дронів"));
let customerCredits = Number(prompt("Введіть вашу суму коштів на рахунку"));

if (isNaN(pricePerDroid) || isNaN(quantity) || isNaN(customerCredits)) {
    console.log('pricePerDroid або quantity або customerCredits не є числами');
} else {
    console.log(makeTransaction(quantity, pricePerDroid, customerCredits));
}

function makeTransaction(quantity, pricePerDroid, customerCredits) {
    let totalPrice = pricePerDroid * quantity;
    if (totalPrice > customerCredits) {
        return "Insufficient funds!";
    } else {
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    }
}
