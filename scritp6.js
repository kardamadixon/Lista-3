function calcular() {
    var num = parseInt(document.getElementById("numero").value);
    var fatorial = 1;
    var conta = "";

    for (var i = num; i >= 1; i--) {
        fatorial *= i;

        conta += i;

        if (i > 1) {
            conta += " x ";
        }
    }

    document.getElementById("resultado").innerHTML =
    num + "! = " + conta + " = " + fatorial;
}