console.log ("Hello!")
console.log ("Desafio entregable N1")
console.log ("JavaScript - Coderhouse")


//CALCULADORA NOTAS

let number1 = Number (prompt('Nota Primer Trimestre') )
let number2 = Number (prompt('Nota Segundo Trimestre') )
let number3 = Number (prompt('Nota Tercer Trimestre') )

function sumar(a, b, c) {
    return a + b + c
    
}
function dividir (a, d) {
    return a / d
}
resultado = sumar (number1, number2, number3)
resultadoFinal = dividir (resultado, 3)

alert ("Tu nota final es: " + resultadoFinal)

if (resultadoFinal < 6) {
    let emoji = ""
    for (let i = 0; i < 10; i++) {  
        emoji += "😔"
        console.log(emoji)
        }
    alert ("Keep studying!")   
} else if (resultadoFinal === 10) {
    let emoji = ""
    for (let i = 0; i < 10; i++) {  
        emoji += "💃"
        console.log(emoji)
        }
    alert ("You're awesome! Keep it up!")
} else {
    let emoji = ""
    for (let i = 0; i < 10; i++) {  
        emoji += "🎉"
        console.log (emoji)
        }
    alert ("Congratulations! You're doing great!")
}
