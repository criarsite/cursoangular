class Carro{
    Modelo
    Ano
    gastMedioKM

    constructor(modelo, ano, gasto){
        this.Modelo = modelo
        this.Ano = ano
        this.gastMedio100KM = gasto
    }

     MostrarCarro(){
        return `o modelo do carro ${this.Modelo}, o ano do carro ${this.Ano} e gasta ${this.gastMedio100KM} litros por 100 KM`;
         
    }
}

let c1 = new Carro("Ferrari", 1999, 6)
console.log(c1)
console.log(c1.MostrarCarro())


class pessoa{
    Nome
    Idade
    Altura

    constructor(nome, peso, altura){
this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularIMC(){
        let IMC =  this.peso / (this.altura * this.altura)
        if(IMC < 18.5)
        return "abaixo do peso"
    else if (IMC < 25)
        return "peso normal"
    else if (IMC < 30)
        return "acima do peso"
    else if (IMC < 35)
        return "obesidade grau I"
    else if (IMC < 40)
        return "obesidade grau II"
    else
        return "obesidade grau III"
    
    }

     
    
}

let p1 = new pessoa("washington", 67, 1.75)
console.log(p1)
console.log(p1.calcularIMC())

