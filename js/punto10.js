/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

*/

const filas = parseInt(prompt('10 - Ingrese la cantidad de filas: '))
const columnas = parseInt(prompt('10 - Ingrese la cantidad de columnas: '))
let contador = filas*columnas

if(!isNaN(filas) && !isNaN(columnas) && filas>0 && columnas>0){
    document.write(`<table>`)
    for(let i=0;i<filas;i++){
        document.write(`<tr>`)

        for(let j=0;j<columnas;j++){
            document.write(`<td>${contador--}</td>`)
        }

        document.write(`</tr>`)
    }
    document.write(`</table>`)
}else{
    alert('Ingresó un valor no valido')
}