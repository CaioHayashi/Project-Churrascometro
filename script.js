let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let res = document.getElementById('resultado')


function calcular() {
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let totalCarne = carnePP(duracao) * adultos + ( carnePP(duracao) / 2) * criancas
    console.log(totalCarne)

    let totalCerveja = cervejaPP(duracao) * adultos
    console.log(totalCerveja)

    let totalBebidas = bebidasPP(duracao) * adultos + ( bebidasPP(duracao) / 2) * criancas
    console.log(totalBebidas)

    res.innerHTML = `<p>${totalCarne / 1000}Kg de Carne</p>`
    res.innerHTML += `<p>${Math.ceil(totalCerveja / 350)} latas de Cerveja</p>`
    res.innerHTML += `<p>${Math.ceil(totalBebidas / 1000)} Garrafas de 2L de Refrigerante</p>` 
}



function carnePP(duracao) {
    if (duracao <= 6) {
        return 400
    } else {
        return 600
    }
}

function cervejaPP(duracao) {
    if (duracao <= 6) {
        return 1750
    } else {
        return 2550
    }
}

function bebidasPP(duracao) {
    if (duracao <= 6) {
        return 500
    } else {
        return 800
    }
}