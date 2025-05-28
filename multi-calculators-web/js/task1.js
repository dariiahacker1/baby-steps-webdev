function MoneyCount() {
    const amount = parseFloat(document.getElementById("amount").value);
    const currency = document.querySelector('input[name="currency"]').value;
    let exchangeRate;
    let convertedAmount;
    let message;

    switch (currency) {
        case 'GBP':
            exchangeRate = 0.78;
            convertedAmount = amount * exchangeRate;
            message = (amount + " USD = " + convertedAmount.toFixed(2) + " GBP");
            break;
        case 'PLN':
            exchangeRate = 3.97;
            convertedAmount = amount * exchangeRate;
            message = (amount + " USD = " + convertedAmount.toFixed(2) + " PLN");
            break;
        case 'CZK':
            exchangeRate = 23.52;
            convertedAmount = amount * exchangeRate;
            message = (amount + " USD = " + convertedAmount.toFixed(2) + " CZK");
            break;
        default:
            message = ("Incorrect currency");
    }

    document.getElementById("result1").innerHTML = message;
}

