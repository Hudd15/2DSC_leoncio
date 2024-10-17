//FAZ REFERÊNCIA AOS ELEMENTOS DOM 
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btnCalcular = document.querySelector('#btn-calcular')
const divisao = document.querySelector('.divisao')
const adicao = document.querySelector('.adicao')
const subtracao = document.querySelector('.subtracao')
const multiplicacao = document.querySelector('.multiplicacao')

//alert(adicao)

// CRIA A FUNÇÃO CALCULAR
function calcular (){
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)
    if(typeof n1 === 'number'&& typeof n2 === 'number') {
        const add = `A soma de ${n1} e ${n2} = ${n1+n2}`       
        const sub = `A subtracao de ${n1} e ${n2} = ${n1-n2}`        
        const mult = `A multiplicacao de ${n1} e ${n2} = ${n1*n2}`        
        const div = `A divisao de ${n1} e ${n2} = ${n1/n2}`
        adicao.innerHTML = add
        subtracao.innerHTML = sub
        multiplicacao.innerHTML = mult
        divisao.innerHTML = div
    }else {
        alert('Por favor, digite um número correto')
    }
   
}

//ADICIONA ESCUTAR DE EVENTOS
btnCalcular.addEventListener('click', function(evento){
    evento.preventDefault()
    calcular()
})
