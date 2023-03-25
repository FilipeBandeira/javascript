//Feito das duas formas com while e for

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length === 0) {
        window.alert('Por favor, digite um número diferente de 0!')
    } else {
        let n = Number(num.value)
        //let c = 1
        tab.innerHTML = '' //sem valor, serve para limprar para uma próxima solicitação
        
        //while (c <= 10) {
            //let item = document.createElement('option')
            //item.text = `${n} x ${c} = ${n*c}`
           // item.value = `tab${c}` // Seleciona cada linha da tabela
           // tab.appendChild(item) //Adicionar um elemento filho no formulário
           // c++
       // }
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}

