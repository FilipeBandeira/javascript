//Calculo de fatorial

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--) {
        fat *= c 
    }
    return fat
}
console.log(fatorial(5))

// fat = fat * c > fat = 1 * 5 = 5 > fat = 5 * 4 = 20 > fat = 20 * 3 = 60 > fat = 60 * 2 = 120. 