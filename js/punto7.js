let cantidad= parseInt(prompt('Ingrese un numero no mayor a 50: '))

for(let i=cantidad;i>0;i--){
    for(let j=0;j<i;j++){
        document.write(i)
    }
    document.write(`<br>`)
}