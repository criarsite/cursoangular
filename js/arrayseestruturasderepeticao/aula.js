// // Arrays sao estruturas de dados que armazenam varios valores.

// let array = [1,2,3,4,5,6,7,8,9,10];
// array[0]= 50
// console.log(array);

// let alunos= ["alice", "luana", "thais", "shin"]
// console.log(alunos);
// alunos[3] = "maria"
// console.log(alunos);

// // inserindo alunos
// alunos.push("joao")



// // atualizando alunos   
// alunos[3] = "Katia" 

// // deletando aluno
// //delete alunos[2]

// alunos.pop() // remove o ultimo elemento    
// console.log(alunos);
// alunos.shift() // remove o primeiro elemento
// console.log(alunos);

// alunos.splice(2, 1); // remove 1 elemento a partir do índice 2
// console.log(alunos);  

// var removidos = alunos.splice(2, 1); // remove 1 elemento a partir do índice 2
// console.log(removidos); // [3]


// // percorrendo o array

// for (let i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// // percorrendo o array com foreach

// alunos.forEach(function(valor, indice, alunos){
//     console.log(valor, indice, alunos);

// })

// let notas= []
// notas.push(8)
// notas.push(4)
// notas.push(6)

// let soma = 0

// for (let i=0; i<notas.length; i++){
//     let nota = notas[i]
//      soma = soma + nota
// } 

// let media = soma / notas.length
 
//     if (media >= 7){
//         console.log("aprovado")
//     }
//     else if (media== 6 || media< 7){
//         console.log("recuperacao")
//     }
//     else {
//         console.log("reprovado")
//     }
//     console.log(media)
 

    const numeros = [];

    for (let i = 0; i < 10; i++) {
        numeros.push(i);
    }

    console.log(numeros);


 

    // const numerosPares = [];

    // for (let i = 0; i < 10; i++) {
    //     const numeroPar = i % 2 === 0;
    //     if (numeroPar) {
    //         numerosPares.push(i);
    //     }
    // }

    // console.log(numerosPares);

    const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares);