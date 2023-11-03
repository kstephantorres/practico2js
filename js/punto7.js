let cantidad= parseInt(prompt('Ingrese un numero no mayor a 50: '))
if(!isNaN(cantidad)){
    if(cantidad<=50 && cantidad>=1){
        for(let i=cantidad;i>0;i--){
            for(let j=0;j<i;j++){
                document.write(i)
            }
            document.write(`<br>`)
        }
    }else{
        alert("El número ingresado está fuera de los parámetros establecidos")
    }
}else{
    alert('Debe ingresar un número')
}
