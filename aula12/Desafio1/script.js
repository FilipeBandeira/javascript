function carregar() {
    // Esses próximos são objetos
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var edu = window.document.getElementById('comp')
    
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#e2cd9f' //Usando o CSS dentro de JS dinamicamente
        edu.innerHTML = `Bom dia!`
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
        edu.innerHTML = `Boa tarde!`
    }else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
        edu.innerHTML = `Boa noite!`
    }
}