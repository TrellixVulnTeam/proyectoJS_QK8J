
const titulo = document.getElementById("titulo")
const subtitulo= document.getElementById("subtitulo")

titulo.innerText= "NATbyPG"
subtitulo.innerText= "Consultora Natura"


const perfumes = [  {id: 1, nombre: "Kaiak Clasico", caracteristicas: "Masculino", precio: 4800},  
                    {id: 2, nombre: "Kaiak Aventura", caracteristicas: "Femenino", precio: 4800},       
                    {id: 3, nombre: "Dose de Humor", caracteristicas: "Femenino", precio: 3600},
                    {id: 4, nombre: "Beijo de Humor", caracteristicas: "Femenino", precio: 3600}    ];

for (const perfume of perfumes) {
    let contenedor = document.createElement("section");
    contenedor.innerHTML = `<h3> Perfume: ${perfume.nombre}</h3>
                            <p> ${perfume.caracteristicas} </p>
                            <b> $ ${perfume.precio}</b>`;
    document.body.appendChild(contenedor); 
}
const jabones = [   {id: 5, nombre: "Tododia", formato: "Barra", aroma: "Flor de Manzana", precio: 700},
                    {id: 6, nombre: "Tododia", formato: "Barra", aroma: "Cereza y Avellana", precio: 700},
                    {id: 7, nombre: "Tododia", formato: "Barra", aroma: "Flor de Lis", precio: 700},
                    {id: 8, nombre: "Tododia", formato: "Liquido", aroma: "Frambuesa y Pimienta Rosa", precio: 700} ]

 for (const jabon of jabones) {
    let contenedor = document.createElement("section");
        contenedor.innerHTML = `<h3> Jabon: ${jabon.nombre}</h3>
                                <p> ${jabon.formato}</p>
                                <p> ${jabon.aroma} </p>
                                <b> $ ${jabon.precio}</b>`;
    document.body.appendChild(contenedor); 
}