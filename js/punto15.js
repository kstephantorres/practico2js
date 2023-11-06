let contadorVocales=0
const textoVocales=prompt('15 - Ingrese un texto:')
        .toLowerCase()
        .split('')
        .forEach(caracter => {
            console.log(caracter)
            if(caracter==='a' || caracter==='e' || caracter==='i' || caracter==='o' || caracter==='u')
            {contadorVocales++}
        })

alert(`La cantidad de vocales es: ${contadorVocales}`)