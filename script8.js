let preco;
let total = 0;

do {
    preco = parseFloat(prompt("Digite o preço do produto (0 para finalizar):"));

    if (preco > 0) {
        total = total + preco;
    }

} while (preco !== 0);

alert("Valor total da compra: R$ " + total.toFixed(2));