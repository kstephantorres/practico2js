let cadena=""
do{
    cadena += prompt("3 - Ingrese un texto: ")+"-"
}while(confirm("¿Desea seguir?"))
const mensaje= cadena.substring(0,cadena.length-1)
document.write(mensaje+'<br>')