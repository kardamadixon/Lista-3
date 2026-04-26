let anterior = 0;
let atual = 1;
let proximo;

console.log("Os 10 primeiros números da sequência de Fibonacci são:");

for (let i = 1; i <= 10; i++) {
    console.log(anterior);

    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}