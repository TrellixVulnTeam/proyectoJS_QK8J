// TITULO
const titulo = document.getElementById("titulo")
const subtitulo= document.getElementById("subtitulo")

titulo.innerText= "NATbyPG"
subtitulo.innerText= "Consultora Natura"

// PRODUCTOS Y CARRITO 

const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')
const btnVaciar = document.getElementById('vaciarCarrito')
const carrito = []


stock.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')

    div.innerHTML = `
                    <h3>${producto.nombre}</h3>
                    <img src=${producto.img} alt="">
                    <p>${producto.tipo}</p>
                    <p>${producto.caracteristicas}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick="agregarAlCarrito(${producto.id})" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
                `

    productosContainer.append(div)
})



const agregarAlCarrito = (id) => {
    const item = stock.find( (producto) => producto.id === id)
    carrito.push(item)
    
    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}


const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)

    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    carrito.length = 0

    renderCarrito()
    renderCantidad()
    renderTotal()
}

btnVaciar.addEventListener('click', vaciarCarrito)

const renderCarrito = () => {
    carritoContenedor.innerHTML = ''

    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')

        div.innerHTML = `
                    <p>${item.nombre}</p>
                    <p>Precio: $${item.precio}</p>
                    <button onclick="removerDelCarrito(${item.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `
        
        carritoContenedor.append(div)
    })
}

const renderCantidad = () => {
    contadorCarrito.innerText = carrito.length
}

const renderTotal = () => {
    let total = 0
    carrito.forEach((producto) => {
        total += producto.precio
    })

    precioTotal.innerText = total
}

