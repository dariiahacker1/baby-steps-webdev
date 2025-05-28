function calculate() {
    const number = parseInt(document.getElementById("num").value);
    if (number < 100 || number > 999) {
        alert("Enter a three-digit number!");
        return;
    }
    const d1 = Math.floor(number / 100);
    const d2 = Math.floor((number % 100) / 10);
    const d3 = number % 10;
    const Sum = d1 + d2 + d3;
    let message;
    if (Sum % 5 === 0) {
        message = "The sum of digits of a number " + number + " multiple of 5";
    } else {
        message = "The sum of digits of a number " + number + " not a multiple of 5";
    }

    document.getElementById("result1").innerHTML = message;
}

