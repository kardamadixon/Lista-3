function calcular() {
    var num = document.getElementById("numero").value;
    var resultado = "";

    for (var i = 1; i <= 10; i++) {
        resultado += num + " x " + i + " = " + (num * i) + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}