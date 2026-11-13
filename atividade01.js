// Calculadora de Compra-Ativdade Prática 01
// 1) Declaração das variáveis 
const preco = 39.90;
const quantidade = 3;
const taxaDesconto = 0.10;

//2)Cálculos 
const total = preco * quantidade;
const desconto = total * taxaDesconto;
const valorFinal = total - desconto;

//3) Exibição dos resultados 
console.log("Preço do produto: R$ " + preco.toFixed(2));
console.log("Quantidade: " quantidade);
console.log("Valor total: R$  " total.toFixed(2));
console.log("Valor final a pagar: R$ " +  valorFinal.toFixed(2));
