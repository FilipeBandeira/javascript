//Variável composta é o array, podendo armazenar vários valores

// Exemplo 1:

let num = [5, 8, 2, 9, 3]

num.push(1) //Adicionar na posição seguinte
num.sort() //Coloca em ordem crescente

// num[3] = 6 Irá adicionar o valor 6 na posição 3 
// console.log(num)
// console.log(`O vetor tem ${num.length} posições`) // Ler o tamanho/cumprimento da array
// console.log(`O primeiro valor do vetor é ${num[0]}`) // Número da posição indicada


// Exemplo 2 (Ex 2 igual a 3):

let valores = [8, 1, 7, 4, 2, 9]

valores.sort()

console.log(valores)

for(let pos = 0; pos < valores.length; pos++) {
     console.log(`A posição ${pos} tem o valor ${valores [pos]}`)
}

//Exemplo 3: (Mais simples for in, utilizados para variáveis compostas e objetos)

// for(let pos in valores) { // Para cada posição em num
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

// Exemplo 4:

// let pos = num.indexOf(2) // identificador de posição perante o valor (O 2 é o valor e o indexOf irá identificar qual posição que ele se encontra)
// console.log(num)
// console.log(`O valor 2 está na posição ${pos}`)