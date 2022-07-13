// TITULO
const titulo = document.getElementById("titulo")
const subtitulo= document.getElementById("subtitulo")

titulo.innerText= "NATbyPG"
subtitulo.innerText= "Consultora Natura"

// PRODUCTOS  

const productosContainer = document.querySelector('#contenedor-productos')
const carritoContenedor = document.querySelector('#carrito-contenedor')
const contadorCarrito = document.querySelector('#contadorCarrito')
const precioTotal = document.querySelector('#precioTotal')
const btnVaciar = document.getElementById('vaciarCarrito')
const carritoEnLS = JSON.parse( localStorage.getItem('carrito') )
let carrito = []


fetch ('stock.json')
    .then ((res) =>res.json ())
    .then ((info) => {
        stock = info
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
    
})

// CARRITO

const agregarAlCarrito = (id) => {
    const item = stock.find( (producto) => producto.id === id)
    carrito.push(item)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito)
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const removerDelCarrito = (id) => {
    const item = carrito.find((producto) => producto.id === id)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderCarrito()
    renderCantidad()
    renderTotal()
}

const vaciarCarrito = () => {
    carrito.length = 0
    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderCarrito()
    renderCantidad()
    renderTotal()
}

btnVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Está seguro de borrar el carrito?',
        color: '#283618',
        icon: 'warning',
        iconColor: 'white',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        confirmButtonColor: '#606C38',
        cancelButtonText: 'No, no quiero',
        cancelButtonColor: 'darkred',
        background: '#f2aea6'
    }).then((result) => {
        if (result.isConfirmed) {
            vaciarCarrito()
            Swal.fire({
                title: 'Borrado!',
                icon: 'success',
                confirmButtonColor: '#606C38',
                text: 'El carrito fue vaciado'
            })
            
        }
    })
})



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

if (carritoEnLS) {
    carrito = carritoEnLS

    renderCarrito()
    renderCantidad()
    renderTotal()
} else {
    carrito = []
}
