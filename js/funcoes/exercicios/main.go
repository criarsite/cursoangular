package main

import (
	"fmt"
)

func main() {
	fmt.Println(isMaiorIdade(36))
	fmt.Println(escrevaMeuNome("Washington"))
	fmt.Println(calcularPreco(100, 10))
}

func escrevaMeuNome(nome string) string {
	return nome
}

func isMaiorIdade(idade int) string {
	nome := escrevaMeuNome("Was ")

	if idade <= 0 || idade > 120 {
		return nome + "dados invalidos"
	} else if idade <= 18 {
		return nome + "Menor de idade"
	}
	return nome + "maior de idade"
}

func calcularPreco(precoEtiqueta, formaPagamento float64) (string, float64) {

	/*
		1 pagamento no cartao de credito em 2x
		2 pagamento parcelado 3x ou mais
		3 pagamento no pix
		4 pagamento no dinheiro
	*/

	precoEtiqueta = 100
	formaPagamento = 2
	porcentagem := 0.1

	if formaPagamento == 1 {
		return "o preco é ", precoEtiqueta + (precoEtiqueta * porcentagem)
	} else if formaPagamento == 2 {
		return "o preco é ", precoEtiqueta + (precoEtiqueta*porcentagem + 5)
	} else if formaPagamento == 3 {
		return "o preco é ", precoEtiqueta - 10
	}
	return "o preco é ", precoEtiqueta - 15

}
