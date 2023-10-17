const sectionSeleccinarAtaque = document.getElementById("seleccion-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccion-mascota")
const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-del-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-del-enemigo")
const contenedorTarjetas = document.getElementById("contenedor-de-tarjetas")
const contenedorAtaques = document.getElementById("contenedor-ataques")

const sectionMapa = document.getElementById("contenedor-mapa")
const mapa = document.getElementById("mapa")

const botonArriba = document.getElementById('arriba')
const botonAbajo = document.getElementById('abajo')
const botonIzquierda = document.getElementById('izquierda')
const botonDerecha = document.getElementById('derecha')

let mokepones = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputPydos
let inputTucapalma
let mokeponSeleccionado
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMascotaEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let ataqueJugador = []
let ataqueEnemigo = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext('2d')
let intervalo
let mapaBackground = new Image
mapaBackground.src = './mokepones/mokemap.png'
let anchoMapa = window.innerWidth - 20
let alturaQueBuscamos
let anchoMaximoMapa = 400

if (anchoMapa > anchoMaximoMapa) {
    anchoMapa = anchoMaximoMapa
}

alturaQueBuscamos = anchoMaximoMapa * 600 / 800

mapa.width = anchoMapa
mapa.height = alturaQueBuscamos

class Mokepon {
    constructor(nombre , foto , vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio( 0 , mapa.width - this.ancho)
        this.y = aleatorio( 0 , mapa.height - this.alto)
        this.velocidadX = 0
        this.velocidadY = 0
    }

    dibujarMascota() {   
        lienzo.drawImage(
            this.mapaFoto ,
            this.x ,
            this.y ,
            this.ancho ,
            this.alto)
        }
}

let hipodoge = new Mokepon("Hipodoge" , "./mokepones/mokepons_mokepon_hipodoge_attack.webp" , 5)

let capipepo = new Mokepon("Capipepo" , "./mokepones/mokepons_mokepon_capipepo_attack.webp" , 5)

let ratigueya = new Mokepon("Ratigueya" , "./mokepones/mokepons_mokepon_ratigueya_attack.webp" , 5)

let langostelvis = new Mokepon('Langostelvis' , "./mokepones/mokepons_mokepon_langostelvis_attack.png" , 5)

let pydos = new Mokepon('Pydos' , "./mokepones/mokepons_mokepon_pydos_attack.png" , 5)

let tucapalma = new Mokepon('Tucapalma' , "./mokepones/mokepons_mokepon_tucapalma_attack.png" , 5)



let hipodogeEnemigo = new Mokepon("Hipodoge" , "./mokepones/mokepons_mokepon_hipodoge_attack.webp" , 5)

let capipepoEnemigo = new Mokepon("Capipepo" , "./mokepones/mokepons_mokepon_capipepo_attack.webp" , 5)

let ratigueyaEnemigo = new Mokepon("Ratigueya" , "./mokepones/mokepons_mokepon_ratigueya_attack.webp" , 5)

let langostelvisEnemigo = new Mokepon('Langostelvis' , "./mokepones/mokepons_mokepon_langostelvis_attack.png" , 5)

let pydosEnemigo = new Mokepon('Pydos' , "./mokepones/mokepons_mokepon_pydos_attack.png" , 5)

let tucapalmaEnemigo = new Mokepon('Tucapalma' , "./mokepones/mokepons_mokepon_tucapalma_attack.png" , 5)

hipodoge.ataques.push(
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🌍" , id:"boton-tierra" }
)

hipodogeEnemigo.ataques.push(
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🌍" , id:"boton-tierra" }
)

capipepo.ataques.push(
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🌍" , id:"boton-tierra" }
)

capipepoEnemigo.ataques.push(
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🌍" , id:"boton-tierra" }
)

ratigueya.ataques.push(
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" }
)

ratigueyaEnemigo.ataques.push(
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" }
)

langostelvis.ataques.push(
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🌍" , id:"boton-tierra" }
)

langostelvisEnemigo.ataques.push(
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🌍" , id:"boton-tierra" }
)

pydos.ataques.push(
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🌍" , id:"boton-tierra" }
)

pydosEnemigo.ataques.push(
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "💧" , id:"boton-agua" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "🌍" , id:"boton-tierra" }
)

tucapalma.ataques.push(
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" }
)

tucapalmaEnemigo.ataques.push(
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🌍" , id:"boton-tierra" } ,
    { nombre: "🔥" , id:"boton-fuego" } ,
    { nombre: "💧" , id:"boton-agua" }
)

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,pydos,tucapalma)

function iniciarJuego() {
    sectionSeleccinarAtaque.style.display = "none"

    sectionMapa.style.display = 'none'

    sectionReiniciar.style.display = "none"

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class= "tarjeta-de-mokepon" for=${mokepon.nombre}>
          <p>${mokepon.nombre}</p>
          <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById("Hipodoge")
        inputCapipepo = document.getElementById("Capipepo")
        inputRatigueya = document.getElementById("Ratigueya")
        inputLangostelvis = document.getElementById('Langostelvis')
        inputPydos = document.getElementById('Pydos')
        inputTucapalma = document.getElementById('Tucapalma')
    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    botonReiniciar.addEventListener("click" , reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = "none"

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mokeponSeleccionado = inputHipodoge.id
    }else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mokeponSeleccionado = inputCapipepo.id
    }else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mokeponSeleccionado = inputRatigueya.id
    }else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mokeponSeleccionado = inputLangostelvis.id
    }else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mokeponSeleccionado = inputPydos.id
    }else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mokeponSeleccionado = inputTucapalma.id
    }else {
        alert("SELECCIONA TU MASCOTA 🚧")
        reiniciarJuego()
    }
    extraerAtaques(mokeponSeleccionado)
    sectionMapa.style.display = "flex"
    iniciarMapa()
}

function extraerAtaques(mokeponSeleccionado) {
    let ataques 

    for (let i = 0; i < mokepones.length; i++) {
        
        if (mokeponSeleccionado === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-ataque BAtaque">${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesMokepon
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
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#4b4c69'
                boton.disabled = true
            }else if(e.target.textContent === '💧') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#4b4c69'
                boton.disabled = true
            }else {
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.background = '#4b4c69'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
}

function seleccionarMascotaEnemigo(enemigo) {

       spanMascotaEnemigo.innerHTML = enemigo.nombre

       ataquesMascotaEnemigo = enemigo.ataques

       secuenciaAtaques()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0 , ataquesMascotaEnemigo.length - 1)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 2) {
        ataqueEnemigo.push('Fuego')
    }else if(ataqueAleatorio == 3) {
        ataqueEnemigo.push('Agua')
    }else {
        ataqueEnemigo.push('Tierra')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador , enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index , index)
            crearMensaje("EMPATE")
        }else if( (ataqueJugador[index] === "Fuego" && ataqueEnemigo[index] === "Tierra") || (ataqueJugador[index] === "Agua" && ataqueEnemigo[index] === "Fuego") || (ataqueJugador[index] === "Tierra" && ataqueEnemigo[index] === "Agua") ) {
            indexAmbosOponentes(index , index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }else {
            indexAmbosOponentes(index , index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()
}

function revisarVidas() {
    if(victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal('ESTO FUE UN EMPATE')
    }else if(victoriasJugador > victoriasEnemigo ) {
        crearMensajeFinal("FELICIDADES GANASTE :)")
    }else {
        crearMensajeFinal("PERDISTE LA BATALLA :(")
    }
}   

function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado

    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function iniciarMapa() {
    mascotaJugadorObjeto = objetoMascotaJugador() 

    intervalo = setInterval(dibujarCanvas , 100)

    window.addEventListener('keydown' , sePresionoUnaTecla)

    window.addEventListener('keyup' , detenerMovimiento)
    dibujarCanvas()
}

function dibujarCanvas() {
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0 , 0 , mapa.width , mapa.height)
    lienzo.drawImage(mapaBackground , 0 , 0 , mapa.width , mapa.height)
    mascotaJugadorObjeto.dibujarMascota()

    if (inputHipodoge.checked) {
        capipepoEnemigo.dibujarMascota()
        ratigueyaEnemigo.dibujarMascota()
        langostelvisEnemigo.dibujarMascota()
        pydosEnemigo.dibujarMascota()
        tucapalmaEnemigo.dibujarMascota()
        colisionesConHipodoge()
    }else if (inputCapipepo.checked) {
        hipodogeEnemigo.dibujarMascota()
        ratigueyaEnemigo.dibujarMascota()
        langostelvisEnemigo.dibujarMascota()
        pydosEnemigo.dibujarMascota()
        tucapalmaEnemigo.dibujarMascota()
        colisionesConCapipepo()
    }else if (inputRatigueya.checked) {
        hipodogeEnemigo.dibujarMascota()
        capipepoEnemigo.dibujarMascota()
        langostelvisEnemigo.dibujarMascota()
        pydosEnemigo.dibujarMascota()
        tucapalmaEnemigo.dibujarMascota()
        colisionesConRatigueya()
    }else if (inputLangostelvis.checked) {
        hipodogeEnemigo.dibujarMascota()
        capipepoEnemigo.dibujarMascota()
        ratigueyaEnemigo.dibujarMascota()
        pydosEnemigo.dibujarMascota()
        tucapalmaEnemigo.dibujarMascota()
        colisionesConLangostelvis()
    }else if (inputPydos.checked) {
        hipodogeEnemigo.dibujarMascota()
        capipepoEnemigo.dibujarMascota()
        ratigueyaEnemigo.dibujarMascota()
        langostelvisEnemigo.dibujarMascota()
        tucapalmaEnemigo.dibujarMascota()
        colisionesConPydos()
    }else {
        hipodogeEnemigo.dibujarMascota()
        capipepoEnemigo.dibujarMascota()
        ratigueyaEnemigo.dibujarMascota()
        langostelvisEnemigo.dibujarMascota()
        pydosEnemigo.dibujarMascota()
        colisionesConTucapalma()
    }
}

function colisionesConHipodoge() {
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(tucapalmaEnemigo)
    }
}

function colisionesConCapipepo() {
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(tucapalmaEnemigo)
    }
}

function colisionesConRatigueya() {
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(tucapalmaEnemigo)
    }
}

function colisionesConLangostelvis() {
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(tucapalmaEnemigo)
    }
}

function colisionesConPydos() {
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(tucapalmaEnemigo)
    }
}

function colisionesConTucapalma() {
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(pydosEnemigo)
    }
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = - 5
    botonArriba.style.background = 'palevioletred'
}

function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = 5
    botonAbajo.style.background = 'palevioletred'
}

function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = - 5
    botonIzquierda.style.background = 'palevioletred'
}

function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
    botonDerecha.style.background = 'palevioletred'
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0

    botonArriba.style.background = '#05BFDB'
    botonAbajo.style.background = '#05BFDB'
    botonIzquierda.style.background = '#05BFDB'
    botonDerecha.style.background = '#05BFDB'
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

function objetoMascotaJugador() {
    for (let i = 0; i < mokepones.length; i++) {
        
        if (mokeponSeleccionado === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const abajoJugador = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto -20
    const arribaJugador = mascotaJugadorObjeto.y +20
    const derechaJugador = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho -20
    const izquierdaJugador = mascotaJugadorObjeto.x +20

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
    sectionSeleccinarAtaque.style.display = "flex"
    sectionMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

window.addEventListener("load" , iniciarJuego)

