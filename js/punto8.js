let cantidad8= parseInt(prompt('8 - Ingrese un numero no mayor a 50: '))
if(!isNaN(cantidad8)){
    if(cantidad8<=50 && cantidad8>=1){
        for(let i=1;i<=cantidad8;i++){
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