function solveEquation() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const num = -b / a

    if (num > 0) {
        const x1 = Math.sqrt(num);
        const x2 = -(Math.sqrt(num));
        document.getElementById("result1").innerHTML = "Solutions to the equation: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
    } else if (num === 0) {
        const x = 0;
        document.getElementById("result1").innerHTML = "The equation has one solution: x = " + x.toFixed(2);
    } else if (num < 0) {
        document.getElementById("result1").innerHTML = "The equation has no solutions";
    }
}




