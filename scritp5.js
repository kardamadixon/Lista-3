let senha = prompt("Crie uma senha:");
let tentativa = prompt("Digite a senha:");

while (tentativa != senha) {
    alert("Senha incorreta, tente novamente.");
    tentativa = prompt("Digite a senha novamente:");
}

alert("Acesso concedido!");