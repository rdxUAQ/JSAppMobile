console.log("Crea una función llamada incrementAge que tome como parámetro la edad y devuelta la edad incrementada en 5.")

var edad = prompt("escribe tu edad ")


function incrementAge(edad){
    
    var numero = Number(edad)
    return numero+5
    
}

var newEdad = incrementAge(edad) 
console.log("tu edad es ",newEdad)