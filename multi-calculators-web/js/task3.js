function calculate() {


    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);


    if (a < 0 || b < 0 || c < 0) {
        alert("Enter a positive number!");
        return;
    }

    if (a + b > c && a + c > b && b + c > a) {
        document.getElementById("result1").innerHTML = "Yes, there is a triangle with sides " + a + ", " + b + ", " + c + ".";

    } else {
        document.getElementById("result1").innerHTML = "No, there is no triangle with sides " + a + ", " + b + ", " + c + ".";

    }
}



