console.log ("Hello!")
console.log ("Desafio opcional N1")
console.log ("JavaScript - Coderhouse")

/* practice IF/ELSE and LOOPS */

let mascota = prompt ("Cual es su mascota?")

if (mascota == "gato") {
    alert ("😸")
    let emoji = ""
    for (let i = 0; i < 10; i++) {  
        emoji += "😸"
        console.log(emoji)
        }
} else if (mascota == "perro") {
    alert ("🐶")
    let emoji = ""
    for (let i = 0; i < 10; i++) {  
        emoji += "🐶"
        console.log(emoji)
        }
} else if (mascota == "hamster") {
    alert ("🐹")
    let emoji = ""
    for (let i = 0; i < 10; i++) {  
        emoji += "🐹"
        console.log(emoji)
        }
} else {
    alert ("🐭🐰🐷🐦🐴")
    let emoji = ""
    for (let i = 0; i < 10; i++) {  
        emoji += "🐭🐰🐷🐦🐴"
        console.log(emoji)
        }
}

