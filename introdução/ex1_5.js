
    const numero = Number(prompt("Digite um número: "))
    const numAnterior = numero - 1
    const numPosterior = numero + 1
    alert(`O número é ${numero} e os números vizinhos são ${numAnterior} e ${numPosterior}`)

    const valorTotal = Number(prompt("Digite o valor da conta: "))
    const numClientes = Number(prompt("Digite o número de clientes que vai pagar: "))
    const valorPago = valorTotal / numClientes
    alert(`O valor a ser pago por cada cliente é de ${valorPago}`)

    const preco = Number(prompt("o preço do produto: "))
    const aVista = preco - 0.10
    const parcelado = preco / 3
    alert(`O valor total da compra é de ${preco.toFixed(2)} \n Pagamento à vista: ${aVista.toFixed(2)} \n Pagamento parcelado: ${parcelado.toFixed(2)}`)

    const nota1 = Number(prompt("Digite a primeira nota: "))
    const nota2 = Number(prompt("Digite a segunda nota: "))
    const media = (nota1 + nota2) / 2
    alert(`A média das notas é ${media.toFixed(2)}`)
