

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.scale(0.95, 0.95)

    var colors = ['#3357C9',
        '#5174E3',
        '#6284EB',
        '#0585B6',
        '#24A691',
        '#242FB3'];

    var currentColor = 0;


    drawLines();

    var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#FBF01AFF');
    gradient.addColorStop(0.5, '#1AFB67FF');
    gradient.addColorStop(1, '#1A43FBFF');

    function startAnimation() {

        function changeColor() {
            currentColor = (currentColor + 1) % colors.length;
            ctx.strokeStyle = colors[currentColor];
            drawLines();
            setTimeout(changeColor, 300);
        }

        changeColor();
    }


    function drawLines() {
        ctx.beginPath();
        ctx.arc(260, 266, 230, 0, Math.PI * 2, true);
        ctx.lineWidth = 3;
        ctx.stroke();
    }


    ctx.beginPath()
    ctx.setLineDash([15]);
    ctx.strokeStyle = 'black';
    ctx.ellipse(260, 266, 230, 66, 0, 0, Math.PI, true);
    ctx.fillStyle = 'rgba(132, 224, 123, 1)';
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.stroke();

    ctx.beginPath()
    ctx.setLineDash([0]);
    ctx.moveTo(490, 266);
    ctx.ellipse(260, 266, 230, 66, 0, 0, Math.PI, false);
    ctx.fillStyle = 'rgba(132, 224, 123, 1)';
    ctx.lineWidth = 3;
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.setLineDash([8]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#343D45';
    ctx.moveTo(260, 99);
    ctx.lineTo(300, 99);
    ctx.lineTo(356, 128);
    ctx.lineTo(260, 266);
    ctx.lineTo(198, 134);
    ctx.lineTo(260, 99);
    ctx.fillStyle = 'rgba(28, 85, 195, 0.64)';
    ctx.fill();
    ctx.stroke();


    ctx.beginPath()
    ctx.strokeStyle = 'black';
    ctx.setLineDash([15]);
    ctx.moveTo(412, 99);
    ctx.ellipse(260, 99, 152, 38, 0, 0, Math.PI, true);
    ctx.fillStyle = 'rgba(132, 224, 123, 1)';
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.stroke();

    ctx.beginPath()
    ctx.setLineDash([0]);
    ctx.moveTo(412, 99);
    ctx.ellipse(260, 99, 152, 38, 0, 0, Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(132, 224, 123, 1)';
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.stroke();


    ctx.beginPath()
    ctx.lineWidth = 2;                         
    ctx.setLineDash([8]);
    ctx.strokeStyle = '#343D45';
    ctx.moveTo(260, 41);
    ctx.lineTo(260, 266);
    ctx.moveTo(260, 99);
    ctx.lineTo(356, 128);

    ctx.fillStyle = 'rgba(136, 64, 216, 0.53)';
    ctx.fill();
    ctx.stroke();


    ctx.beginPath()
    ctx.setLineDash([8]);
    ctx.strokeStyle = '#343D45';
    ctx.moveTo(260, 99);
    ctx.lineTo(166, 70);
    ctx.stroke();


    ctx.beginPath()
    ctx.strokeStyle = '#343D45';
    ctx.moveTo(166, 70);
    ctx.setLineDash([8]);
    ctx.lineTo(198, 134);

    ctx.stroke();


    ctx.beginPath()
    ctx.setLineDash([0]);
    ctx.lineWidth = 3;
    ctx.moveTo(360, 128);
    ctx.arc(356, 128, 4, 0, Math.PI * 2, false);
    ctx.moveTo(264, 99);
    ctx.arc(260, 99, 4, 0, Math.PI * 2, false);
    ctx.moveTo(170, 70);
    ctx.arc(166, 70, 4, 0, Math.PI * 2, false);
    ctx.moveTo(264, 49);
    ctx.arc(260, 47, 4, 0, Math.PI * 2, false);
    ctx.moveTo(264, 266);
    ctx.arc(260, 266, 4, 0, Math.PI * 2, false);


    ctx.fillStyle = 'rgba(216, 241, 40, 1)';
    ctx.fill();
    ctx.stroke();
    ctx.stroke();


    ctx.font = "bold 30px Segoe UI";
    ctx.fillStyle = "#2A2C8D"

    ctx.fillText("O", 249, 295);
    ctx.fillText("O1", 264, 95);
    ctx.fillText("P", 254, 27);
    ctx.fillText("B", 150, 100);
    ctx.fillText("A", 355, 155);



