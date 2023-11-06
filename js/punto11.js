const nombres=[]

const edades=[]

for(let i=0;i<3;i++)
{
    let bandera=true
    nombres.push(prompt('11- Ingrese el nombre:'))
    do{
        const edad= parseInt(prompt('11- Ingrese la edad: '))
        if(!isNaN(edad))
        {
            
            edades.push(edad)
            bandera=false
            
        }else{
        alert('No ingreso una edad valida. Intente de nuevo.')
        }
        console.log(bandera)
    }while(bandera)
}

const edadMaxima= Math.max(...edades)

const indiceEdadMaxima = edades.indexOf(edadMaxima)

alert(`La persona con la mayor edad es: ${nombres[indiceEdadMaxima]}`)

