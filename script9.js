let idade;
let maiorIdade = 0;
let menorIdade = 999;

for (let i = 1; i <= 5; i++) {
    idade = parseInt(prompt("Digite a idade da " + i + "ª pessoa:"));

    if (idade > maiorIdade) {
        maiorIdade = idade;
    }

    if (idade < menorIdade) {
        menorIdade = idade;
    }
}

alert("Maior idade: " + maiorIdade + "\nMenor idade: " + menorIdade);