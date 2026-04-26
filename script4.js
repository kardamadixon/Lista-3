function mostrar() {
    var pares = "";

    for (var i = 2; i <= 50; i += 2) {
        pares += i + " ";
    }

    document.getElementById("resultado").innerHTML = pares;
}