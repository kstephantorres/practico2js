let acumulador=0
let confirmacion=true
do{
    let auxiliar = parseInt(prompt("Ingrese un numero: "))
    console.log(auxiliar)
    if(!isNaN(auxiliar))
    {
        acumulador += auxiliar
        confirmacion= confirm("¿Desea seguir?")
    }else{
        alert('El valor ingresado no es un número')
    }
    
}while(confirmacion)
document.write(`La suma de los números ingresados es: ${acumulador}`)