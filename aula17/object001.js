// Exemplo de object, onde você consegue identificar cada posição, inclusive usando função 
// o object se encontra mais completo que o Array, pois carrega mais funcionalidades

let amigo = {nome: 'José', sexo: 'M', peso: 85.4, engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)