let texto17= prompt('17 - Ingrese un texto:')
let primeraVocalIndex=-1

for(let i=0;i<texto17.length;i++){
    const caracter = texto17[i].toLowerCase()
    if(caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u'){
        primeraVocalIndex= i
        break
    }
}
if(primeraVocalIndex !== -1){
    alert(`La vocal '${texto17[primeraVocalIndex]}' está en la posición ${primeraVocalIndex}`)
}else{
    alert('No se encotró vocal')
}
