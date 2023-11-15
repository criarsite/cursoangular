// let num =[]

// for (let i=0; i<=10; i++ ){
//     num = i
//     for(let i = 1; i<=10; i++){
        
//         console.log(num, "*", i, "=", num*i) 
//      }
// }


let numeros = []
for(let i= 0; i<100; i++){
numeros.push(i) 


for (let i= 0; i<numeros.length; i++){
    let numero = numeros[i]
    if (numero % 2 === 0){
        console.log(numero)
    }
}
}



