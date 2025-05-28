function result() {
    var score = 0;

    if (document.getElementById('real1').checked) score++;
    if (document.getElementById('real2').checked || document.getElementById('real3').checked) score++;
    if (document.getElementById('question3').value === "4") score++;
    if (document.getElementById('real4').checked || document.getElementById('real5').checked) score++;
    if (document.getElementById('real6').checked) score++;
    if (document.getElementById('question6').value === "4") score++;
    if (document.getElementById('real7').checked) score++;
    if (document.getElementById('real8').checked || document.getElementById('real9').checked) score++;

    alert("Your score: " + score);
}