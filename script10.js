let numeroSorteado = Math.floor(Math.random() * 10) + 1;
let palpite;
let tentativas = 0;

do {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
    tentativas++;

    if (palpite !== numeroSorteado) {
        alert("Errou! Tente novamente.");
    }

} while (palpite !== numeroSorteado);

alert("Parabéns, você acertou em " + tentativas + " tentativas!");