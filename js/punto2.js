const nota = parseInt(prompt("Ingresa su nota: "))
if(!isNaN(nota)){
   if(nota<=10 && nota>=0){
    if(nota<=2) {
        document.write("Muy deficiente.<br>") 
    }else if(nota<=4){
        document.write("Insuficiente.<br>") 
    }else if(nota<=6){
        document.write("Suficiente.<br>") 
    }else if(nota<=7){
        document.write("Bien.<br>") 
    }else if(nota<=9){
        document.write("Notable.<br>") 
    }else if(nota<=10){
        document.write("Sobresaliente.<br>") 
    }
   }else{
    document.write("Número erróneo.<br>")
   }
}else{
    document.write("Introduce un número valido.<br>")
}