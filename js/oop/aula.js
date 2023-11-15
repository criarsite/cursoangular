// objetos -> 
// classes -> sao modelos que representam um objeto com propriedades e metodos

let carlos = { // em javascript um objeto é uma colecao de chave e valor
    nome: "shin",
    idade: 25,
 descrever: function(){
     console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`)
 }
}

let samuel = { // em javascript um objeto é uma colecao de chave e valor
    nome: "developer",
    idade: 30,
 descrever: function(){
     console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`)
 }
}

carlos.altura = 1.75

//delete pessoa.idade

console.log(carlos.nome)

console.log(carlos.idade)
console.log(carlos.descrever())

// uma funcao dentro de um objeto chamase metodo

// criando uma classe para definir as caracteristicas de um objeto
class pessoa{
    nome
    idade
    anoNascimento

// criando instancia com construtor

constructor(nome, idade){
    this.nome = nome
    this.idade = idade
    this.anoNascimento = 2022 - idade
    
    return this
    }

    descrever(){
        console.log(`meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
}

// um ojeto é uma instancia de uma classe   
// classe é uma definicao e instancia é uma ocorrencia, uma execucao da definicao

let p2 = new pessoa();
console.log(p2)

p2.nome= "vitor"
p2.idade = 25
console.log(p2)

let p3 = new pessoa();
console.log(p3)

p3.nome= "renan"
p3.idade = 25
console.log(p3.descrever())

let p1= new pessoa("maria", 15) 
console.log(p1)


// funcoes recebendo objetos
function comparaPessoas(p1, p2){
    if(p1.idade > p2.idade) return p1
    else if(p1.idade < p2.idade) return p2
    else return "as pessoas tem idade igual"
    
}

console.log(comparaPessoas(p1, p2))

let p4 = new pessoa("joana", 19) 
console.log(p4)

 

console.log(comparaPessoas(p1, p4))
console.log(comparaPessoas(p4, p1))
console.log(comparaPessoas(p1, p1))
console.log(comparaPessoas(p2, p2))
console.log(comparaPessoas(p3, p3))
console.log(comparaPessoas(p4, p4))



