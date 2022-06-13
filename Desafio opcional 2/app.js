
// TIENDA VIRTUAL - CONSULTORIA

class producto {
    constructor (nombre, caracteristicas, precio) {
        this.nombre = nombre;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
    }
    descuento5 () {
        this.descuento = this.precio / 100 * 95;
    }
}

const stock = [];
stock.push (new producto ("Kaiak Clasico", "Eau de Toilette - Masculino", 4800))
stock.push (new producto ("Kaiak Aventura", "Eau de Toilette - Femenino", 4800))
stock.push (new producto ("Beijo de Humor", "Eau de Toilette - Femenino", 3600))
stock.push (new producto ("Dose de Humor", "Eau de Toilette - Femenino", 3600))

for (const producto of stock) 
    producto.descuento5 ();

for (let index = 0; index < 4; index++) {
    console.log (stock[index]);
} 
