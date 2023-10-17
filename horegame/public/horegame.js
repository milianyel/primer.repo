//const { application } = require("express")

const sectionReiniciar = document.getElementById("reiniciar")
const botonPersonajeJugador = document.getElementById("boton-seleccionar")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarPersonaje = document.getElementById("seleccion-personaje")
const spanJugador = document.getElementById("personaje-jugador")

const spanPersonajeEnemigo = document.getElementById("personaje-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")

const spanVidasEnemigo = document.getElementById("vidas-enemigo")
const sectionMensaje = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const sectionSeleccinarAtaque = document.getElementById("seleccionar-ataque")
const contenedorTarjetas = document.getElementById("contenedor-de-tarjetas")
const contenedorAtaques = document.getElementById("contenedor-ataques")

const sectionMapa = document.getElementById('contenedor-mapa')
const mapa = document.getElementById('mapa')

const botonArriba = document.getElementById('arriba')
const botonAbajo = document.getElementById('abajo')
const botonIzquierda = document.getElementById('izquierda')
const botonDerecha = document.getElementById('derecha')

const sectionPaginaPrincipal = document.getElementById('pagina-principal')
const botonJugar = document.getElementById('boton-jugar')

let jugadorId = null
let enemigoId = null
let personajes = []
let personajesEnemigos = []
let opcionDePersonajes
let inputRedman
let inputRiverboy
let inputZhajara
let fotoRedman
let fotoRiverboy
let fotoZhajara
let fotoViolet
let fotoClear
let fotoHiter
let personajeJugador
let personajeJugadorObjeto
let ataquesPersonaje
let ataquesPersonajeEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let ataqueJugador = []
let ataqueEnemigo = []
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './personajeshero/mapabackground.jfif'

let alturaProporcional
let anchoDelMapa = window.innerWidth - 30
const anchoMaximoDelMapa = 450

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa
}

alturaProporcional = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaProporcional

class Personaje {
    constructor(nombre , foto , cara , vida , ancho = 60 , alto = 60 , id = 0){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.cara = cara
        this.vida = vida
        this.ataques = []
        this.ancho = ancho
        this.alto = alto
        this.x = aleatorio(0 , mapa.width - this.ancho)
        this.y = aleatorio(0 , mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = cara
        this.velocidadX = 0
        this.velocidadY = 0
    }

    dibujarPersonaje() {
        lienzo.drawImage(this.mapaFoto , this.x , this.y , this.ancho , this.alto)
    }
}

let redman = new Personaje("Redman🔥" , "./personajeshero/redman.png" , './personajeshero/cararedman.png' , 5)

let riverboy = new Personaje("Riverboy💧" , "./personajeshero/riverboy.png" , "./personajeshero/carariverboy.png" , 5)

let zhajara = new Personaje("Zhajara🌍" , "./personajeshero/zhajara.png" , "./personajeshero/carazhajara.png" , 5 , 55 , 55)

let violet = new Personaje("Violet🔥💧" , "./personajeshero/violet.png" , "./personajeshero/caraviolet.png" , 5 , 55 , 55)

let clear  = new Personaje("Clear💧🌍" , "./personajeshero/clear.png" , './personajeshero/caraclear.png' , 5 , 50 , 50)

let hiter = new Personaje("Hiter🌍🔥" , "./personajeshero/hiter.png" , "./personajeshero/carahiter.png" , 5 , 90)

const REDMAN_ATAQUES = [
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🌍" , id:"boton-tierra" }
]

redman.ataques.push(...REDMAN_ATAQUES)

const RIVERBOY_ATAQUES = [
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🌍" , id:"boton-tierra" }
]

riverboy.ataques.push(...RIVERBOY_ATAQUES)

const ZHAJARA_ATAQUES = [
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" }
]

zhajara.ataques.push(...ZHAJARA_ATAQUES)

const VIOLET_ATAQUES = [
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🌍" , id:"boton-tierra" }
]

violet.ataques.push(...VIOLET_ATAQUES)

const CLEAR_ATAQUES = [
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🌍" , id:"boton-agua" } ,
    { nombre: "🌍" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-tierra" }
]

clear.ataques.push(...CLEAR_ATAQUES)

const HITER_ATAQUES = [
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🔥" , id:"boton-tierra" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" }
]

hiter.ataques.push(...HITER_ATAQUES)

personajes.push(redman,riverboy,zhajara,violet,clear,hiter)

function iniciarJuego() {
    sectionSeleccionarPersonaje.style.display = "none"

    sectionSeleccinarAtaque.style.display = "none"

    sectionMapa.style.display = 'none'

    sectionReiniciar.style.display = "none"

    personajes.forEach((personaje) => {
        opcionDePersonajes = `
       <input type="radio" name="personaje" id=${personaje.nombre} />
       <label class= "tarjetas-de-personaje" for=${personaje.nombre} >
           <p>${personaje.nombre}</p>
           <img src=${personaje.foto} alt=${personaje.nombre}>
       </label>
       `
        contenedorTarjetas.innerHTML += opcionDePersonajes

        window.addEventListener('keydown' , enterParaSeleccionarJugador)
       
        inputRedman = document.getElementById("Redman🔥")
        inputRiverboy = document.getElementById("Riverboy💧")
        inputZhajara = document.getElementById("Zhajara🌍")
        inputViolet = document.getElementById('Violet🔥💧')
        inputClear = document.getElementById('Clear💧🌍')
        inputHiter = document.getElementById('Hiter🌍🔥')

        fotoRedman = `<img src=${redman.cara} class='foto-elegido' alt=${redman.nombre}>`
        fotoRiverboy = `<img src=${riverboy.cara} class='foto-elegido' alt=${riverboy.nombre}>`
        fotoZhajara = `<img src=${zhajara.cara} class='foto-elegido' alt=${zhajara.nombre}>`
        fotoViolet = `<img src=${violet.cara} class='foto-elegido-reducir' alt=${violet.nombre}>`
        fotoClear = `<img src=${clear.cara} class='foto-elegido-reducir' alt=${clear.nombre}>`
        fotoHiter = `<img src=${hiter.cara} class='foto-elegido' alt=${hiter.nombre}>`
    })

    botonPersonajeJugador.addEventListener("click" , seleccionarPersonajeJugador)

    botonReiniciar.addEventListener("click" , reiniciarJuego)

    botonJugar.addEventListener("click" , inicio)

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch('http://192.168.7.190:8080/unirse')
    .then(function (res) {
        if (res.ok) {
            res.text()
            .then(function (respuesta) {
                console.log(respuesta)
                jugadorId = respuesta
            })
        }
    })
}

function inicio() {
    sectionPaginaPrincipal.style.display = 'none'
    sectionSeleccionarPersonaje.style.display = "flex"
}

function seleccionarPersonajeJugador() {
    
    if(inputRedman.checked){
        spanJugador.innerHTML = fotoRedman
        personajeJugador = inputRedman.id
    }else if(inputRiverboy.checked){
        spanJugador.innerHTML = fotoRiverboy
        personajeJugador = inputRiverboy.id
    }else if(inputZhajara.checked){
        spanJugador.innerHTML = fotoZhajara
        personajeJugador = inputZhajara.id
    }else if(inputViolet.checked){
        spanJugador.innerHTML = fotoViolet
        personajeJugador = inputViolet.id
    }else if(inputClear.checked){
        spanJugador.innerHTML = fotoClear
        personajeJugador = inputClear.id
    }else if(inputHiter.checked){
        spanJugador.innerHTML = fotoHiter
        personajeJugador = inputHiter.id    
    }else{
        alert("SELECCIONA TU PERSONAJE...🤔🚧")
        return
    }

    seleccionarHeroe(personajeJugador)

    sectionSeleccionarPersonaje.style.display = "none" 
    extraerAtaques(personajeJugador)
    sectionMapa.style.display = 'flex'
    iniciarMapa()
}

function seleccionarHeroe(personajeJugador) {
    fetch(`http://192.168.7.190:8080/herogame/${jugadorId}` , {
        method: "post" ,
        headers: {
            "Content-Type": "application/json"
        } ,
        body: JSON.stringify({
            personaje: personajeJugador
        })
    })
}

function extraerAtaques(personajeJugador) {
    let ataques

    for (let i = 0; i < personajes.length; i++) {

        if (personajeJugador === personajes[i].nombre) {
            ataques = personajes[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPersonaje = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPersonaje
})

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")

    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaques() {
    botones.forEach((boton) => {
        boton.addEventListener('click' , (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fuego🔥')
                console.log(ataqueJugador)
                boton.style.background = '#4b4c69'
                boton.disabled = true
            }else if(e.target.textContent === '💧') {
                ataqueJugador.push('Agua💧')
                console.log(ataqueJugador)
                boton.style.background = '#4b4c69'
                boton.disabled = true
            }else {
                ataqueJugador.push('Tierra🌍')
                console.log(ataqueJugador)
                boton.style.background = '#4b4c69'
                boton.disabled = true
            }

            if (ataqueJugador.length === 5) {
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques() {
    console.log('Enviar ataques', ataqueJugador)

    fetch(`http://192.168.7.190:8080/herogame/${jugadorId}/ataques`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques , 100)
}

function obtenerAtaques() {
    console.log('OBTENER ATAQUES');

    fetch(`http://192.168.7.190:8080/herogame/${enemigoId}/ataques`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function ({ ataques }) {
                        if (ataques.length === 5) {
                            ataqueEnemigo = ataques
                            combate()
                        }
                    })
            }
        })
}

function seleccionarPersonajeEnemigo(enemigo) {
    //spanPersonajeEnemigo.innerHTML = enemigo.nombre
    if (enemigo.nombre === 'Redman🔥') {
        spanPersonajeEnemigo.innerHTML = fotoRedman
    }else if (enemigo.nombre === 'Riverboy💧') {
        spanPersonajeEnemigo.innerHTML = fotoRiverboy
    }else if (enemigo.nombre === 'Zhajara🌍') {
        spanPersonajeEnemigo.innerHTML = fotoZhajara
    }else if (enemigo.nombre === 'Violet🔥💧') {
        spanPersonajeEnemigo.innerHTML = fotoViolet
    }else if (enemigo.nombre === 'Clear💧🌍') {
        spanPersonajeEnemigo.innerHTML = fotoClear
    }else{
        spanPersonajeEnemigo.innerHTML = fotoHiter
    }

    ataquesPersonajeEnemigo = enemigo.ataques
    secuenciaAtaques()

    //ataquesPersonajeEnemigo = enemigo.ataques

    //secuenciaAtaques()
}

function aleatorio(min , max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

//function ataqueAleatorioEnemigo() {
   // let ataqueAleatorio = aleatorio(0 ,  ataquesPersonajeEnemigo.length - 1)

   // let ataque = ataquesPersonajeEnemigo[ataqueAleatorio].nombre;
  //  ataquesPersonajeEnemigo.splice(ataqueAleatorio, 1);
    
  //  if (ataque == "🔥") {
  //      ataqueEnemigo.push("Fuego🔥");
  //    } else if (ataque == "💧") {
  //      ataqueEnemigo.push("Agua💧");
   //   } else {
  //     ataqueEnemigo.push("Tierra🌍");
  //    }
  //  console.log(ataqueEnemigo)
  //  iniciarPelea()
//}

//function iniciarPelea() {
  //  if (ataqueJugador.length === 5) {
    //    combate()
    //}
//}

function indexAmbosOponentes(jugador , enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    clearInterval(intervalo)
    console.log('COMBATE')

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index , index)
            CrearMensaje("EMPATE😐")
        }else if( (ataqueJugador[index] === 'Fuego🔥' && ataqueEnemigo[index] === 'Tierra🌍') || (ataqueJugador[index] === 'Agua💧' && ataqueEnemigo[index] === 'Fuego🔥') || (ataqueJugador[index] === 'Tierra🌍' && ataqueEnemigo[index] === 'Agua💧') ) {
            indexAmbosOponentes(index , index)
            CrearMensaje('GANASTE🏆')
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador + '🏆'
        }else {
            indexAmbosOponentes(index , index)
            CrearMensaje("PERDISTE😅")
            victoriasEnemigo++ 
            spanVidasEnemigo.innerHTML = victoriasEnemigo + '🏆'
        }
    }   
    revisarVictorias()
}

function revisarVictorias() {
    if(victoriasJugador === victoriasEnemigo) {
        CrearMensajeFinal("EMPATE TOTAL!!!🤦🏻‍♀️😲🙀")
    }else if(victoriasJugador > victoriasEnemigo ) {
        CrearMensajeFinal("FELICIDADES!!! VENCISTE AL ENEMIGO 🥳😎🎊")
    }else {
        CrearMensajeFinal("¡PERDISTE!🤣🤣😛")
    }
}

function CrearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensaje.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function CrearMensajeFinal(resultadoFinal) {
    sectionMensaje.innerHTML = resultadoFinal

    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function dibujarCanvas() {
    personajeJugadorObjeto.x = personajeJugadorObjeto.x + personajeJugadorObjeto.velocidadX
    personajeJugadorObjeto.y = personajeJugadorObjeto.y + personajeJugadorObjeto.velocidadY
    lienzo.clearRect(0 , 0 , mapa.width , mapa.height)
    lienzo.drawImage(mapaBackground , 0 , 0 , mapa.width , mapa.height)
    
    personajeJugadorObjeto.dibujarPersonaje()

    enviarPosicion(personajeJugadorObjeto.x , personajeJugadorObjeto.y)

    personajesEnemigos.forEach(function (personaje) {
        personaje.dibujarPersonaje()
        revisarColision(personaje)
    })
}

function enviarPosicion(x , y) {
    fetch(`http://192.168.7.190:8080/herogame/${jugadorId}/posicion` , {
        method: 'post' ,
        headers: {
            'Content-Type': 'application/json'
        } ,
        body: JSON.stringify({
            x ,
            y
        })
    })
    .then(function (res) {
        if (res.ok) {
            res.json()
            .then(function ({ enemigos }) {
                personajesEnemigos = enemigos.map(function (enemigo) {
                    console.log({ enemigo })
                    let personajeEnemigo = null
                    const personajeNombre = enemigo.personaje?.nombre || ''
                    if (personajeNombre === 'Redman🔥') {
                        personajeEnemigo = new Personaje("Redman🔥", "./personajeshero/redman.png", './personajeshero/cararedman.png', 5, 60 , 60 , enemigo.id)
                    }else if (personajeNombre === 'Riverboy💧') {
                        personajeEnemigo = new Personaje("Riverboy💧", "./personajeshero/riverboy.png", "./personajeshero/carariverboy.png", 5, 60 , 60 , enemigo.id)
                    }else if (personajeNombre === 'Zhajara🌍') {
                        personajeEnemigo = new Personaje("Zhajara🌍", "./personajeshero/zhajara.png" , "./personajeshero/carazhajara.png", 5, 55, 55, enemigo.id)
                    }else if (personajeNombre === 'Violet🔥💧') {
                        personajeEnemigo = new Personaje("Violet🔥💧", "./personajeshero/violet.png" , "./personajeshero/caraviolet.png", 5, 55, 55, enemigo.id)
                    }else if (personajeNombre === 'Clear💧🌍') {
                        personajeEnemigo  = new Personaje("Clear💧🌍", "./personajeshero/clear.png" , './personajeshero/caraclear.png', 5, 50, 50, enemigo.id)
                    }else if (personajeNombre === 'Hiter🌍🔥') {
                        personajeEnemigo = new Personaje("Hiter🌍🔥", "./personajeshero/hiter.png",  "./personajeshero/carahiter.png", 5, 90, 60 , enemigo.id)
                    }
                    personajeEnemigo.x = enemigo.x || 0
                    personajeEnemigo.y = enemigo.y || 0

                    return personajeEnemigo
                })
            })
        }
    })
}

function moverArriba() {
    personajeJugadorObjeto.velocidadY = - 5
    botonArriba.style.backgroundColor = 'darkred'
}

function moverAbajo() {
    personajeJugadorObjeto.velocidadY = 5
    botonAbajo.style.backgroundColor = 'darkred'
}

function moverIzquierda() {
    personajeJugadorObjeto.velocidadX = - 5
    botonIzquierda.style.backgroundColor = 'darkred'
}

function moverDerecha() {
    personajeJugadorObjeto.velocidadX = 5
    botonDerecha.style.backgroundColor = 'darkred'
}

function detenerMovimiento() {
    personajeJugadorObjeto.velocidadX = 0
    personajeJugadorObjeto.velocidadY = 0

    botonArriba.style.backgroundColor = '#070a52'
    botonAbajo.style.backgroundColor = '#070a52'
    botonIzquierda.style.backgroundColor = '#070a52'
    botonDerecha.style.backgroundColor = '#070a52'
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'w':    
            moverArriba()
            break;
        case 'ArrowDown':
        case 's':    
            moverAbajo()
            break;         
        case 'ArrowLeft':
        case 'a':    
            moverIzquierda()
            break;   
        case 'ArrowRight':
        case 'd':    
            moverDerecha()
            break;    
        default:
            break;
    }
}

function iniciarMapa() {
    personajeJugadorObjeto = ObjetoPersonajeJugador(personajeJugador)
    intervalo = setInterval(dibujarCanvas , 50)

    window.addEventListener('keydown' , sePresionoUnaTecla)

    window.addEventListener('keyup' , detenerMovimiento)
    dibujarCanvas()
}

function ObjetoPersonajeJugador() {
    for (let i = 0; i < personajes.length; i++) {

        if (personajeJugador === personajes[i].nombre) {
            return  personajes[i]
        }
    }
}

function enterParaSeleccionarJugador(event) {
    switch (event.key) {
        case 'Enter':
            seleccionarPersonajeJugador()
            break;
    
        default:
            break;
    }
}

function revisarColision(enemigo) {
    //if(enemigo === undefined){
   // return;
    //}

    const abajoJugador = personajeJugadorObjeto.y + personajeJugadorObjeto.alto -20
    const arribaJugador = personajeJugadorObjeto.y +20
    const derechaJugador = personajeJugadorObjeto.x + personajeJugadorObjeto.ancho -20
    const izquierdaJugador = personajeJugadorObjeto.x +20

    const abajoEnemigo = enemigo.y + enemigo.alto
    const arribaEnemigo = enemigo.y
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    if (abajoJugador < arribaEnemigo ||
        arribaJugador > abajoEnemigo ||
        derechaJugador < izquierdaEnemigo ||
        izquierdaJugador > derechaEnemigo) {
        return
    }

    detenerMovimiento()
    clearInterval(intervalo)
    console.log('se detecto una colision')

    enemigoId = enemigo.id
    sectionSeleccinarAtaque.style.display = "flex"
    sectionMapa.style.display = 'none'
    seleccionarPersonajeEnemigo(enemigo)
}

window.addEventListener("load" , iniciarJuego)