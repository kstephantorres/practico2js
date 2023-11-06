const textoSinGuion = prompt('14 - Ingrese un texto')

const textoSinGuionPartes= textoSinGuion.split('')

let textoGuion=''

textoSinGuionPartes.forEach(caracter => {
    textoGuion+=caracter+'-'
})

textoGuion= textoGuion.substring(0,textoGuion.length-1)
alert(textoGuion)