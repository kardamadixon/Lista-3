function iniciar() {
    var i = 10;

    var tempo = setInterval(function() {
        document.getElementById("contador").innerHTML = i;

        if (i == 0) {
            document.getElementById("contador").innerHTML = "🚀 DECOLAGEM!";
            clearInterval(tempo);
        }

        i--;
    }, 1000);
}