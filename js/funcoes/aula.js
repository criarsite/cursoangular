
// funcoes sao blocos de codigo que podem ser chamado a qualquer momento

//funcao que nao retorna nada e sao chamada de procedimento, pois executa o que esta dentro e acabou 

 

function teste(){
    console.log("Teste")
}

teste()

function digaSeuNome(nome){
    console.log( "Meu nome é " +nome)
 
}



digaSeuNome("Washington Gomes")
digaSeuNome("Desenvolvedor .Net")
digaSeuNome("Desenvolvedor Golang")
digaSeuNome("C#")
digaSeuNome("Blazor")
digaSeuNome("Angular")

function quadrado(valor){
return valor * valor
}

let quadadoDeDez = quadrado(10)
console.log(quadadoDeDez)
console.log(quadadoDeDez  + quadrado(10))

function incrementarJuros(valor, percentualJuros){
    let valorDeCrecimento=  (percentualJuros/100)* valor
    return (valor + valorDeCrecimento)
}

function calcularIMC(peso,altura){
      let IMC=  peso / Math.pow(altura,2)
   
}


 function classificacaoIMC(IMC){
    if (IMC <18.5){
        return ("Abaixo do peso")
     } else if (IMC >= 18.5 && IMC < 25){
         return ("Peso normal")
     }else if (IMC >= 25 && IMC < 30){
         return ("Acima do peso")
     } else if (IMC >= 30 && IMC < 40){
         return ("Obeso")
     }else {
         return ("Obesidade grave")
     }

}


 



function main(){
    let  valor = 100
    let juros = 10
    let pFinal= incrementarJuros(valor, juros)
    console.log(pFinal)
    let peso = 80
    let altura= 1.75
   let imc = calcularIMC(peso,altura)  
   console.log( classificacaoIMC(imc))
}

//funcao que se auto executa  
// (function init(){
//     console.log("Funcao Initi")
// })()

//funcao anonima
(function (){
    console.log("Funcao anonima")
})()




main()
