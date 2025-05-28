

    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    var colorRange = document.getElementById('colorRange');
    colorRange.addEventListener('input', function () {
        drawShape();
        bukva();
        drawOutline();
        drawLines();
        dopLines();
        drawCircles();

    });


    ctx.scale(1.7, 1.7)

    function drawLines() {
        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.moveTo(72, 26);
        ctx.lineTo(205, 26);
        ctx.lineTo(205, 160);
        ctx.stroke();
        ctx.beginPath()
        ctx.moveTo(205, 160);
        ctx.setLineDash([5]);
        ctx.lineTo(72, 160);
        ctx.lineTo(72, 26);

        ctx.moveTo(72, 160);
        ctx.lineTo(38, 226);

        ctx.stroke();
    }

    function drawShape() {
        // clear canvas before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.setLineDash([8]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#280CA7';
        ctx.moveTo(205, 132);
        ctx.lineTo(72, 70);
        ctx.moveTo(72, 70);
        ctx.lineTo(38, 201);
        ctx.lineTo(86, 225);
        ctx.lineTo(190, 188);
        ctx.lineTo(205, 132);

        var fillColor = 'rgba(' + colorRange.value + ', 64, 216, 0.53)';
        ctx.fillStyle = fillColor;
        ctx.fill();
        ctx.stroke();

        ctx.lineTo(205, 132);
        ctx.fillStyle = 'rgba(136, 64, 216, 0.53)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([0]);
        ctx.LineWidth = 3;
        ctx.strokeStyle = '#280CA7';
        ctx.lineTo(38, 201);
        ctx.lineTo(86, 225);
        ctx.moveTo(190, 188);
        ctx.lineTo(205, 132);
        ctx.stroke();
    }


    function dopLines() {                          
        ctx.beginPath()
        ctx.setLineDash([0]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#6A4B89';
        ctx.moveTo(38, 201);
        ctx.lineTo(20, 268);
        ctx.moveTo(38, 225);
        ctx.lineTo(16, 266);
        ctx.moveTo(86, 225);
        ctx.lineTo(10, 255);

        ctx.moveTo(205, 160);
        ctx.lineTo(297, 160);
        ctx.moveTo(205, 132);
        ctx.lineTo(294, 171);
        ctx.moveTo(190, 188);
        ctx.lineTo(294, 152);

        ctx.stroke();
    }


    function drawOutline() {
        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.setLineDash([0]);
        ctx.strokeStyle = 'black';
        ctx.stroke();
        ctx.beginPath()
        ctx.moveTo(38, 225);
        ctx.lineTo(170, 225);
        ctx.lineTo(205, 160);
        ctx.moveTo(170, 225);
        ctx.lineTo(170, 92);
        ctx.lineTo(38, 92);
        ctx.lineTo(38, 225);

        ctx.moveTo(170, 92);
        ctx.lineTo(205, 26);
        ctx.moveTo(38, 92);
        ctx.lineTo(72, 26);


        ctx.stroke();
    }


    function drawCircles() {
        ctx.beginPath()
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.arc(72, 70, 3, 0, Math.PI * 2, false);

        ctx.moveTo(41, 201);
        ctx.arc(38, 201, 3, 0, Math.PI * 2, false);

        ctx.moveTo(89, 225);
        ctx.arc(86, 225, 3, 0, Math.PI * 2, false);
        ctx.moveTo(193, 188);
        ctx.arc(190, 188, 3, 0, Math.PI * 2, false);
        ctx.moveTo(208, 132);
        ctx.arc(205, 132, 3, 0, Math.PI * 2, false);
        ctx.moveTo(75, 70);
        ctx.arc(72, 70, 3, 0, Math.PI * 2, false);
        ctx.moveTo(272, 159);
        ctx.arc(269, 160, 3, 0, Math.PI * 2, false);
        ctx.moveTo(29, 249);
        ctx.arc(26, 249, 3, 0, Math.PI * 2, false);


        ctx.fillStyle = 'rgba(216, 71, 178, 1)';
        ctx.fill();
        ctx.stroke();
    }

    function bukva() {
        ctx.fillStyle = 'rgba(8, 45, 141, 0.8)';


        ctx.font = "bold 16px Segoe UI";
        ctx.fillStyle = "#3C417E"

        ctx.fillText("A", 13, 230);
        ctx.fillText("A1", 14, 95);
        ctx.fillText("D", 170, 241);
        ctx.fillText("B", 75, 155);
        ctx.fillText("C", 210, 166);
        ctx.fillText("B1", 65, 20);
        ctx.fillText("C1", 200, 20);
        ctx.fillText("D1", 176, 95);
        ctx.fillText("X", 28, 265);
        ctx.fillText("Y", 264, 150);

        ctx.font = "bold 16px Segoe UI";
        ctx.fillStyle = "#49038D"
        ctx.fillText("N", 20, 200);
        ctx.fillText("L", 83, 245);
        ctx.fillText("K", 209, 129);
        ctx.fillText("F", 190, 205);
        ctx.fillText("M", 80, 66);

    }


    drawShape();
    bukva();
    drawOutline();
    drawLines();
    dopLines();
    drawCircles();


