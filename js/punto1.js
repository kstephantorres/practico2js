const edad = parseInt(prompt("Ingresa tu edad: "))
if(!isNaN(edad))
{
    if(edad > 18){
        document.write("Ya puedes conducir.")
    }else{
        document.write("No puedes conducir.")
    }
}else{
    document.write("No ingreso un edad valida.")
}