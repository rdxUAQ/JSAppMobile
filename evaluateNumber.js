//Crea una función llamada evaluateNumber que tome como parámetro y devuelva un mensaje que indique si el número es positivo, negativo o cero.

var numero = prompt("escribe tu numero positivo o negativo ")

function evaluateNumber(number){
    
    if(number>0){
        return "positivo"
    }
    if(number<0){
        return  "negativo"
    }
}


console.log("tu numero es ", evaluateNumber(numero))