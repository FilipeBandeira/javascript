// No exemplo anterior as imagens foram colocadas junto ao HTML, neste serão trabalhados dinamicamente.

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano) {
        // fano.value.length = verifica se o quesito não foi preenchido
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // Element's' é usado pois estamos com mais de um parâmetro
        // O calculo será realizado com o ano atual, menos o informado
        // ano recebe o ano atual, e o number(fano.value) recebe o ano informado
        
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        // Forma para carregar as imagens dinamicamente
        // Nesse caso fizemos a criação de dois elementos usados como id

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
              img.setAttribute('src', 'imagens/bebeh.jpg')
              res.innerHTML = `Detectamos uma criança com ${idade} anos.`  
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemh.jpg')
                res.innerHTML = `Detectamos um jovem com ${idade} anos.`  
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoh.jpg')
                res.innerHTML = `Detectamos um adulto com ${idade} anos.`  
            } else {
                img.setAttribute('src', 'imagens/idosoh.jpg')
                res.innerHTML = `Detectamos um idoso com ${idade} anos.`  
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/bebem.jpg')
                res.innerHTML = `Detectamos uma criança com ${idade} anos.` 
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemm.jpg')
                res.innerHTML = `Detectamos uma jovem com ${idade} anos.`  
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultom.jpg')
                res.innerHTML = `Detectamos uma adulta com ${idade} anos.`  
            } else {
                img.setAttribute('src', 'imagens/idosom.jpg')
                res.innerHTML = `Detectamos uma idosa com ${idade} anos.`  
            }
        }

        res.style.textAlign = 'center'
        res.appendChild(img)
        //Este último é usado para conseguir aparecer a imagem
    }
}