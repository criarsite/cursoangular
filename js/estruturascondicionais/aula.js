// condicional é quando verificamos se é verdadeiro ou falso
let eAzul = true; // 1
let ePreta = false; // 0

let camisa = "preto";
camisa == ePreta

if (eAzul) {
    console.log("Está azul");
} else {
    console.log("Está preto");
}

let n = 10;
let x = 20;


if (n > x) {
    console.log("N é maior que X");
} else {
    console.log("N é maior que X");
}

// Multiplo de 2 // se sobrar resto na divisao é impar se nao sobrar é par
// uma condicional sempre retorna um valor booleano

const multiploDe2 = (n) => {
    //Condiconais if e else: se for verdadeiro executao  codigo senao execucao   outro
    if (n % 2 === 0) {     // se sobrar resto na divisao é impar se nao sobrar é par
        return true;
    } else {    // uma condicional sempre retorna um valor booleano
        return false;
    }
}

const numero = 111
const numPar = (numero % 0) === 0
console.log(numPar)

//Preço gasto em uma viagem 

let precoCombustivel = 5.59
let kmPorLitro = 10
let distancia = 200

let litrosConsumidos = distancia / kmPorLitro
let valorGasto = litrosConsumidos * precoCombustivel
console.log(valorGasto.toFixed(2))

//Tipos de operadores

//operador de atribuição =
//operador de igualdade ==
// operador identico ===
// operador de desigualdade !=


let A = 0
let B = (A%5)===0
if (A === 0){
    console.log("numero é par")

} else if (B) {
console.log("numero é impar")
} else {
    console.log("Numero invalido")
}


 
let etanol= 5.99
let gasolina= 7.99
let listroConsumidos = distancia / kmPorLitro
 
 let combustivel = "gasolina"

 if(combustivel === "etanol" ){
    let valorGasto=  listroConsumidos * etanol
    console.log(listroConsumidos)
    console.log("Viagem com gasolina" + " " +  "Valor gasto a etanol " +valorGasto.toFixed(2))
 } else {
    let valorGasto=  listroConsumidos * gasolina
    console.log(listroConsumidos)
    console.log("Viagem com gasolina" + " " +  "Valor gasto a gasolina " +valorGasto.toFixed(2))
 }
 

 // Media escolar
 
 let NotaA = 4
 let NotaB = 7
 let NotaC = 5

 let media = (NotaA + NotaB + NotaC)/3
 console.log(media)
 if (media >=7 ){
    console.Log("Aprovado")
 } else if (media >= 5 && media <7) {
    console.log("recuperacao")
 } else {
    console.log("Reprovado")
 }

 //Media em Golang 
 /*
 A:= 6
 B:= 7
 c:=5
 media := (A+B+C)/3
 if media >=7 {
    println("Aprovado")
 }
 else if media ==5 && media <7 {
    println("recuperacao")
 } else {
    println("Reprovado")
 }
 */

 // Media em C#
 /*
 int A = 6;
 int B = 7;
 int C = 5;
 int media = (A + B + C) / 3;
 if (media >= 7){
    Console.WriteLine("Aprovado");
  } else if (media == 5 && media < 7){
    Console.WriteLine("Recuperacao");
  }else {
    Console.WriteLine("Reprovado");
 }
 
 */
  
 // Media em TypeScript
 /*
 let A: number = 6;
 let B: number  = 7;
 let C: number  = 5;
 let media: number  = (A + B + C) / 3;
 if (media >= 7){
    console.log("Aprovado");
  }
  else if (media == 5 && media < 7){
    console.log("Recuperacao");
  }
  else {
    console.log("Reprovado");
  }
  */
 
   //Calculo IMC 
let peso = 75
let altura = 1.75
let IMC = peso / (altura * altura)

console.log(IMC)
if (IMC <18.5){
    console.log("Abaixo do peso")
} else if (IMC >= 18.5 && IMC < 25){
    console.log("Peso normal")
}else if (IMC >= 25 && IMC < 30){
    console.log("Acima do peso")
} else if (IMC >= 30 && IMC < 40){
    console.log("Obeso")
}else {
    console.log("Obesidade grave")
}

