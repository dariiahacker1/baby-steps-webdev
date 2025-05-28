

    var canvas = document.getElementById('canvas1');
    ctx = canvas.getContext('2d');
    var redRange = document.getElementById('redRange');
    var greenRange = document.getElementById('greenRange');
    var blueRange = document.getElementById('blueRange');
    var alphaRange = document.getElementById('alphaRange');

    redRange.addEventListener('input', changeFillColor);
    greenRange.addEventListener('input', changeFillColor);
    blueRange.addEventListener('input', changeFillColor);
    alphaRange.addEventListener('input', changeFillColor);


    function drawBeforeFill() {
        ctx.beginPath()
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.moveTo(167, 48);
        ctx.lineTo(482, 273);
        ctx.lineTo(120, 400);
        ctx.lineTo(47, 273);
        ctx.lineTo(167, 48);

        ctx.stroke();
        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.setLineDash([10]);
        ctx.moveTo(482, 273);
        ctx.lineTo(47, 273);

        ctx.stroke();


    }

    changeFillColor();

    function changeFillColor() {
        var red = redRange.value;
        var green = greenRange.value;
        var blue = blueRange.value;
        var alpha = alphaRange.value;
        var fillColor = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
        ctx.fillStyle = fillColor;


        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawBeforeFill();

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.setLineDash([10]);
        ctx.strokeStyle = '#1A2E9A';
        ctx.moveTo(243, 357);
        ctx.lineTo(309, 273);
        ctx.lineTo(100, 172);
        ctx.lineTo(130, 329);
        ctx.lineTo(244, 355);


        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.setLineDash([0]);
        ctx.stroke();


        drawAfterFill();
    }


    function drawAfterFill() {


        ctx.beginPath()
        ctx.setLineDash([0]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#1A2E9A';
        ctx.moveTo(100, 172);
        ctx.lineTo(130, 329);
        ctx.lineTo(244, 355);

        ctx.stroke();


        ctx.beginPath()
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.setLineDash([0]);
        ctx.moveTo(120, 400);
        ctx.lineTo(167, 48);


        ctx.stroke();

        ctx.beginPath()
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.setLineDash([0]);
        ctx.moveTo(120, 400);
        ctx.lineTo(167, 48);


        ctx.stroke();

        ctx.beginPath()
        ctx.setLineDash([0]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.moveTo(130, 329);
        ctx.lineTo(163, 490);
        ctx.moveTo(244, 355);
        ctx.lineTo(158, 461);
        ctx.moveTo(120, 400);
        ctx.lineTo(174, 490);

        ctx.stroke();

        ctx.beginPath()
        ctx.lineWidth = 2;
        ctx.moveTo(312, 273);
        ctx.arc(309, 273, 4, 0, Math.PI * 2, false);
        ctx.moveTo(103, 172);
        ctx.arc(100, 172, 4, 0, Math.PI * 2, false);
        ctx.moveTo(133, 329);
        ctx.arc(130, 329, 4, 0, Math.PI * 2, false);
        ctx.moveTo(247, 355);
        ctx.arc(244, 355, 4, 0, Math.PI * 2, false);
        ctx.moveTo(161, 460);
        ctx.arc(158, 460, 4, 0, Math.PI * 2, false);

        ctx.fillStyle = '#0AB888';
        ctx.fill();
        ctx.stroke();
        ctx.stroke();

        ctx.font = "bold 30px Segoe UI";
        ctx.fillStyle = "#2B509F"

        ctx.fillText("A", 20, 280);
        ctx.fillText("B", 490, 280);
        ctx.fillText("C", 100, 425);
        ctx.fillText("D", 160, 40);
        ctx.fillText("K", 170, 472);
        ctx.font = "bold 30px Segoe UI";
        ctx.fillStyle = "#078196"
        ctx.fillText("M", 71, 160);
        ctx.fillText("H", 304, 260);
        ctx.fillText("N", 97, 350);
        ctx.fillText("G", 245, 383);
    }


