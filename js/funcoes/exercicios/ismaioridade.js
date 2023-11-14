
let idade = 16

function isMaiorIdade(idade){
    if (idade <= 18){
        return "Menor de idade"
    } else if(idade <=0 || idade >=120){
        return "dados invalidos"
    }
    return "É maior de idade"
}

function main(){
   console.log( isMaiorIdade(idade))
}

main()


