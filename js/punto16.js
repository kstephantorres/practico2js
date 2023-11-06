let texto16= prompt('16 - Ingrese un texto:')
let textoAlReves=''

for(let i=texto16.length-1;i>=0;i--){
    textoAlReves+=texto16[i]
}

alert(textoAlReves)