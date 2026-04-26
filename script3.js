function somar() {
    var n = parseInt(document.getElementById("numero").value);
    var soma = 0;
    var conta = "";

    for (var i = 1; i <= n; i++) {
        soma += i;

        conta += i;

        if (i < n) {
            conta += " + ";
        }
    }

    document.getElementById("resultado").innerHTML =
    conta + " = " + soma;
}