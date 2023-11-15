class Carro{
    Modelo
    Ano

    constructor(modelo, ano){
        this.Modelo = modelo
        this.Ano = ano
    }

     MostrarCarro(){
        return `o modelo do carro ${this.Modelo}, o ano do carro ${this.Ano}`;
         
    }
}

let c1 = new Carro("Ferrari", 1999)
console.log(c1)
console.log(c1.MostrarCarro())
